'use client'

import { useEffect, useState, useRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import { useRouter } from 'next/navigation'
import Fuse from 'fuse.js'
import Link from 'next/link'
import searchData from 'app/search-data.json'

interface SearchResult {
  item: {
    slug: string
    title: string
    summary: string
  }
  matches?: any[]
}

type HighlightPart = string | React.ReactElement

export function Search() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [fuse, setFuse] = useState<Fuse<any> | null>(null)
  const [isMac, setIsMac] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // Detect OS on mount
  useEffect(() => {
    setIsMac(typeof window !== 'undefined' && /Mac|iPhone|iPad|iPod/.test(navigator.platform))
  }, [])

  // Initialize Fuse index
  useEffect(() => {
    const documents = searchData.map((item: any) => ({
      slug: item.slug,
      title: item.title,
      summary: item.summary,
      tags: item.tags,
      content: item.content,
    }))

    const fuseInstance = new Fuse(documents, {
      keys: ['title', 'summary', 'tags', 'content'],
      includeMatches: true,
      threshold: 0.3,
      minMatchCharLength: 2,
    })

    setFuse(fuseInstance)
  }, [])

  // Search handler
  useEffect(() => {
    if (!fuse || !query.trim()) {
      setResults([])
      setSelectedIndex(0)
      return
    }

    const searchResults = fuse.search(query).slice(0, 8)
    setResults(
      searchResults.map((result) => ({
        item: {
          slug: result.item.slug,
          title: result.item.title,
          summary: result.item.summary,
        },
        matches: result.matches ? Array.from(result.matches) : undefined,
      }))
    )
    setSelectedIndex(0)
  }, [query, fuse])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsOpen(!isOpen)
        if (!isOpen) {
          setTimeout(() => inputRef.current?.focus(), 0)
        }
      }

      if (!isOpen) return

      switch (e.key) {
        case 'Escape':
          setIsOpen(false)
          break
        case 'ArrowDown':
          e.preventDefault()
          setSelectedIndex((i) => (i < results.length - 1 ? i + 1 : i))
          break
        case 'ArrowUp':
          e.preventDefault()
          setSelectedIndex((i) => (i > 0 ? i - 1 : 0))
          break
        case 'Enter':
          e.preventDefault()
          if (results[selectedIndex]) {
            router.push(`/blog/${results[selectedIndex].item.slug}`)
            setIsOpen(false)
            setQuery('')
          }
          break
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, results, selectedIndex, router])

  const highlightMatch = (text: string, indices?: Array<[number, number]>): HighlightPart[] => {
    if (!indices || indices.length === 0) return [text]

    const parts: HighlightPart[] = []
    let lastEnd = 0

    indices.forEach(([start, end]) => {
      if (start > lastEnd) {
        parts.push(text.substring(lastEnd, start))
      }
      parts.push(
        <mark key={`${start}-${end}`} className="bg-yellow-100 dark:bg-yellow-900">
          {text.substring(start, end + 1)}
        </mark>
      )
      lastEnd = end + 1
    })

    if (lastEnd < text.length) {
      parts.push(text.substring(lastEnd))
    }

    return parts
  }

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true)
          setTimeout(() => inputRef.current?.focus(), 0)
        }}
        className="hidden sm:flex items-center gap-2 px-4 py-2 text-xs text-neutral-500 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-800 rounded hover:border-neutral-300 dark:hover:border-neutral-700 transition-colors flex-1 max-w-xs"
        title={`Search (${isMac ? '⌘' : 'Ctrl'}+K)`}
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <span className="hidden lg:inline">Search</span>
        <span className="ml-auto text-xs px-1 py-0.5 bg-neutral-100 dark:bg-neutral-800 rounded">
          {isMac ? '⌘K' : 'Ctrl+K'}
        </span>
      </button>

      {isOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-[9999] bg-black/30"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="fixed top-1/3 left-1/2 -translate-x-1/2 w-full max-w-lg z-50"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="bg-white dark:bg-neutral-900 rounded-lg shadow-xl overflow-hidden">
                <div className="flex items-center border-b border-neutral-200 dark:border-neutral-800 px-4 py-3">
                  <svg
                    className="w-5 h-5 text-neutral-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search blog posts..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 ml-2 pl-2 bg-transparent outline-none text-neutral-900 dark:text-neutral-100 placeholder-neutral-400 dark:placeholder-neutral-500 caret-transparent"
                    autoFocus
                  />
                </div>

                {results.length > 0 ? (
                  <ul className="max-h-96 overflow-y-auto">
                    {results.map((result, index) => (
                      <li
                        key={result.item.slug}
                        className={`border-t border-neutral-100 dark:border-neutral-800 ${
                          index === selectedIndex
                            ? 'bg-neutral-50 dark:bg-neutral-800'
                            : ''
                        }`}
                      >
                        <Link
                          href={`/blog/${result.item.slug}`}
                          onClick={() => {
                            setIsOpen(false)
                            setQuery('')
                          }}
                          className="block px-4 py-3 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors"
                        >
                          <div className="font-medium text-neutral-900 dark:text-neutral-100 text-sm">
                            {highlightMatch(
                              result.item.title,
                              result.matches?.find((m) => m.key === 'title')
                                ?.indices
                            )}
                          </div>
                          <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 line-clamp-2">
                            {highlightMatch(
                              result.item.summary,
                              result.matches?.find((m) => m.key === 'summary')
                                ?.indices
                            )}
                          </div>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : query.trim() ? (
                  <div className="px-4 py-8 text-center text-neutral-500 dark:text-neutral-400">
                    No posts found
                  </div>
                ) : (
                  <div className="px-4 py-8 text-center text-neutral-500 dark:text-neutral-400 text-sm">
                    Start typing to search...
                  </div>
                )}

                <div className="border-t border-neutral-200 dark:border-neutral-800 px-4 py-2 text-xs text-neutral-500 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-950">
                  <span>↑↓ to navigate • Enter to select • Esc to close</span>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}

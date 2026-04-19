import fs from 'fs'
import path from 'path'

export type Metadata = {
  title: string
  subtitle?: string
  publishedAt: string
  summary: string
  image?: string
  tags?: string[]
}

export type BlogPost = {
  metadata: Metadata
  slug: string
  content: string
}

function parseTagList(value: string) {
  let trimmedValue = value.trim()

  if (trimmedValue.startsWith('[')) {
    trimmedValue = trimmedValue.slice(1)
  }

  if (trimmedValue.endsWith(']')) {
    trimmedValue = trimmedValue.slice(0, -1)
  }

  if (!trimmedValue) {
    return []
  }

  return trimmedValue
    .split(',')
    .map((item) => item.trim().replace(/^['"](.*)['"]$/, '$1'))
    .filter(Boolean)
}

function parseFrontmatterValue(key: string, value: string) {
  if (key === 'tags') {
    return parseTagList(value)
  }

  let trimmedValue = value.trim()

  if (trimmedValue.startsWith('[') && trimmedValue.endsWith(']')) {
    return parseTagList(trimmedValue)
  }

  return trimmedValue.replace(/^['"](.*)['"]$/, '$1')
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)
  let frontMatterBlock = match![1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<Metadata> = {}

  frontMatterLines.forEach((line) => {
    let normalizedLine = line.trim()

    if (!normalizedLine || normalizedLine.startsWith('#') || !normalizedLine.includes(':')) {
      return
    }

    let [key, ...valueArr] = normalizedLine.split(':')
    let value = valueArr.join(':').trim()

    metadata[key.trim() as keyof Metadata] = parseFrontmatterValue(key.trim(), value) as never
  })

  return { metadata: metadata as Metadata, content }
}

function getMDXFiles(dir) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

function getMDXData(dir): BlogPost[] {
  let mdxFiles = getMDXFiles(dir)
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

export function getBlogPosts() {
  return getMDXData(path.join(process.cwd(), 'app', 'blog', 'posts'))
}

export function sortBlogPosts(posts: BlogPost[]) {
  return [...posts].sort((a, b) => {
    if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
      return -1
    }

    return 1
  })
}

export function slugifyTag(tag: string) {
  return tag
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
}

export function getAllBlogTags() {
  let tagMap = new Map<string, string>()

  getBlogPosts().forEach((post) => {
    post.metadata.tags?.forEach((tag) => {
      let tagSlug = slugifyTag(tag)

      if (!tagMap.has(tagSlug)) {
        tagMap.set(tagSlug, tag)
      }
    })
  })

  return Array.from(tagMap.entries())
    .map(([slug, name]) => ({ slug, name }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

export function getBlogTagBySlug(tagSlug: string) {
  return getAllBlogTags().find((tag) => tag.slug === tagSlug)
}

export function getBlogPostsByTag(tagSlug: string) {
  return sortBlogPosts(
    getBlogPosts().filter((post) =>
      post.metadata.tags?.some((tag) => slugifyTag(tag) === tagSlug)
    )
  )
}

export function formatDate(date: string, includeRelative = false) {
  let currentDate = new Date()
  if (!date.includes('T')) {
    date = `${date}T00:00:00`
  }
  let targetDate = new Date(date)

  let yearsAgo = currentDate.getFullYear() - targetDate.getFullYear()
  let monthsAgo = currentDate.getMonth() - targetDate.getMonth()
  let daysAgo = currentDate.getDate() - targetDate.getDate()

  let formattedDate = ''

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`
  } else {
    formattedDate = 'Today'
  }

  let fullDate = targetDate.toLocaleString('en-nz', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  })

  if (!includeRelative) {
    return fullDate
  }

  return `${fullDate} (${formattedDate})`
}

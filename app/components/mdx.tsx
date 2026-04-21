import Link from 'next/link'
import Image from 'next/image'
import { MDXRemote } from 'next-mdx-remote/rsc'
import { highlight } from 'sugar-high'
import { codeToHtml } from 'shiki'
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import React from 'react'
import LightboxImage from './lightbox-image'
import { Dialogue, DialogueMessage } from './dialogue'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

function CustomLink(props) {
  let href = props.href

  if (href.startsWith('/')) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
    return <a {...props} />
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />
}

function Code({ children, ...props }) {
  let codeHTML = highlight(children)
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

async function Pre({ children }: { children: React.ReactElement<{ className?: string; children?: string }> }) {
  const lang = (children.props.className ?? '').replace('language-', '') || 'text'
  const code = String(children.props.children ?? '').trimEnd()
  let html: string
  try {
    html = await codeToHtml(code, {
      lang,
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    })
  } catch {
    html = await codeToHtml(code, {
      lang: 'text',
      themes: { light: 'github-light', dark: 'github-dark' },
      defaultColor: false,
    })
  }
  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w\-]+/g, '') // Remove all non-word characters except for -
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children)
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement('a', {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: 'anchor',
        }),
      ],
      children
    )
  }

  Heading.displayName = `Heading${level}`

  return Heading
}

function YouTube ({ id } : { id : string }){
  return (
    <div>
      <iframe
        className="aspect-video w-full"
        src={"https://www.youtube.com/embed/" + id}
        title="YouTube Video Player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      ></iframe>
    </div>
  );
};

function NewThought({
  children,
  title,
}: {
  children: React.ReactNode
  title?: React.ReactNode
}) {
  if (!title) {
    return <span className="newthought">{children}</span>
  }

  return (
    <aside className="newthought-block" aria-label="New thought">
      <h3 className="newthought-title">{title}</h3>
      <div className="newthought-content">{children}</div>
    </aside>
  )
}

function Marginalia({
  children,
  marker = '⊕',
  side = 'right',
}: {
  children: React.ReactNode
  marker?: string
  side?: 'left' | 'right'
}) {
  const id = React.useId().replace(/:/g, '')

  return (
    <span className={`marginalia-wrap marginalia-side-${side}`}>
      <label htmlFor={id} className="marginalia-toggle-label" aria-label="Toggle marginal note">
        {marker}
      </label>
      <input id={id} type="checkbox" className="marginalia-toggle-input" />
      <span className="marginalia">{children}</span>
    </span>
  )
}

let components = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  LightboxImage,
  a: CustomLink,
  code: Code,
  pre: Pre,
  Table,
  YouTube,
  NewThought,
  Marginalia,
  Dialogue,
  DialogueMessage,
}

export function CustomMDX(props) {
  const baseOptions = props.options || {}
  const baseMdxOptions = baseOptions.mdxOptions || {}

  return (
    <MDXRemote
      {...props}
      options={{
        ...baseOptions,
        mdxOptions: {
          ...baseMdxOptions,
          remarkPlugins: [...(baseMdxOptions.remarkPlugins || []), remarkMath],
          rehypePlugins: [...(baseMdxOptions.rehypePlugins || []), rehypeKatex],
        },
      }}
      components={{ ...components, ...(props.components || {}) }}
    />
  )
}

const fs = require('fs')
const path = require('path')

// Inline getMDXData logic
function getMDXData(dir) {
  const files = fs.readdirSync(dir).filter((file) => file.endsWith('.mdx'))
  return files.map((file) => {
    const filePath = path.join(dir, file)
    const content = fs.readFileSync(filePath, 'utf-8')
    const slug = file.replace('.mdx', '')

    // Extract frontmatter
    const frontmatterRegex = /^---\n([\s\S]*?)\n---/
    const match = content.match(frontmatterRegex)
    const frontmatter = match ? match[1] : ''
    const mdxContent = match ? content.slice(match[0].length) : content

    // Simple YAML-like parser for frontmatter
    const metadata = {}
    const lines = frontmatter.split('\n')
    for (const line of lines) {
      const trimmed = line.trim()
      if (!trimmed || trimmed.startsWith('#')) continue

      const colonIndex = line.indexOf(':')
      if (colonIndex === -1) continue

      const key = line.substring(0, colonIndex).trim()
      const value = line.substring(colonIndex + 1).trim()

      if (key === 'tags') {
        // Handle tags array
        const arrayMatch = value.match(/\[(.*?)\]/)
        if (arrayMatch) {
          metadata.tags = arrayMatch[1]
            .split(',')
            .map((t) => t.trim().replace(/^["']|["']$/g, ''))
        } else {
          metadata.tags = value
            .split(',')
            .map((t) => t.trim())
            .filter((t) => t)
        }
      } else if (value.startsWith('"') && value.endsWith('"')) {
        metadata[key] = value.slice(1, -1)
      } else if (value.startsWith("'") && value.endsWith("'")) {
        metadata[key] = value.slice(1, -1)
      } else {
        metadata[key] = value
      }
    }

    return {
      slug,
      metadata,
      content: mdxContent,
    }
  })
}

const postsDir = path.join(process.cwd(), 'app', 'blog', 'posts')
const posts = getMDXData(postsDir)
const searchData = posts.map((post) => ({
  slug: post.slug,
  title: post.metadata.title,
  summary: post.metadata.summary,
  tags: post.metadata.tags ? post.metadata.tags.join(' ') : '',
  content: post.content.substring(0, 500),
}))

fs.writeFileSync(
  path.join(process.cwd(), 'app', 'search-data.json'),
  JSON.stringify(searchData, null, 2)
)

console.log(`Generated search index for ${posts.length} posts`)

import fs from 'fs'
import path from 'path'
import { Client, DateRange } from 'app/clients/utils'

export type ClientProfileMetadata = {
  name: string
  startDate: string
  endDate?: string
  where: string
  coordinates: [number, number]
  url: string
  image: string
  scale?: number
}

export type ClientProfile = {
  metadata: ClientProfileMetadata
  slug: string
  content: string
}

function parseFrontmatterValue(value: string): string | number | boolean | [number, number] {
  if (value.startsWith('[') || value.startsWith('{')) {
    return JSON.parse(value)
  }

  if (value === 'true') {
    return true
  }

  if (value === 'false') {
    return false
  }

  if (!Number.isNaN(Number(value)) && value.trim() !== '') {
    return Number(value)
  }

  return value.replace(/^['\"](.*)['\"]$/, '$1')
}

function parseFrontmatter(fileContent: string) {
  let frontmatterRegex = /---\s*([\s\S]*?)\s*---/
  let match = frontmatterRegex.exec(fileContent)

  if (!match) {
    return {
      metadata: {
        name: '',
        startDate: '',
        where: '',
        coordinates: [0, 0],
        url: '',
        image: '',
      } as ClientProfileMetadata,
      content: fileContent.trim(),
    }
  }

  let frontMatterBlock = match[1]
  let content = fileContent.replace(frontmatterRegex, '').trim()
  let frontMatterLines = frontMatterBlock.trim().split('\n')
  let metadata: Partial<ClientProfileMetadata> = {}

  frontMatterLines.forEach((line) => {
    let [key, ...valueArr] = line.split(': ')
    let value = valueArr.join(': ').trim()

    if (!key || !value) {
      return
    }

    metadata[key.trim() as keyof ClientProfileMetadata] = parseFrontmatterValue(value) as never
  })

  return { metadata: metadata as ClientProfileMetadata, content }
}

function getMDXFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === '.mdx')
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  return parseFrontmatter(rawContent)
}

export function getClientProfiles(): ClientProfile[] {
  let dir = path.join(process.cwd(), 'app', 'clients', 'profiles')
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

export function getClientProfileByName(name: string): ClientProfile | undefined {
  return getClientProfiles().find((profile) => profile.metadata.name === name)
}

export function getClients(): Client[] {
  return getClientProfiles().map((profile) => ({
    name: profile.metadata.name,
    when: new DateRange(profile.metadata.startDate, profile.metadata.endDate),
    where: profile.metadata.where,
    coordinates: profile.metadata.coordinates,
    url: profile.metadata.url,
    image: profile.metadata.image,
    scale: profile.metadata.scale,
  }))
}

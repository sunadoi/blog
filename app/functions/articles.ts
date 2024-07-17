import type { JSX } from "hono/jsx/jsx-runtime"
import type { ArticleIconKey } from "@/constants/articleIconMap"

type Article = {
  slug: string
  frontmatter: Frontmatter
  Component: () => JSX.Element
}

type Tag = {
  [key: string]: number
}

type Frontmatter = {
  title: string
  ogImageTitle: string[]
  description: string
  icon: ArticleIconKey
  tags: ArticleIconKey[]
  publishedAt: string
}

type MDX = {
  frontmatter: Omit<Frontmatter, "ogImageTitle" | "tags"> & { tags: string } & {
    ogImageTitle: string
  }
  default: () => JSX.Element
}

const files = import.meta.glob<MDX>("../articles/**/*.mdx", {
  eager: true,
})

export const getArticles = (): { articles: Article[]; tagCount: Tag } => {
  const tagCount: Tag = {}
  const articles = Object.entries(files)
    .map(([path, file]) => {
      const match = path.match(/([^/]+)\.mdx$/)
      if (!match) throw new Error(`Invalid path, ${path}`)

      const tags: ArticleIconKey[] = file.frontmatter.tags.split(
        ",",
      ) as ArticleIconKey[]

      for (const tag of tags) {
        tagCount[tag] = (tagCount[tag] || 0) + 1
      }

      return {
        slug: match[1],
        frontmatter: {
          ...file.frontmatter,
          ogImageTitle: file.frontmatter.ogImageTitle?.split(","),
          tags,
        },
        Component: file.default,
      }
    })
    .sort((a, b) => {
      return (
        new Date(b.frontmatter.publishedAt).getTime() -
        new Date(a.frontmatter.publishedAt).getTime()
      )
    })

  return { articles, tagCount }
}

export const getArticle = (slug: string): Article | undefined => {
  return getArticles().articles.find((article) => article.slug === slug)
}

export const getArticlesByTag = (tag: string): Article[] => {
  return getArticles().articles.filter((article) =>
    article.frontmatter.tags.includes(tag as ArticleIconKey),
  )
}

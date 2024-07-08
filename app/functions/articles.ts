import type { JSX } from "hono/jsx/jsx-runtime"
import type { ArticleIconKey } from "@/constants/articleIconMap"

type Article = {
  slug: string
  frontmatter: Frontmatter
  Component: () => JSX.Element
}

type Frontmatter = {
  title: string
  icon: ArticleIconKey
  tags: string[]
  publishedAt: string
}

type MDX = {
  frontmatter: Frontmatter
  default: () => JSX.Element
}

const articles = import.meta.glob<MDX>("../articles/**/*.mdx", {
  eager: true,
})

export const getArticles = (): Article[] => {
  return Object.entries(articles).map(([path, article]) => {
    const match = path.match(/([^/]+)\.mdx$/)
    if (!match) throw new Error(`Invalid path, ${path}`)

    return {
      slug: match[1],
      frontmatter: article.frontmatter,
      Component: article.default,
    }
  })
}

export const getArticle = (slug: string): Article | undefined => {
  return getArticles().find((article) => article.slug === slug)
}

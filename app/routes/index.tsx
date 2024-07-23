import { ArticleCard } from "@/components/projects/ArticleCard"
import type { JSX } from "hono/jsx/jsx-runtime"
import { createRoute } from "honox/factory"
import { getArticles } from "../functions/articles"

export default createRoute((c) => {
  const { articles } = getArticles()

  return c.render(
    <div class="mx-4 sm:mx-0 my-10">
      <h1>Articles</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 my-4">
        {articles.reduce((acc, cur, index) => {
          const prev = articles[index - 1]
          const prevYear = new Date(prev?.frontmatter.publishedAt).getFullYear()
          const curYear = new Date(cur.frontmatter.publishedAt).getFullYear()

          if (prevYear !== curYear) {
            acc.push(
              <div class="col-span-1 md:col-span-2 before:border before:border-dashed before:border-border before:h-0.5 before:block before:translate-y-4">
                <span class="text-lg relative z-10 bg-background pr-2">
                  {curYear}
                </span>
              </div>,
            )
          }

          acc.push(
            <a href={`articles/${cur.slug}`}>
              <ArticleCard
                title={cur.frontmatter.title}
                icon={cur.frontmatter.icon}
                tags={cur.frontmatter.tags}
                publishedAt={cur.frontmatter.publishedAt}
              />
            </a>,
          )
          return acc
        }, [] as JSX.Element[])}
      </div>
    </div>,
  )
})

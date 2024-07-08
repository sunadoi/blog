import { createRoute } from "honox/factory"
import { getArticles } from "../functions/articles"
import { ArticleCard } from "@/components/projects/ArticleCard"
import { Card } from "@/components/parts/Card"

export default createRoute((c) => {
  const articles = getArticles()

  return c.render(
    <div className="grid grid-cols-3 gap-4">
      <dig className="col-span-2">
        <Card>
          <h2>Articles</h2>
          <div className="py-4" />
          <ul className="flex flex-col gap-4">
            {articles.map((article) => (
              <li key={article.slug}>
                <a href={`articles/${article.slug}`}>
                  <ArticleCard
                    title={article.frontmatter.title}
                    icon={article.frontmatter.icon}
                    tags={article.frontmatter.tags}
                    publishedAt={article.frontmatter.publishedAt}
                  />
                </a>
              </li>
            ))}
          </ul>
        </Card>
      </dig>
      <Card>
        <h2>Tags</h2>
      </Card>
    </div>,
  )
})

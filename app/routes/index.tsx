import { createRoute } from "honox/factory"
import { getArticles } from "../functions/articles"
import { ArticleCard } from "@/components/projects/ArticleCard"
import { Card } from "@/components/parts/Card"
import { type ArticleIconKey, ArticleIconMap } from "@/constants/articleIconMap"

export default createRoute((c) => {
  const { articles, tagCount } = getArticles()

  return c.render(
    <div className="grid grid-cols-4 gap-4">
      <div className="col-span-4 md:col-span-3">
        <Card>
          <h2>Articles</h2>
          <div className="py-4" />
          <ul className="flex flex-col gap-4">
            {articles.map((article) => (
              <li>
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
      </div>
      <div class="hidden md:block col-span-1">
        <Card>
          <h2>Tags</h2>
          <div className="py-4" />
          <ul className="flex flex-col gap-4">
            {Object.entries(tagCount).map(([tag, count]) => {
              const icon = ArticleIconMap.get(tag as ArticleIconKey)
              return (
                <li>
                  <a
                    href={`/tags/${tag}`}
                    className="flex gap-2 hover:opacity-80"
                  >
                    {icon && <img src={icon} alt="" width={24} height={24} />}
                    <span>
                      {tag} ({count})
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </Card>
      </div>
    </div>,
  )
})

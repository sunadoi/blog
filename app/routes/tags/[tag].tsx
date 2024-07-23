import { ArticleCard } from "@/components/projects/ArticleCard"
import { ssgParams } from "hono/ssg"
import { createRoute } from "honox/factory"
import { getArticles, getArticlesByTag } from "../../functions/articles"

export default createRoute(
  ssgParams(() =>
    Object.entries(getArticles().tagCount).map(([tag]) => ({ tag })),
  ),
  async (c) => {
    const tag = c.req.param("tag")
    const articles = await getArticlesByTag(tag)

    return c.render(
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mx-4 sm:mx-0 my-10">
        {articles.map((article) => (
          <a href={`/articles/${article.slug}`}>
            <ArticleCard
              title={article.frontmatter.title}
              icon={article.frontmatter.icon}
              tags={article.frontmatter.tags}
              publishedAt={article.frontmatter.publishedAt}
            />
          </a>
        ))}
      </div>,
      {
        title: `${tag}の記事一覧`,
      },
    )
  },
)

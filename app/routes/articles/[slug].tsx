import { ssgParams } from "hono/ssg"
import { createRoute } from "honox/factory"
import { getArticle, getArticles } from "../../functions/articles"

export default createRoute(
  ssgParams(() => getArticles().map((article) => ({ slug: article.slug }))),
  async (c) => {
    const slug = c.req.param("slug")
    const article = getArticle(slug)

    if (!article) return c.redirect("/404")

    return c.render(
      <div>
        <p>{article.slug}</p>
        <p>{article.frontmatter.title}</p>
        <p>{article.Component()}</p>
      </div>,
      {
        title: article?.frontmatter.title,
      },
    )
  },
)

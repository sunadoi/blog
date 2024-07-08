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
        <article className="flex flex-col mx-24 gap-8 leading-8">
          <h1 className="font-bold text-primary">
            {article.frontmatter.title}
          </h1>
          {article.Component()}
        </article>
      </div>,
      {
        title: article?.frontmatter.title,
      },
    )
  },
)

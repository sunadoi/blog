import { ssgParams } from "hono/ssg"
import { createRoute } from "honox/factory"
import { getArticle, getArticles } from "../../functions/articles"
import { Card } from "@/components/parts/Card"
import { Badge } from "@/components/parts/Badge"
import { ArticleIconMap } from "@/constants/articleIconMap"
import { BuyMeCoffee } from "@/components/projects/BuyMeCoffee"

export default createRoute(
  ssgParams(() =>
    getArticles().articles.map((article) => ({ slug: article.slug })),
  ),
  async (c) => {
    const slug = c.req.param("slug")
    const article = getArticle(slug)

    if (!article) return c.redirect("/404")

    return c.render(
      <div className="flex flex-col gap-8 mx-32">
        <Card>
          <article className="flex flex-col gap-8 leading-8">
            <h1 className="font-bold text-primary">
              {article.frontmatter.title}
            </h1>
            <div className="flex gap-4">
              {article.frontmatter.tags.map((tag) => (
                <Badge icon={ArticleIconMap.get(tag) ?? ""}>{tag}</Badge>
              ))}
            </div>
            {article.Component()}
          </article>
        </Card>
        <Card>
          <BuyMeCoffee />
        </Card>
      </div>,
      {
        title: article?.frontmatter.title,
      },
    )
  },
)

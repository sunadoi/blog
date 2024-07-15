import { ssgParams } from "hono/ssg"
import { createRoute } from "honox/factory"
import { getArticle, getArticles } from "../../functions/articles"
import { Badge } from "@/components/parts/Badge"
import { ArticleIconMap } from "@/constants/articleIconMap"
import { BuyMeCoffee } from "@/components/projects/BuyMeCoffee"
import { Toc, TocButton } from "@/components/projects/_Toc.island"
import { Card } from "@/components/parts/Card"

export default createRoute(
  ssgParams(() =>
    getArticles().articles.map((article) => ({ slug: article.slug })),
  ),
  async (c) => {
    const slug = c.req.param("slug")
    const article = getArticle(slug)

    if (!article) return c.redirect("/404")

    return c.render(
      <div class="grid grid-cols-8 gap-4">
        <div className="col-span-8 flex flex-col gap-8 lg:col-span-6">
          <Card display={{ initial: "hidden", sm: "visible" }}>
            <article className="article flex flex-col gap-8 leading-8">
              <h1 className="font-medium">{article.frontmatter.title}</h1>
              <div class="flex flex-col gap-2 lg:hidden">
                <time>公開日: {article.frontmatter.publishedAt}</time>
                <div class="flex gap-4">
                  {article.frontmatter.tags.map((tag) => {
                    const Icon = ArticleIconMap.get(tag)
                    return (
                      <a href={`/tags/${tag}`}>
                        {Icon && <Badge Icon={Icon}>{tag}</Badge>}
                      </a>
                    )
                  })}
                </div>
              </div>
              {article.Component()}
            </article>
          </Card>
          <Card display="visible">
            <BuyMeCoffee />
          </Card>
        </div>
        <div class="col-span-2 hidden lg:flex lg:flex-col lg:gap-4">
          <Card display="visible">
            <div class="flex flex-col gap-4">
              <time>公開日: {article.frontmatter.publishedAt}</time>
              <div>
                {article.frontmatter.tags.map((tag) => {
                  const Icon = ArticleIconMap.get(tag)
                  return (
                    <a href={`/tags/${tag}`}>
                      {Icon && <Badge Icon={Icon}>{tag}</Badge>}
                    </a>
                  )
                })}
              </div>
            </div>
          </Card>
          <div class="sticky top-4 max-h-80">
            <Card display="visible">
              <Toc />
            </Card>
          </div>
        </div>
        <div class="lg:hidden">
          <TocButton />
        </div>
      </div>,
      {
        title: article?.frontmatter.title,
        description: article?.frontmatter.description,
      },
    )
  },
)

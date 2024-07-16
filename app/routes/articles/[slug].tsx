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
      <div class="grid grid-cols-8 gap-4 sm:my-10">
        <div className="col-span-8 flex flex-col gap-8 lg:col-span-6">
          <Card type={{ initial: "slim", sm: "wide" }}>
            <article className="article flex flex-col gap-8 leading-8 p-4">
              <h1 className="font-semibold">{article.frontmatter.title}</h1>
              <div class="flex flex-col gap-2 border-b pb-4 lg:hidden">
                <time>公開日: {article.frontmatter.publishedAt}</time>
                <div class="flex gap-4">
                  {article.frontmatter.tags.map((tag) => {
                    const Icon = ArticleIconMap.get(tag)
                    return (
                      <a href={`/tags/${tag}`}>
                        {Icon && (
                          <Badge Icon={Icon} clickable={true}>
                            {tag}
                          </Badge>
                        )}
                      </a>
                    )
                  })}
                </div>
              </div>
              {article.Component()}
            </article>
          </Card>
          <Card type={{ initial: "slim", sm: "wide" }}>
            <BuyMeCoffee />
          </Card>
        </div>
        <div class="col-span-2 hidden lg:flex lg:flex-col lg:gap-4">
          <Card type="wide">
            <div class="flex flex-col gap-4">
              <time>公開日: {article.frontmatter.publishedAt}</time>
              <div class="flex gap-2">
                {article.frontmatter.tags.map((tag) => {
                  const Icon = ArticleIconMap.get(tag)
                  return (
                    <a href={`/tags/${tag}`}>
                      {Icon && (
                        <Badge Icon={Icon} clickable={true}>
                          {tag}
                        </Badge>
                      )}
                    </a>
                  )
                })}
              </div>
            </div>
          </Card>
          <div class="sticky top-4 max-h-80">
            <Card type="wide">
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

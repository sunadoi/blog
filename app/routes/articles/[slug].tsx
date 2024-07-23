import { Badge } from "@/components/parts/Badge"
import { Card } from "@/components/parts/Card"
import { BuyMeCoffee } from "@/components/projects/BuyMeCoffee"
import { SNSButton } from "@/components/projects/SNSButton"
import { LikeButton } from "@/components/projects/_LikeButton.island"
import { Toc, TocButton } from "@/components/projects/_Toc.island"
import { ArticleIconMap } from "@/constants/articleIconMap"
import { baseURL } from "@/constants/site"
import { ssgParams } from "hono/ssg"
import { createRoute } from "honox/factory"
import { getArticle, getArticles } from "../../functions/articles"

export default createRoute(
  ssgParams(() =>
    getArticles().articles.map((article) => ({ slug: article.slug })),
  ),
  async (c) => {
    const slug = c.req.param("slug")
    const article = getArticle(slug)

    if (!article) return c.redirect("/404")

    return c.render(
      <div class="grid grid-cols-8 gap-4 mb-8 sm:my-10">
        <div className="col-span-8 flex flex-col gap-8 lg:col-span-6">
          <Card type={{ initial: "slim", sm: "wide" }}>
            <article className="article flex flex-col gap-8 leading-8 p-4">
              <h1 className="font-semibold">{article.frontmatter.title}</h1>
              <div class="flex flex-col gap-4 border-b pb-4 lg:hidden">
                <div class="flex flex-col gap-1">
                  <time>公開日: {article.frontmatter.publishedAt}</time>
                  <time>最終更新日: {article.frontmatter.updatedAt}</time>
                </div>
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
            <div class="flex justify-center items-center py-4 gap-10 sm:gap-8 md:gap-20">
              <LikeButton slug={slug} />
              <SNSButton slug={slug} />
              <div class="hidden sm:block">
                <BuyMeCoffee />
              </div>
            </div>
          </Card>
          <div class="block sm:hidden">
            <Card type={{ initial: "slim", sm: "wide" }}>
              <div class="flex justify-center items-center py-4">
                <BuyMeCoffee />
              </div>
            </Card>
          </div>
        </div>
        <div class="col-span-2 hidden lg:flex lg:flex-col lg:gap-4">
          <Card type="wide">
            <div class="flex flex-col gap-4">
              <div class="flex flex-col gap-2">
                <time>公開日: {article.frontmatter.publishedAt}</time>
                <time>最終更新日: {article.frontmatter.updatedAt}</time>
              </div>
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
        ogImagePath: new URL(`/ogimage/${slug}.png`, baseURL).toString(),
      },
    )
  },
)

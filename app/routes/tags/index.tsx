import { Badge } from "@/components/parts/Badge"
import { Card } from "@/components/parts/Card"
import { type ArticleIconKey, ArticleIconMap } from "@/constants/articleIconMap"
import { getArticles } from "@/functions/articles"
import { createRoute } from "honox/factory"

export default createRoute(async (c) => {
  const { tagCount } = await getArticles()

  return c.render(
    <div className="flex flex-col gap-8 mx-4 sm:mx-0 my-10">
      <h1>Tags</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {Object.entries(tagCount)
          .sort((a, b) => b[1] - a[1])
          .map(([tag, count]) => {
            const Icon = ArticleIconMap.get(tag as ArticleIconKey)
            return (
              <a className="hover:scale-105 duration-150" href={`/tags/${tag}`}>
                <Card type="wide">
                  <div className="grid grid-rows-4 place-items-center gap-2 h-full">
                    <div class="flex items-center row-span-2">
                      <div class="grid place-items-center w-16 h-16">
                        {Icon &&
                          (typeof Icon === "string" ? (
                            <span class="grid place-items-center text-2xl sm:text-4xl">
                              {Icon}
                            </span>
                          ) : (
                            <Icon />
                          ))}
                      </div>
                    </div>
                    <p className="row-span-1 font-semibold">{tag}</p>
                    <div className="row-span-1">
                      <Badge size="md">{count}記事</Badge>
                    </div>
                  </div>
                </Card>
              </a>
            )
          })}
      </div>
    </div>,
    {
      title: "Tag一覧",
    },
  )
})

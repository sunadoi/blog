import { Badge } from "@/components/parts/Badge"
import { Card } from "@/components/parts/Card"
import { type ArticleIconKey, ArticleIconMap } from "@/constants/articleIconMap"
import { getArticles } from "@/functions/articles"
import { createRoute } from "honox/factory"

export default createRoute(async (c) => {
  const { tagCount } = await getArticles()

  return c.render(
    <div className="flex flex-col gap-8">
      <h1>Tags</h1>
      <div className="grid grid-cols-6 gap-4">
        {Object.entries(tagCount)
          .sort((a, b) => b[1] - a[1])
          .map(([tag, count]) => {
            const icon = ArticleIconMap.get(tag as ArticleIconKey)
            return (
              <a className="hover:opacity-70" href={`/tags/${tag}`}>
                <Card>
                  <div className="grid grid-rows-4 place-items-center gap-2 h-full">
                    {icon && (
                      <img
                        src={icon}
                        alt=""
                        className="flex items-center row-span-2"
                        width={64}
                        height={64}
                      />
                    )}
                    <p className="row-span-1 font-semibold">{tag}</p>
                    <div className="row-span-1">
                      <Badge icon="">{count}記事</Badge>
                    </div>
                  </div>
                </Card>
              </a>
            )
          })}
      </div>
    </div>,
    {
      title: "tag一覧",
    },
  )
})

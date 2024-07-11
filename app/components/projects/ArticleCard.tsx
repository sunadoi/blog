import { type ArticleIconKey, ArticleIconMap } from "@/constants/articleIconMap"

type ArticleCardProps = {
  icon: ArticleIconKey
  title: string
  tags: string[]
  publishedAt: string
}

export const ArticleCard = ({ title, icon, publishedAt }: ArticleCardProps) => {
  const iconSVG = ArticleIconMap.get(icon)
  return (
    <div className="flex gap-8 border rounded-md p-4 transition-opacity hover:bg-popover">
      <img src={iconSVG} alt="" width={64} height={64} />
      <div className="flex flex-col gap-2 py-2 md:py-4">
        <h3 class="line-clamp-3">{title}</h3>
        <p>{publishedAt}</p>
      </div>
    </div>
  )
}

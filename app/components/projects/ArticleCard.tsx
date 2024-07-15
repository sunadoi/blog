import { type ArticleIconKey, ArticleIconMap } from "@/constants/articleIconMap"

type ArticleCardProps = {
  icon: ArticleIconKey
  title: string
  tags: string[]
  publishedAt: string
}

export const ArticleCard = ({ title, icon, publishedAt }: ArticleCardProps) => {
  const Icon = ArticleIconMap.get(icon)
  return (
    <div className="flex items-center gap-8 bg-card rounded-lg h-full px-4 py-2 md:py-4 hover:scale-105 duration-150 shadow-md">
      {Icon && <Icon width={64} height={64} />}
      <div className="flex flex-col gap-2 py-2 md:py-4">
        <h3 class="line-clamp-3">{title}</h3>
        <p>{publishedAt}</p>
      </div>
    </div>
  )
}

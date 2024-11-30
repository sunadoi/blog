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
    <div class="flex items-center gap-6 bg-card rounded-lg h-full min-h-32 px-4 py-2 md:py-4 hover:scale-105 duration-150 shadow-md">
      <div class="grid place-items-center shrink-0 w-8 h-8 sm:w-14 sm:h-14">
        {Icon &&
          (typeof Icon === "string" ? (
            <span class="text-2xl sm:text-4xl">{Icon}</span>
          ) : (
            <Icon />
          ))}
      </div>
      <div className="flex flex-col gap-2 py-2 md:py-4">
        <h3 class="line-clamp-3">{title}</h3>
        <p>{publishedAt}</p>
      </div>
    </div>
  )
}

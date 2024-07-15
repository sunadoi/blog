import { fetchOgp } from "./fetchOGP"
import { Anchor } from "./Anchor"

export const EmbedLink = async ({ url }: { url: string }) => {
  const ogp = await fetchOgp(url)
  if (!ogp || !ogp.image) return <Anchor href={url}>{url}</Anchor>

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      class="transition-opacity hover:opacity-70"
    >
      <div class="flex border border-slate-6 rounded-md my-2 h-32">
        <div class="flex flex-col justify-between gap-2 h-full w-full p-4">
          <span class="text-sm font-bold text-ellipsis line-clamp-1">
            {ogp.title}
          </span>
          <span class="text-xs text-ellipsis line-clamp-2 text-slate-10">
            {ogp.description}
          </span>
          <div class="flex gap-2 items-center">
            {ogp.favicon && (
              <img src={ogp.favicon} width={16} height={16} alt="favicon" />
            )}
            <span class="text-xs">{ogp.host}</span>
          </div>
        </div>
        <img
          src={ogp.image}
          class="h-full w-fit rounded-r-md object-cover hidden sm:block"
          alt="ogp"
        />
      </div>
    </a>
  )
}

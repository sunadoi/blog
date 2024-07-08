import { fetchOgp } from "./fetchOGP"
import { Anchor } from "./Anchor"

export const EmbedLink = async ({ url }: { url: string }) => {
  const ogp = await fetchOgp(url)
  if (!ogp) return <Anchor url={url}>{url}</Anchor>

  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      class="transition-opacity hover:opacity-70"
    >
      <div class="flex border border-slate-6 rounded-md h-32">
        <div class="flex flex-col justify-between px-6 py-4 h-full w-full max-md:px-4">
          <div>
            <p class="font-bold text-ellipsis line-clamp-1 max-md:text-sm">
              {ogp.title}
            </p>
            <p class="text-sm text-ellipsis line-clamp-2 text-slate-10 max-md:text-xs">
              {ogp.description}
            </p>
          </div>
          <div class="flex gap-2 items-center">
            {ogp.favicon && (
              <img src={ogp.favicon} width={16} height={16} alt="favicon" />
            )}
            <p class="text-xs">{ogp.host}</p>
          </div>
        </div>
        <div class="h-full">
          <img
            src={ogp.image}
            class="h-full w-fit rounded-r-md max-w-xs object-cover"
            alt="ogp"
          />
        </div>
      </div>
    </a>
  )
}

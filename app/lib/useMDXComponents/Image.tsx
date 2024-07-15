import { getAssetPath } from "@/functions/assetPath"
import type { JSX } from "hono/jsx/jsx-runtime"

export const Img = async ({
  src,
  alt,
  caption,
  ...rest
}: JSX.IntrinsicElements["img"] & { caption?: string }) => {
  return (
    <div class="flex flex-col gap-2">
      <img
        {...rest}
        class="mx-auto"
        src={getAssetPath(src ?? "")}
        alt={alt ?? ""}
      />
      {caption && (
        <p class="text-sm text-center text-slate-11 break-words">{caption}</p>
      )}
    </div>
  )
}

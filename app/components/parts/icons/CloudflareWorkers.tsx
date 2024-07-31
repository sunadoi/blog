import { getAssetPath } from "@/functions/assetPath"

export const CloudflareWorkersIcon = () => {
  return (
    <img
      src={getAssetPath("/assets/cloudflare-workers.webp")}
      alt="Cloudflare Workers Icon"
      width="100%"
      height="100%"
    />
  )
}

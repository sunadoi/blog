import { getAssetPath } from "@/functions/assetPath"

export const SizumeIcon = () => {
  return (
    <img
      src={getAssetPath("/assets/sizume.webp")}
      alt="sizume icon"
      width="100%"
      height="100%"
    />
  )
}

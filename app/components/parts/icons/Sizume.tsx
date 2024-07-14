import { getAssetPath } from "@/functions/assetPath"
import type { SVGIcon } from "@/types/SVGIcon"

export const SizumeIcon: SVGIcon = ({ width, height }) => {
  return (
    <img
      src={getAssetPath("/assets/sizume.webp")}
      alt="sizume icon"
      width={width}
      height={height}
    />
  )
}

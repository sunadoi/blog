import { getAssetPath } from "@/functions/assetPath"

export const NextJSIcon = () => {
  return (
    // svgだとうまく表示されないケースがあったのでimgを使う
    <img
      src={getAssetPath("/assets/nextjs.webp")}
      alt="Next.js Icon"
      width="100%"
      height="100%"
    />
  )
}

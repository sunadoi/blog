import { getAssetPath } from "@/functions/assetPath"

export const NodeJSIcon = () => {
  return (
    // svgだとうまく表示されないケースがあったのでimgを使う
    <img
      src={getAssetPath("/assets/nodejs.webp")}
      alt="Node.js Icon"
      width="100%"
      height="100%"
    />
  )
}

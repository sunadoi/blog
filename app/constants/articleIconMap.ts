import { getAssetPath } from "@/functions/assetPath"

export type ArticleIconKey = "React" | "Go" | "AWS"

export const ArticleIconMap = new Map<ArticleIconKey, string>([
  ["React", getAssetPath("/assets/code/react.svg")],
  ["Go", getAssetPath("/assets/code/go.svg")],
  ["AWS", getAssetPath("/assets/code/aws.svg")],
])

import { getAssetPath } from "@/functions/assetPath"

export const FileIconMap = new Map<string, string>([
  ["tsx", getAssetPath("/assets/react.svg")],
  ["go", getAssetPath("/assets/code/go.svg")],
])

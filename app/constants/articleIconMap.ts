import ReactIcon from "@/assets/code/react.svg"
import GoFileIcon from "@/assets/code/go.svg"

export type ArticleIconKey = "React" | "Go"

export const ArticleIconMap = new Map<ArticleIconKey, string>([
  ["React", ReactIcon],
  ["Go", GoFileIcon],
])

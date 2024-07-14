import { ReactIcon } from "@/components/parts/icons/React"
import { GoIcon } from "@/components/parts/icons/Go"
import { AWSIcon } from "@/components/parts/icons/AWS"
import type { SVGIcon } from "@/types/SVGIcon"

export type ArticleIconKey = "React" | "Go" | "AWS"

export const ArticleIconMap = new Map<ArticleIconKey, SVGIcon>([
  ["React", ReactIcon],
  ["Go", GoIcon],
  ["AWS", AWSIcon],
])

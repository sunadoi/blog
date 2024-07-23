import { AWSIcon } from "@/components/parts/icons/AWS"
import { DBIcon } from "@/components/parts/icons/DB"
import { GoIcon } from "@/components/parts/icons/Go"
import { ReactIcon } from "@/components/parts/icons/React"
import type { JSX } from "hono/jsx/jsx-runtime"

export type ArticleIconKey =
  | "React"
  | "Go"
  | "AWS"
  | "設計"
  | "データエンジニアリング"

export const ArticleIconMap = new Map<
  ArticleIconKey,
  (() => JSX.Element) | string
>([
  ["React", ReactIcon],
  ["Go", GoIcon],
  ["AWS", AWSIcon],
  ["設計", "📐"],
  ["データエンジニアリング", DBIcon],
])

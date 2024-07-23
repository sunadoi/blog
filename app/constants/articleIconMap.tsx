import { AWSIcon } from "@/components/parts/icons/AWS"
import { DBIcon } from "@/components/parts/icons/DB"
import { GoIcon } from "@/components/parts/icons/Go"
import { MySQLIcon } from "@/components/parts/icons/MySQL"
import { NestJSIcon } from "@/components/parts/icons/NestJS"
import { NodeJSIcon } from "@/components/parts/icons/NodeJS"
import { PrismaIcon } from "@/components/parts/icons/Prisma"
import { ReactIcon } from "@/components/parts/icons/React"
import { TypeScriptIcon } from "@/components/parts/icons/TypeScript"
import type { JSX } from "hono/jsx/jsx-runtime"

export type ArticleIconKey =
  | "TypeScript"
  | "React"
  | "NestJS"
  | "Node.js"
  | "prisma"
  | "Go"
  | "MySQL"
  | "AWS"
  | "設計"
  | "データ"

export const ArticleIconMap = new Map<
  ArticleIconKey,
  (() => JSX.Element) | string
>([
  ["TypeScript", TypeScriptIcon],
  ["React", ReactIcon],
  ["NestJS", NestJSIcon],
  ["Node.js", NodeJSIcon],
  ["prisma", PrismaIcon],
  ["MySQL", MySQLIcon],
  ["Go", GoIcon],
  ["AWS", AWSIcon],
  ["設計", "📐"],
  ["データ", DBIcon],
])

import { AWSIcon } from "@/components/parts/icons/AWS"
import { DBIcon } from "@/components/parts/icons/DB"
import { DockerIcon } from "@/components/parts/icons/Docker"
import { ESLintIcon } from "@/components/parts/icons/ESLint"
import { FirebaseIcon } from "@/components/parts/icons/Firebase"
import { FirestoreIcon } from "@/components/parts/icons/Firestore"
import { GitIcon } from "@/components/parts/icons/Git"
import { GitHubIcon } from "@/components/parts/icons/GitHub"
import { GitHubActionsIcon } from "@/components/parts/icons/GitHubActions"
import { GoIcon } from "@/components/parts/icons/Go"
import { JavaScriptIcon } from "@/components/parts/icons/JavaScript"
import { MySQLIcon } from "@/components/parts/icons/MySQL"
import { NestJSIcon } from "@/components/parts/icons/NestJS"
import { NextJSIcon } from "@/components/parts/icons/NextJS"
import { NodeJSIcon } from "@/components/parts/icons/NodeJS"
import { PrismaIcon } from "@/components/parts/icons/Prisma"
import { ReactIcon } from "@/components/parts/icons/React"
import { TypeScriptIcon } from "@/components/parts/icons/TypeScript"
import type { JSX } from "hono/jsx/jsx-runtime"

export type ArticleIconKey =
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Next.js"
  | "NestJS"
  | "Node.js"
  | "prisma"
  | "ESLint"
  | "Go"
  | "MySQL"
  | "Docker"
  | "AWS"
  | "Firebase"
  | "Firestore"
  | "GitHub"
  | "GitHub Actions"
  | "Git"
  | "設計"
  | "DevOps"
  | "データ"

export const ArticleIconMap = new Map<
  ArticleIconKey,
  (() => JSX.Element) | string
>([
  ["JavaScript", JavaScriptIcon],
  ["TypeScript", TypeScriptIcon],
  ["React", ReactIcon],
  ["Next.js", NextJSIcon],
  ["NestJS", NestJSIcon],
  ["Node.js", NodeJSIcon],
  ["prisma", PrismaIcon],
  ["ESLint", ESLintIcon],
  ["Go", GoIcon],
  ["MySQL", MySQLIcon],
  ["Docker", DockerIcon],
  ["AWS", AWSIcon],
  ["Firebase", FirebaseIcon],
  ["Firestore", FirestoreIcon],
  ["GitHub", GitHubIcon],
  ["GitHub Actions", GitHubActionsIcon],
  ["Git", GitIcon],
  ["設計", "📐"],
  ["DevOps", "⚙️"],
  ["データ", DBIcon],
])

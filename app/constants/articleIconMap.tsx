import type { JSX } from "hono/jsx/jsx-runtime"
import { AWSIcon } from "@/components/parts/icons/AWS"
import { ClaudeAIIcon } from "@/components/parts/icons/ClaudeAI"
import { CloudflareIcon } from "@/components/parts/icons/Cloudflare"
import { CloudflareWorkersIcon } from "@/components/parts/icons/CloudflareWorkers"
import { DBIcon } from "@/components/parts/icons/DB"
import { DockerIcon } from "@/components/parts/icons/Docker"
import { ESLintIcon } from "@/components/parts/icons/ESLint"
import { FirebaseIcon } from "@/components/parts/icons/Firebase"
import { FirestoreIcon } from "@/components/parts/icons/Firestore"
import { GitIcon } from "@/components/parts/icons/Git"
import { GitHubIcon } from "@/components/parts/icons/GitHub"
import { GitHubActionsIcon } from "@/components/parts/icons/GitHubActions"
import { GoIcon } from "@/components/parts/icons/Go"
import { HonoIcon } from "@/components/parts/icons/Hono"
import { JavaScriptIcon } from "@/components/parts/icons/JavaScript"
import { LinuxIcon } from "@/components/parts/icons/Linux"
import { MCPIcon } from "@/components/parts/icons/MCP"
import { MySQLIcon } from "@/components/parts/icons/MySQL"
import { NestJSIcon } from "@/components/parts/icons/NestJS"
import { NextJSIcon } from "@/components/parts/icons/NextJS"
import { NodeJSIcon } from "@/components/parts/icons/NodeJS"
import { PlaywrightIcon } from "@/components/parts/icons/Playwright"
import { PrismaIcon } from "@/components/parts/icons/Prisma"
import { ReactIcon } from "@/components/parts/icons/React"
import { RenovateIcon } from "@/components/parts/icons/Renovate"
import { StorybookIcon } from "@/components/parts/icons/Storybook"
import { SvelteIcon } from "@/components/parts/icons/Svelte"
import { TerraformIcon } from "@/components/parts/icons/Terraform"
import { TypeScriptIcon } from "@/components/parts/icons/TypeScript"
import { ViteIcon } from "@/components/parts/icons/Vite"
import { VitestIcon } from "@/components/parts/icons/Vitest"

export type ArticleIconKey =
  | "ブラウザ"
  | "JavaScript"
  | "TypeScript"
  | "React"
  | "Next.js"
  | "Svelte"
  | "Hono"
  | "Storybook"
  | "NestJS"
  | "Node.js"
  | "prisma"
  | "ESLint"
  | "Vite"
  | "Vitest"
  | "Playwright"
  | "Cloudflare"
  | "Cloudflare Workers"
  | "Go"
  | "MySQL"
  | "Docker"
  | "AWS"
  | "Firebase"
  | "Firestore"
  | "Terraform"
  | "Snowflake"
  | "GitHub"
  | "GitHub Actions"
  | "Git"
  | "Linux"
  | "設計"
  | "DevOps"
  | "データ"
  | "Renovate"
  | "Claude AI"
  | "MCP"

export const ArticleIconMap = new Map<
  ArticleIconKey,
  (() => JSX.Element) | string
>([
  ["ブラウザ", "🌐"],
  ["JavaScript", JavaScriptIcon],
  ["TypeScript", TypeScriptIcon],
  ["React", ReactIcon],
  ["Next.js", NextJSIcon],
  ["Svelte", SvelteIcon],
  ["Hono", HonoIcon],
  ["Storybook", StorybookIcon],
  ["NestJS", NestJSIcon],
  ["Node.js", NodeJSIcon],
  ["prisma", PrismaIcon],
  ["ESLint", ESLintIcon],
  ["Vite", ViteIcon],
  ["Vitest", VitestIcon],
  ["Playwright", PlaywrightIcon],
  ["Cloudflare", CloudflareIcon],
  ["Cloudflare Workers", CloudflareWorkersIcon],
  ["Go", GoIcon],
  ["MySQL", MySQLIcon],
  ["Docker", DockerIcon],
  ["AWS", AWSIcon],
  ["Firebase", FirebaseIcon],
  ["Firestore", FirestoreIcon],
  ["Terraform", TerraformIcon],
  ["Snowflake", "❄️"],
  ["GitHub", GitHubIcon],
  ["GitHub Actions", GitHubActionsIcon],
  ["Git", GitIcon],
  ["Linux", LinuxIcon],
  ["設計", "📐"],
  ["DevOps", "⚙️"],
  ["データ", DBIcon],
  ["Renovate", RenovateIcon],
  ["Claude AI", ClaudeAIIcon],
  ["MCP", MCPIcon],
])

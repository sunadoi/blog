import { GoIcon } from "@/components/parts/icons/Go"
import { ReactIcon } from "@/components/parts/icons/React"
import { TypeScriptIcon } from "@/components/parts/icons/TypeScript"
import type { JSX } from "hono/jsx/jsx-runtime"

export const FileIconMap = new Map<string, () => JSX.Element>([
  ["ts", TypeScriptIcon],
  ["tsx", ReactIcon],
  ["go", GoIcon],
])

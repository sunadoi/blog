import { GoIcon } from "@/components/parts/icons/Go"
import { ReactIcon } from "@/components/parts/icons/React"
import type { JSX } from "hono/jsx/jsx-runtime"

export const FileIconMap = new Map<string, () => JSX.Element>([
  ["tsx", ReactIcon],
  ["go", GoIcon],
])

import { ReactIcon } from "@/components/parts/icons/React"
import { GoIcon } from "@/components/parts/icons/Go"
import type { SVGIcon } from "@/types/SVGIcon"

export const FileIconMap = new Map<string, SVGIcon>([
  ["tsx", ReactIcon],
  ["go", GoIcon],
])

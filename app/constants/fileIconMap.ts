import type { JSX } from "hono/jsx/jsx-runtime"
import { DockerIcon } from "@/components/parts/icons/Docker"
import { GoIcon } from "@/components/parts/icons/Go"
import { JavaScriptIcon } from "@/components/parts/icons/JavaScript"
import { ReactIcon } from "@/components/parts/icons/React"
import { TerraformIcon } from "@/components/parts/icons/Terraform"
import { TypeScriptIcon } from "@/components/parts/icons/TypeScript"

export const FileIconMap = new Map<string, () => JSX.Element>([
  ["js", JavaScriptIcon],
  ["ts", TypeScriptIcon],
  ["tsx", ReactIcon],
  ["go", GoIcon],
  ["tf", TerraformIcon],
  ["dockerfile", DockerIcon],
])

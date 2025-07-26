import type {} from "hono"

type Head = {
  title?: string
  description?: string
  ogImagePath?: string
}

declare module "hono" {
  interface ContextRenderer {
    // biome-ignore lint/style/useShorthandFunctionType: interface declaration needs call signature format
    (
      content: string | Promise<string>,
      head?: Head,
    ): Response | Promise<Response>
  }
}

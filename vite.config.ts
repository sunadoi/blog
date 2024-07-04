import ssg from "@hono/vite-ssg"
import honox from "honox/vite"
import client from "honox/vite/client"
import { defineConfig } from "vite"
import mdx from "@mdx-js/rollup"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import remarkBreaks from "remark-breaks"

export default defineConfig(({ mode }) => {
  return mode === "client"
    ? {
        plugins: [client()],
      }
    : {
        build: { emptyOutDir: false },
        plugins: [
          honox(),
          ssg({ entry: "./app/server.ts" }),
          mdx({
            jsxImportSource: "hono/jsx",
            remarkPlugins: [
              remarkFrontmatter,
              remarkMdxFrontmatter,
              remarkBreaks,
            ],
          }),
        ],
      }
})

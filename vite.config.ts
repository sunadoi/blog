import path from "node:path"
import ssg from "@hono/vite-ssg"
import honox from "honox/vite"
import client from "honox/vite/client"
import { defineConfig } from "vite"
import mdx from "@mdx-js/rollup"
import remarkFrontmatter from "remark-frontmatter"
import remarkMdxFrontmatter from "remark-mdx-frontmatter"
import remarkGfm from "remark-gfm"
import remarkBreaks from "remark-breaks"
import rehypePrettyCode from "rehype-pretty-code"
import { transformerCopyButton } from "@rehype-pretty/transformers"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import Sitemap from "vite-plugin-sitemap"
import { baseURL } from "./app/constants/path"

export default defineConfig(({ mode }) => {
  return mode === "client"
    ? {
        plugins: [client()],
        resolve: {
          alias: { "@": path.resolve(__dirname, "./app") },
        },
        build: {
          rollupOptions: {
            input: [
              "./app/client.ts",
              "./app/theme.ts",
              "./app/styles/index.css",
            ],
            output: {
              entryFileNames: "static/[name].js",
              chunkFileNames: "static/chunks/[name]-[hash].js",
              assetFileNames: "static/assets/[name].[ext]",
            },
            onwarn(warning, warn) {
              // ライブラリのuse clientディレクティブを読み込んでエラーになるのでignore
              if (warning.code === "MODULE_LEVEL_DIRECTIVE") return
              warn(warning)
            },
          },
        },
      }
    : {
        build: { emptyOutDir: false },
        publicDir: "./app/public",
        plugins: [
          honox({ client: { input: ["./app/styles/index.css"] } }),
          ssg({ entry: "./app/server.ts" }),
          mdx({
            jsxImportSource: "hono/jsx",
            providerImportSource: "./app/lib/useMDXComponents/index.tsx",
            remarkPlugins: [
              remarkFrontmatter,
              remarkMdxFrontmatter,
              remarkBreaks,
              remarkGfm,
            ],
            rehypePlugins: [
              [
                rehypePrettyCode,
                {
                  theme: "monokai",
                  transformers: [
                    transformerCopyButton({
                      visibility: "always",
                      feedbackDuration: 1000,
                    }),
                  ],
                },
              ],
              rehypeSlug,
              [rehypeAutolinkHeadings, { behavior: "wrap" }],
            ],
          }),
          Sitemap({
            hostname: baseURL,
            generateRobotsTxt: true,
          }),
        ],
        ssr: { external: ["jsdom"] },
        resolve: {
          alias: { "@": path.resolve(__dirname, "./app") },
        },
      }
})

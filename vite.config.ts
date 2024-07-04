import ssg from "@hono/vite-ssg"
import honox from "honox/vite"
import client from "honox/vite/client"
import { defineConfig } from "vite"

export default defineConfig(({ mode }) => {
  return mode === "client"
    ? {
        plugins: [client()],
      }
    : {
        build: { emptyOutDir: false },
        plugins: [honox(), ssg({ entry: "./app/server.ts" })],
      }
})

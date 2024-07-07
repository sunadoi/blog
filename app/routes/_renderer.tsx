import { Header } from "@/components/projects/Header"
import { ThemeButton } from "@/components/parts/_Theme.island"
import { jsxRenderer } from "hono/jsx-renderer"
import { Script } from "honox/server"

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {import.meta.env.PROD ? (
          <script src="/static/theme.js" />
        ) : (
          <script src="/app/theme.ts" />
        )}
        <Script src="/app/client.ts" async />
        {import.meta.env.PROD ? (
          <link href="/static/assets/index.css" rel="stylesheet" />
        ) : (
          <link href="/app/styles/index.css" rel="stylesheet" />
        )}
        {title && <title>{title}</title>}
      </head>
      <body>
        <Header />
        <main className="px-20 py-10">{children}</main>
      </body>
    </html>
  )
})

import { Header } from "@/components/projects/Header"
import { jsxRenderer } from "hono/jsx-renderer"
import { Script } from "honox/server"
import { Footer } from "@/components/projects/Footer"

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
      <body class="flex flex-col mx-4 sm:mx-20">
        <Header />
        <main className="flex-grow py-10">{children}</main>
        <Footer />
      </body>
    </html>
  )
})

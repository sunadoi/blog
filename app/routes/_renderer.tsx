import { Header } from "@/components/projects/Header"
import { jsxRenderer, useRequestContext } from "hono/jsx-renderer"
import { Script } from "honox/server"
import { Footer } from "@/components/projects/Footer"
import { baseURL } from "@/constants/path"

export default jsxRenderer(({ children, title, description }) => {
  const pageTitle = title ? `${title} | SunaBox` : "SunaBox"
  const c = useRequestContext()
  const currentUrl = c.req.url

  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta property="og:title" content={pageTitle} />
        <meta
          property="og:description"
          content={description ?? "SunaBox is a tech blog"}
        />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${baseURL}/assets/favicon.ico`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@suna_tech" />
        <meta name="twitter:image" content={`${baseURL}/assets/favicon.ico`} />
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
        {import.meta.env.PROD ? (
          <link rel="icon" href="/assets/favicon.ico" />
        ) : (
          <link rel="icon" href="/app/public/assets/favicon.ico" />
        )}
        <link
          rel="alternate"
          type="application/rss+xml"
          title="SunaBox"
          href={`${baseURL}/feed.xml`}
        />
        <title>{pageTitle}</title>
      </head>
      <body class="flex flex-col sm:mx-20">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  )
})

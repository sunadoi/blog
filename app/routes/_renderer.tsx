import { Header } from "@/components/projects/Header"
import { jsxRenderer, useRequestContext } from "hono/jsx-renderer"
import { Script } from "honox/server"
import { Footer } from "@/components/projects/Footer"
import { baseURL } from "@/constants/path"
import { getCanonicalURL } from "@/functions/getCanonicalURL"

export default jsxRenderer(async ({ children, title, description }) => {
  const pageTitle = title ? `${title} | SunaBox` : "SunaBox"
  const siteDescription = description ?? "SunaBox is a tech blog"
  const c = useRequestContext()
  const currentUrl = c.req.url

  // /apiへのリクエストをした場合でも_renderer.tsxが呼ばれるため、ここでreturnして無限ループを防ぐ
  if (new URL(currentUrl).pathname.startsWith("/api")) return <></>

  // 動的OGイメージが必要かどうかでリクエストするかどうか分岐
  const slug = currentUrl.split("/").at(-1)
  const res = await fetch(`http://localhost:5173/api/ogimage/${slug}`)
  console.log({ res: await res.text() })

  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content={siteDescription} />
        <meta property="og:site_name" content="SunaBox" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={siteDescription} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:image" content={`${baseURL}/assets/favicon.ico`} />
        <meta property="og:locale:alternate" content="ja_JP" />
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
        <link rel="canonical" href={getCanonicalURL(currentUrl)} />
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

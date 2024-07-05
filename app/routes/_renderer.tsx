import { reactRenderer } from "@hono/react-renderer"
import { Script } from "honox/server"

export default reactRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <Script src="/app/client.ts" async />
        <link href="/app/style.css" rel="stylesheet" />
        {title && <title>{title}</title>}
      </head>
      <body>{children}</body>
    </html>
  )
})

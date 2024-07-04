import { jsxRenderer } from "hono/jsx-renderer"
import { HasIslands } from "honox/server"

export default jsxRenderer(({ children, title }) => {
  return (
    <html lang="ja">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {import.meta.env.PROD ? (
          <HasIslands>
            <script type="module" src="/static/client.js" />
          </HasIslands>
        ) : (
          <script type="module" src="/app/client.ts" />
        )}
        {title && <title>{title}</title>}
      </head>
      <body>{children}</body>
    </html>
  )
})

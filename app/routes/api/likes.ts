import { Hono } from "hono"

type Bindings = {
  LIKES: KVNamespace
}

const app = new Hono<{ Bindings: Bindings }>()

app.get("/:slug", async (c) => {
  const slug = c.req.param("slug")
  const value = await c.env.LIKES.get(slug)
  const likes = value ? Number.parseInt(value, 10) : 0
  return c.json({ likes: !Number.isNaN(likes) ? likes : 0 })
})

app.put("/:slug", async (c) => {
  const slug = c.req.param("slug")
  const v = await c.env.LIKES.get(slug)
  const current = v ? Number.parseInt(v, 10) : 0

  await c.env.LIKES.put(slug, (current + 1).toString())

  return new Response("ok")
})

export default app

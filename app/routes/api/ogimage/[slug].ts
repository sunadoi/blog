import { createRoute } from "honox/factory"

export default createRoute(async (c) => {
  const slug = c.req.param("slug")
  return new Response(`Hello, ${slug}!`)
})

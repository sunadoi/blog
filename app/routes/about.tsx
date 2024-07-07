import { createRoute } from "honox/factory"

export default createRoute(async (c) => {
  return c.render(
    <>
      <h1>aaa</h1>
      <h2>bbb</h2>
      <p>about!</p>
    </>,
    {
      title: "about",
    },
  )
})

import { Button } from "@/components/ui/button"
import { ssgParams } from "hono/ssg"
import { createRoute } from "honox/factory"

export default createRoute(
  // ssgParams(() => []),
  async (c) => {
    return c.render(
      <>
        <h1>aaa</h1>
        <h2>bbb</h2>
        <p>about!</p>
        <Button>button</Button>
      </>,
      {
        title: "about",
      },
    )
  },
)

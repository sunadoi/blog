import Counter from "../islands/counter"
import { createRoute } from "honox/factory"

export default createRoute((c) => {
  return c.render(
    <div>
      <h1>Hello</h1>
      <Counter />
    </div>,
  )
})

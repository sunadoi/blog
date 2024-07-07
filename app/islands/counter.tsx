import { useState } from "hono/jsx"

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button
        type="button"
        onClick={() => {
          setCount((prev) => prev + 1)
        }}
      >
        Increment
      </button>
    </div>
  )
}

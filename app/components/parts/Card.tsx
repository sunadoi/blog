import type { JSX } from "hono/jsx/jsx-runtime"

export const Card = ({ children }: JSX.ElementChildrenAttribute) => {
  return (
    <div className="rounded-lg border bg-card p-6 border-none">{children}</div>
  )
}

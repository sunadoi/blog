import type { JSX } from "hono/jsx/jsx-runtime"

export const Card = ({ children }: JSX.ElementChildrenAttribute) => {
  return <div className="rounded-lg bg-card p-2 sm:p-6">{children}</div>
}

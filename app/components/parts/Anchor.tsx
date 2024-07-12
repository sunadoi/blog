import clsx from "clsx"
import type { JSX } from "hono/jsx/jsx-runtime"

export const Anchor = ({ href, ...props }: JSX.IntrinsicElements["a"]) => {
  return (
    <a
      href={href}
      className={clsx(
        "text-accent-foreground",
        "focus-visible:opacity-80 hover:opacity-80",
      )}
      {...props}
    />
  )
}

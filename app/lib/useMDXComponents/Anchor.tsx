import clsx from "clsx"
import type { JSX } from "hono/jsx/jsx-runtime"

export const Anchor = (props: JSX.IntrinsicElements["a"]) => {
  return (
    <a
      className={clsx(
        "text-accent-foreground cursor-pointer",
        "hover:opacity-70",
      )}
      target="_blank"
      rel="noreferrer"
      {...props}
    >
      {props.children}
    </a>
  )
}

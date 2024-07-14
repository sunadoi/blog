import type { JSX } from "hono/jsx/jsx-runtime"

export type SVGIcon = ({
  width,
  height,
}: {
  width: number
  height: number
}) => JSX.Element

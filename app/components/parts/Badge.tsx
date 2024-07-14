import type { SVGIcon } from "@/types/SVGIcon"
import clsx from "clsx"
import type { JSX } from "hono/jsx/jsx-runtime"

export const Badge = ({
  Icon,
  children,
}: JSX.ElementChildrenAttribute & { Icon?: SVGIcon }) => {
  return (
    <div
      className={clsx(
        "inline-flex gap-2 items-center rounded-full border px-4 py-2 bg-card",
        "cursor-pointer hover:opacity-80",
      )}
    >
      {Icon && <Icon width={24} height={24} />}
      <span className="text-sm font-semibold">{children}</span>
    </div>
  )
}

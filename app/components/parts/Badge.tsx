import type { SVGIcon } from "@/types/SVGIcon"
import clsx from "clsx"
import type { JSX } from "hono/jsx/jsx-runtime"
import { tv, type VariantProps } from "tailwind-variants"

export const Badge = ({
  Icon,
  children,
  size = "sm",
}: JSX.ElementChildrenAttribute &
  VariantProps<typeof badge> & { Icon?: SVGIcon }) => {
  const { wide } = badge({ size })
  return (
    <div
      className={clsx(
        "inline-flex gap-2 items-center rounded-full border py-1 bg-card",
        "cursor-pointer hover:opacity-80",
        wide(),
      )}
    >
      {Icon && <Icon width={24} height={24} />}
      <span className="text-sm font-semibold">{children}</span>
    </div>
  )
}

const badge = tv({
  slots: {
    wide: "",
  },
  variants: {
    size: {
      sm: {
        wide: "px-3",
      },
      md: {
        wide: "px-4",
      },
    },
  },
})

import type { SVGIcon } from "@/types/SVGIcon"
import clsx from "clsx"
import type { JSX } from "hono/jsx/jsx-runtime"
import { tv, type VariantProps } from "tailwind-variants"

export const Badge = ({
  Icon,
  children,
  size = "sm",
  clickable = false,
}: JSX.ElementChildrenAttribute &
  VariantProps<typeof badge> & { Icon?: (() => JSX.Element) | string }) => {
  const { wide, hover } = badge({ size, clickable })
  return (
    <div
      className={clsx(
        "inline-flex gap-2 items-center rounded-full border py-1 bg-card",
        hover(),
        wide(),
      )}
    >
      {Icon && (
        <div class="w-6">
          {typeof Icon === "string" ? (
            <span class="grid place-items-center text-sm">{Icon}</span>
          ) : (
            <Icon />
          )}
        </div>
      )}
      <span className="text-sm font-semibold">{children}</span>
    </div>
  )
}

const badge = tv({
  slots: {
    wide: "",
    hover: "",
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
    clickable: {
      true: {
        hover: "hover:scale-110 duration-150",
      },
      false: {
        hover: "",
      },
    },
  },
})

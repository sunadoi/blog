import type { JSX } from "hono/jsx/jsx-runtime"
import { tv, type VariantProps } from "tailwind-variants"

export const Card = ({
  children,
  display = "hidden",
}: JSX.ElementChildrenAttribute & VariantProps<typeof card>) => {
  const { base } = card({ display })

  return <div className={base()}>{children}</div>
}

const card = tv(
  {
    slots: {
      base: "rounded-lg shadow-md",
    },
    variants: {
      display: {
        hidden: {
          base: "bg-transparent",
        },
        visible: {
          base: "bg-card p-6",
        },
      },
    },
  },
  {
    responsiveVariants: ["sm"],
  },
)

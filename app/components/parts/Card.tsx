import type { JSX } from "hono/jsx/jsx-runtime"
import { tv, type VariantProps } from "tailwind-variants"

export const Card = ({
  children,
  type = "wide",
}: JSX.ElementChildrenAttribute & VariantProps<typeof card>) => {
  const { base } = card({ type })

  return <div className={base()}>{children}</div>
}

const card = tv(
  {
    slots: {
      base: "bg-card shadow-md",
    },
    variants: {
      type: {
        slim: {
          base: "",
        },
        wide: {
          base: "rounded-lg p-6",
        },
      },
    },
  },
  {
    responsiveVariants: ["sm"],
  },
)

import type { JSX } from "hono/jsx/jsx-runtime"
import { type VariantProps, tv } from "tailwind-variants"

export const Card = ({
  children,
  type = "wide",
  hasBorder = false,
}: JSX.ElementChildrenAttribute & VariantProps<typeof card>) => {
  const { base } = card({ type, hasBorder })

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
      hasBorder: {
        false: {
          base: "",
        },
        true: {
          base: "border",
        },
      },
    },
  },
  {
    responsiveVariants: ["sm"],
  },
)

import clsx from "clsx"
import type { JSX } from "hono/jsx/jsx-runtime"

export const Badge = ({
  icon,
  children,
}: JSX.ElementChildrenAttribute & { icon: string }) => {
  return (
    <div
      className={clsx(
        "inline-flex gap-2 items-center rounded-full border px-4 py-2 text-xs font-semibold bg-secondary text-secondary-foreground",
        "cursor-pointer hover:opacity-80",
      )}
    >
      <img src={icon} width={24} height={24} alt="tag-icon" />
      <span className="text-sm">{children}</span>
    </div>
  )
}

import type { JSX } from "hono/jsx/jsx-runtime"
import { tv } from "tailwind-variants"

type MessageType = "info" | "warn" | "alert"

export const Message = ({
  children,
  type = "info",
}: JSX.ElementChildrenAttribute & { type: MessageType }) => {
  const { bg, icon } = message({ type })

  return (
    <aside class={bg()}>
      <span class={icon()}>
        <MessageIcon type={type} />
      </span>
      <div>{children}</div>
    </aside>
  )
}

const message = tv({
  slots: {
    bg: "flex items-center gap-4 rounded-lg p-2",
    icon: "w-6 h-6",
  },
  variants: {
    type: {
      info: {
        bg: "bg-blue-3",
        icon: "text-blue-10",
      },
      warn: {
        bg: "bg-amber-3",
        icon: "text-amber-10",
      },
      alert: {
        bg: "bg-tomato-3",
        icon: "text-tomato-10",
      },
    },
  },
})

const MessageIcon = ({ type }: { type: MessageType }) => {
  switch (type) {
    case "info":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
        >
          <title>Info Icon</title>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-10 5.75a.75.75 0 0 0 .75-.75v-6a.75.75 0 0 0-1.5 0v6c0 .414.336.75.75.75M12 7a1 1 0 1 1 0 2a1 1 0 0 1 0-2"
            clip-rule="evenodd"
          />
        </svg>
      )
    case "warn":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
        >
          <title>Warn Icon</title>
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M3 10.417c0-3.198 0-4.797.378-5.335c.377-.537 1.88-1.052 4.887-2.081l.573-.196C10.405 2.268 11.188 2 12 2c.811 0 1.595.268 3.162.805l.573.196c3.007 1.029 4.51 1.544 4.887 2.081C21 5.62 21 7.22 21 10.417v1.574c0 5.638-4.239 8.375-6.899 9.536C13.38 21.842 13.02 22 12 22s-1.38-.158-2.101-.473C7.239 20.365 3 17.63 3 11.991zm9-3.167a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2"
            clip-rule="evenodd"
          />
        </svg>
      )
    case "alert":
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
        >
          <title>Alert Icon</title>
          <path
            fill="currentColor"
            d="M8.352 20.242A4.63 4.63 0 0 0 12 22a4.63 4.63 0 0 0 3.648-1.758a27.158 27.158 0 0 1-7.296 0"
          />
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M18.75 9.704V9c0-3.866-3.023-7-6.75-7S5.25 5.134 5.25 9v.704c0 .845-.24 1.671-.692 2.374L3.45 13.801c-1.011 1.574-.239 3.713 1.52 4.21a25.794 25.794 0 0 0 14.06 0c1.759-.497 2.531-2.636 1.52-4.21l-1.108-1.723a4.394 4.394 0 0 1-.693-2.374M12 5.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75"
            clip-rule="evenodd"
          />
        </svg>
      )
  }
}

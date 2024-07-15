import clsx from "clsx"
import { useState } from "hono/jsx"
import { LinkIcon } from "../parts/icons/Link"
import { Card } from "../parts/Card"

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        class={clsx(
          "fixed z-10 border rounded-full bg-popover left-3 p-4",
          "bottom-[calc(env(safe-area-inset-bottom,0px)+24px)]",
        )}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div class="w-full h-full">
          <LinkIcon width={32} height={32} />
        </div>
      </button>
      {isOpen && (
        <>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: */}
          <div
            class="fixed z-20 bg-transparent w-full h-full"
            onClick={() => setIsOpen(false)}
          />
          <div class="fixed z-50 rounded-lg bg-popover bottom-[calc(env(safe-area-inset-bottom,0px)+110px)] left-3">
            <Card type="wide" hasBorder>
              <ul class="flex flex-col gap-8 p-4">
                <li>
                  <a href="/" class="flex items-center gap-2">
                    <HomeIcon />
                    <p>Home</p>
                  </a>
                </li>
                <li>
                  <a href="/about" class="flex items-center gap-2">
                    <AccountIcon />
                    <p>About</p>
                  </a>
                </li>
                <li>
                  <a href="/tags" class="flex items-center gap-2">
                    <TagsIcon />
                    <p>Tags</p>
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </>
      )}
    </>
  )
}

export const HomeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>Home Icon</title>
      <path
        fill="currentColor"
        d="m12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81zM12 3L2 12h3v8h6v-6h2v6h6v-8h3"
      />
    </svg>
  )
}

export const AccountIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>Account Icon</title>
      <path
        fill="currentColor"
        d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 2a2 2 0 0 0-2 2a2 2 0 0 0 2 2a2 2 0 0 0 2-2a2 2 0 0 0-2-2m0 7c2.67 0 8 1.33 8 4v3H4v-3c0-2.67 5.33-4 8-4m0 1.9c-2.97 0-6.1 1.46-6.1 2.1v1.1h12.2V17c0-.64-3.13-2.1-6.1-2.1"
      />
    </svg>
  )
}

export const TagsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <title>Tag Icon</title>
      <path
        fill="currentColor"
        d="M6.5 10C7.3 10 8 9.3 8 8.5S7.3 7 6.5 7S5 7.7 5 8.5S5.7 10 6.5 10M9 6l7 7l-5 5l-7-7V6zm0-2H4c-1.1 0-2 .9-2 2v5c0 .6.2 1.1.6 1.4l7 7c.3.4.8.6 1.4.6s1.1-.2 1.4-.6l5-5c.4-.4.6-.9.6-1.4c0-.6-.2-1.1-.6-1.4l-7-7C10.1 4.2 9.6 4 9 4m4.5 1.7l1-1l6.9 6.9c.4.4.6.9.6 1.4s-.2 1.1-.6 1.4L16 19.8l-1-1l5.7-5.8z"
      />
    </svg>
  )
}

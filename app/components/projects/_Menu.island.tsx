import clsx from "clsx"
import { useState } from "hono/jsx"
import { Card } from "../parts/Card"
import { AccountIcon } from "../parts/icons/Account"
import { HomeIcon } from "../parts/icons/Home"
import { LinkIcon } from "../parts/icons/Link"
import { TagsIcon } from "../parts/icons/Tags"

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDialog = () => {
    setIsOpen((prev) => !prev)
    const dialog = document.getElementById(
      "menu-dialog",
    ) as HTMLDialogElement | null
    if (!dialog) return

    dialog.hasAttribute("open") ? dialog.close() : dialog.show()
  }

  return (
    <>
      <button
        type="button"
        class={clsx(
          "fixed z-20 border rounded-full bg-card left-3 p-4",
          "bottom-[calc(env(safe-area-inset-bottom,0px)+24px)]",
        )}
        onClick={toggleDialog}
      >
        <div class="w-8 h-8">
          <LinkIcon />
        </div>
      </button>
      {isOpen && (
        <>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: */}
          <div
            class="fixed z-20 bg-transparent w-full h-full"
            onClick={toggleDialog}
          />
        </>
      )}
      <dialog
        id="menu-dialog"
        class={clsx(
          "text-foreground rounded-lg mx-0",
          "fixed z-50 bottom-[calc(env(safe-area-inset-bottom,0px)+110px)] left-3",
        )}
      >
        <Card type="wide" hasBorder>
          <ul class="flex flex-col gap-4">
            <li>
              <a href="/" class="flex items-center gap-2 px-4 py-2">
                <div class="w-6">
                  <HomeIcon />
                </div>
                <p>Home</p>
              </a>
            </li>
            <li>
              <a href="/about" class="flex items-center gap-2 px-4 py-2">
                <div class="w-6">
                  <AccountIcon />
                </div>
                <p>About</p>
              </a>
            </li>
            <li>
              <a href="/tags" class="flex items-center gap-2 px-4 py-2">
                <div class="w-6">
                  <TagsIcon />
                </div>
                <p>Tags</p>
              </a>
            </li>
          </ul>
        </Card>
      </dialog>
    </>
  )
}

import clsx from "clsx"
import { useState } from "hono/jsx"
import { LinkIcon } from "../parts/icons/Link"
import { Card } from "../parts/Card"
import { HomeIcon } from "../parts/icons/Home"
import { AccountIcon } from "../parts/icons/Account"
import { TagsIcon } from "../parts/icons/Tags"

export const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <button
        type="button"
        class={clsx(
          "fixed z-20 border rounded-full bg-card left-3 p-4",
          "bottom-[calc(env(safe-area-inset-bottom,0px)+24px)]",
        )}
        onClick={() => setIsOpen((prev) => !prev)}
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
            onClick={() => setIsOpen(false)}
          />
          <div class="fixed z-50 rounded-lg bottom-[calc(env(safe-area-inset-bottom,0px)+110px)] left-3">
            <Card type="wide" hasBorder>
              <ul class="flex flex-col gap-8 p-4">
                <li>
                  <a href="/" class="flex items-center gap-2">
                    <div class="w-6">
                      <HomeIcon />
                    </div>
                    <p>Home</p>
                  </a>
                </li>
                <li>
                  <a href="/about" class="flex items-center gap-2">
                    <div class="w-6">
                      <AccountIcon />
                    </div>
                    <p>About</p>
                  </a>
                </li>
                <li>
                  <a href="/tags" class="flex items-center gap-2">
                    <div class="w-6">
                      <TagsIcon />
                    </div>
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

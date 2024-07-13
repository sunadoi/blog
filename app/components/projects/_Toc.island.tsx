import clsx from "clsx"
import { useEffect, useState } from "hono/jsx"
import tocbot from "tocbot"
import { Card } from "../parts/Card"

export const Toc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc",
      contentSelector: ".article",
      headingSelector: "h2, h3, h4",
      scrollSmoothOffset: -10,
    })
    return () => tocbot.destroy()
  }, [])

  return (
    <div>
      <p class="font-semibold border-b-2 pb-1 mb-2">目次</p>
      {/* tocbotによってここにマウントされる */}
      <div class="toc" />
    </div>
  )
}

export const TocButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    tocbot.init({
      tocSelector: ".toc-dialog",
      contentSelector: ".article",
      headingSelector: "h2, h3, h4",
      scrollSmoothOffset: -10,
    })
    return () => tocbot.destroy()
  }, [])

  const toggleDialog = () => {
    setIsOpen((prev) => !prev)
    const dialog = document.getElementById(
      "toc-dialog",
    ) as HTMLDialogElement | null
    if (!dialog) return

    dialog.hasAttribute("open") ? dialog.close() : dialog.show()
  }

  return (
    <>
      <button
        type="button"
        class={clsx(
          "fixed z-10 border rounded-full bg-popover right-3 p-5",
          "bottom-[calc(env(safe-area-inset-bottom,0px)+24px)]",
        )}
        onClick={toggleDialog}
      >
        <div class="flex flex-col justify-around w-8 h-8">
          <p>目次</p>
        </div>
      </button>
      {isOpen && (
        <>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: */}
          <div
            class="fixed z-20 top-0 bg-transparent w-full h-full"
            onClick={toggleDialog}
          />
        </>
      )}
      <dialog
        id="toc-dialog"
        class={clsx(
          "text-foreground rounded-lg bg-popover overflow-y-scroll w-[90%] sm:w-[70%]",
          "fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        )}
      >
        <Card>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: */}
          <div onClick={toggleDialog}>
            <p class="font-semibold border-b-2 pb-1 mb-2">目次</p>
            {/* tocbotによってここにマウントされる */}
            <div class="toc-dialog" />
          </div>
        </Card>
      </dialog>
    </>
  )
}

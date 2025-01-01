import clsx from "clsx"
import { useEffect, useState } from "hono/jsx"
import { destroy, init } from "tocbot"
import { Card } from "../parts/Card"
import { TocIcon } from "../parts/icons/Toc"

const largerThanLg = "(min-width: 1024px)"

export const Toc = () => {
  useEffect(() => {
    // TocとTocButtonの2か所でtocbot.initするとスクロール時のis-active-linkの付け替えが片方でしか効かなくなる
    // そのため画面幅に応じてinitの実行を制御する。呼び出す側はSSGでレンダリングし分けができないのでコンポーネント内でそれぞれ判定する
    if (!import.meta.env.DEV && import.meta.env.MODE !== "client") return
    if (!window.matchMedia(largerThanLg).matches) return

    init({
      tocSelector: ".toc",
      contentSelector: ".article",
      headingSelector: "h2, h3",
      scrollSmoothOffset: -10,
    })
    return () => destroy()
  }, [])

  return (
    <div>
      <p class="font-semibold border-b pb-1 mb-2">目次</p>
      {/* tocbotによってここにマウントされる */}
      <div class="toc" />
    </div>
  )
}

export const TocButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // TocとTocButtonの2か所でtocbot.initするとスクロール時のis-active-linkの付け替えが片方でしか効かなくなる
    // そのため画面幅に応じてinitの実行を制御する。呼び出す側はSSGでレンダリングし分けができないのでコンポーネント内でそれぞれ判定する
    if (!import.meta.env.DEV && import.meta.env.MODE !== "client") return
    if (window.matchMedia(largerThanLg).matches) return

    init({
      tocSelector: ".toc-dialog",
      contentSelector: ".article",
      headingSelector: "h2, h3",
      scrollSmoothOffset: -10,
    })
    return () => destroy()
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
          "fixed z-10 border rounded-full bg-card right-3 p-4",
          "bottom-[calc(env(safe-area-inset-bottom,0px)+24px)]",
        )}
        onClick={toggleDialog}
      >
        <div class="w-8 h-8">
          <TocIcon />
        </div>
      </button>
      {isOpen && (
        <>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: */}
          <div class="fixed z-20 top-0 w-full h-full" onClick={toggleDialog} />
        </>
      )}
      <dialog
        id="toc-dialog"
        class={clsx(
          "text-foreground rounded-lg overflow-y-scroll w-[90%] sm:w-[70%]",
          "fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2",
        )}
      >
        <Card type="wide" hasBorder>
          {/* biome-ignore lint/a11y/useKeyWithClickEvents: */}
          <div onClick={toggleDialog}>
            <p class="font-semibold border-b pb-1 mb-2">目次</p>
            {/* tocbotによってここにマウントされる */}
            <div class="toc-dialog" />
          </div>
        </Card>
      </dialog>
    </>
  )
}

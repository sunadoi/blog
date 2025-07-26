import clsx from "clsx"
import { useEffect, useState } from "hono/jsx"
import { useDebounce } from "@/hooks/useDebounce"

export const LikeButton = ({ slug }: { slug: string }) => {
  const [likes, setLikes] = useState(0)
  const [count, setCount] = useState(0)
  const value = useDebounce(count, 1000)
  const [isLiked, setIsLiked] = useState(false)

  const endpoint = `https://blog-api.sunadoi.workers.dev/likes/${slug}`

  useEffect(() => {
    ;(async () => {
      if (import.meta.env.DEV) return
      const res = await fetch(endpoint)
      const { likes } = (await res.json()) as { likes: number }
      setLikes(likes)
    })()
  }, [])

  useEffect(() => {
    if (value === 0) return
    if (import.meta.env.DEV) return
    ;(async () => {
      await fetch(endpoint, {
        method: "PUT",
        body: JSON.stringify({ count: value }),
      })
    })()
  }, [value])

  const incrementLikes = async () => {
    setCount((prev) => prev + 1)
    setLikes((prev) => prev + 1)
    setIsLiked(true)
    setTimeout(() => {
      setIsLiked(false)
    }, 200)
  }

  return (
    <button type="button" onClick={incrementLikes}>
      <div
        class={clsx(
          "flex flex-col items-center justify-center gap-2 rounded-full border p-4",
          "w-24 h-24 sm:w-32 sm:h-32",
          "hover:scale-105 duration-150",
        )}
      >
        <span
          class={clsx(
            "text-4xl origin-bottom-left duration-200",
            isLiked && "-rotate-12",
          )}
        >
          👍
        </span>
        <span>{likes}</span>
      </div>
    </button>
  )
}

import clsx from "clsx"
import { useEffect, useState } from "hono/jsx"

export const LikeButton = ({ slug }: { slug: string }) => {
  const [likes, setLikes] = useState(0)
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

  const incrementLikes = async () => {
    setLikes((prev) => prev + 1)
    setIsLiked(true)
    setTimeout(() => {
      setIsLiked(false)
    }, 200)

    if (import.meta.env.DEV) return
    await fetch(endpoint, {
      method: "PUT",
      body: JSON.stringify({ count: 1 }),
    })
  }

  return (
    <button type="button" onClick={incrementLikes}>
      <div
        class={clsx(
          "flex flex-col items-center justify-center gap-2 rounded-full border p-4 duration-500",
          "w-24 h-24 sm:w-32 sm:h-32",
          isLiked && "scale-125",
        )}
      >
        <span class="text-4xl">👍</span>
        <span>{likes}</span>
      </div>
    </button>
  )
}

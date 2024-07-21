import { useEffect, useState } from "hono/jsx"

export const LikeButton = ({ slug }: { slug: string }) => {
  const [likes, setLikes] = useState(0)
  const [isLiked, setIsLiked] = useState(false)

  const url = "https://blog-api.sunadoi.workers.dev"

  useEffect(() => {
    ;(async () => {
      const res = await fetch(`${url}/likes/${slug}`)
      const { likes } = (await res.json()) as { likes: number }
      setLikes(likes)
    })()
  }, [])

  const incrementLikes = async () => {
    if (isLiked) return
    await fetch(`${url}/likes/${slug}`, { method: "PUT" })
    setLikes((prev) => prev + 1)
    setIsLiked(true)
  }

  return (
    <button type="button" onClick={incrementLikes}>
      <div class="flex flex-col items-center justify-center gap-2 rounded-full border w-28 h-28 p-4">
        <span class="text-2xl">👍</span>
        <span>{likes}</span>
      </div>
    </button>
  )
}

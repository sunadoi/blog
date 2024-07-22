import { baseURL } from "@/constants/site"
import { XIcon } from "../parts/icons/X"

export const SNSButton = ({ slug }: { slug: string }) => {
  return (
    <div className="flex items-center px-8">
      <a
        href={`https://x.com/share?url=${encodeURIComponent(`${baseURL}/articles/${slug}`)}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div class="flex flex-col items-center gap-2 w-8">
          <XIcon />
          <span>Post</span>
        </div>
      </a>
    </div>
  )
}

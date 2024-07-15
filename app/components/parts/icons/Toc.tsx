import type { SVGIcon } from "@/types/SVGIcon"

export const TocIcon: SVGIcon = ({ width, height }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
    >
      <title>Toc Icon</title>
      <path
        fill="currentColor"
        d="M3 9h14V7H3zm0 4h14v-2H3zm0 4h14v-2H3zm16 0h2v-2h-2zm0-10v2h2V7zm0 6h2v-2h-2z"
      />
    </svg>
  )
}
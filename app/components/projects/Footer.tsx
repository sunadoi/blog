import { siteName } from "@/constants/site"

export const Footer = () => {
  return (
    <footer class="flex flex-col border-t items-center bg-background px-4 py-4">
      <p class="text-slate-11 italic text-sm">
        © 2024 - {siteName}. All rights reserved.
      </p>
    </footer>
  )
}

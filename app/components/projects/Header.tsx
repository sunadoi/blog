import { tv } from "tailwind-variants"
import { ThemeButton } from "../parts/_Theme.island"

export const Header = () => {
  const { base, title, links } = header()

  return (
    <header className={base()}>
      <h1 className={title()}>Suna's Box</h1>
      <ul className={links()}>
        <li>About</li>
        <li>Category</li>
        <ThemeButton />
      </ul>
    </header>
  )
}

const header = tv(
  {
    slots: {
      base: "flex h-16 items-center justify-between w-full bg-background px-3 py-2",
      title: "text-2xl font-bold",
      links: "flex gap-4 items-center",
    },
  },
  {
    responsiveVariants: ["sm"],
  },
)

import { tv } from "tailwind-variants"
import { ThemeButton } from "../parts/_Theme.island"

export const Header = () => {
  const { base, title, links } = header()

  return (
    <header className={base()}>
      <a href="/">
        <h1 className={title()}>Suna's Box</h1>
      </a>
      <ul className={links()}>
        <li>About</li>
        <li>
          <a href="/tags">Tags</a>
        </li>
        <ThemeButton />
      </ul>
    </header>
  )
}

const header = tv(
  {
    slots: {
      base: "flex h-20 items-center justify-between w-full bg-background px-20 py-4",
      title: "text-primary font-bold",
      links: "flex gap-4 items-center",
    },
  },
  {
    responsiveVariants: ["sm"],
  },
)

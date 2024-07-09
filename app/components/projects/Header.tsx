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
        <li>
          <a href="/about">
            <h2>About</h2>
          </a>
        </li>
        <li>
          <a href="/tags">
            <h2>Tags</h2>
          </a>
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
      links: "flex gap-8 items-center",
    },
  },
  {
    responsiveVariants: ["sm"],
  },
)

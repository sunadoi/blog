import { tv } from "tailwind-variants"
import { ThemeButton } from "../parts/_Theme.island"

export const Header = () => {
  const { base, title, links } = header({
    linksDisplay: { initial: "hidden", sm: "visible" },
  })

  return (
    <header className={base()}>
      <a href="/">
        <h1 className={title()}>Suna's Box</h1>
      </a>
      <div class="flex items-center gap-8">
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
        </ul>
        <ThemeButton />
      </div>
    </header>
  )
}

const header = tv(
  {
    slots: {
      base: "flex border-b-2 items-center justify-between w-full bg-background py-4",
      title: "font-semibold",
      links: "",
    },
    variants: {
      linksDisplay: {
        hidden: {
          base: "h-16",
          title: "text-lg",
          links: "hidden",
        },
        visible: {
          base: "h-20",
          title: "text-3xl",
          links: "flex gap-8 items-center",
        },
      },
    },
  },
  {
    responsiveVariants: ["sm"],
  },
)

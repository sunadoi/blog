import { siteName } from "@/constants/site"
import { tv } from "tailwind-variants"
import { ThemeButton } from "../parts/_Theme.island"
import { Menu } from "./_Menu.island"

export const Header = () => {
  const { base, title, links, menuIcon } = header({
    linksDisplay: { initial: "hidden", sm: "visible" },
  })

  return (
    <>
      <header className={base()}>
        <a
          href="/"
          class="flex items-center gap-2 hover:opacity-80 duration-150"
        >
          <h1 className={title()}>{siteName}</h1>
        </a>
        <div class="flex items-center gap-8">
          <ul className={links()}>
            <li class="hover:opacity-80 duration-150">
              <a href="/">
                <h2>Articles</h2>
              </a>
            </li>
            <li class="hover:opacity-80 duration-150">
              <a href="/about">
                <h2>About</h2>
              </a>
            </li>
            <li class="hover:opacity-80 duration-150">
              <a href="/tags">
                <h2>Tags</h2>
              </a>
            </li>
          </ul>
          <ThemeButton />
        </div>
      </header>
      <div class={menuIcon()}>
        <Menu />
      </div>
    </>
  )
}

const header = tv(
  {
    slots: {
      base: "flex border-b items-center justify-between w-full bg-background px-4 sm:px-0 py-4",
      title: "font-semibold",
      links: "",
      menuIcon: "",
    },
    variants: {
      linksDisplay: {
        hidden: {
          base: "h-16",
          title: "text-lg",
          links: "hidden",
          menuIcon: "block",
        },
        visible: {
          base: "h-20",
          title: "text-3xl",
          links: "flex gap-8 items-center",
          menuIcon: "hidden",
        },
      },
    },
  },
  {
    responsiveVariants: ["sm"],
  },
)

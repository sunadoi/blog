import { MoonIcon } from "./icons/Moon"
import { SunIcon } from "./icons/Sun"

export const ThemeButton = () => {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains("dark")

    if (isDark) {
      localStorage.setItem("theme", "light")
      document.documentElement.classList.add("light")
      document.documentElement.classList.remove("dark")
    } else {
      localStorage.setItem("theme", "dark")
      document.documentElement.classList.add("dark")
      document.documentElement.classList.remove("light")
    }
  }

  return (
    <button
      onClick={toggleTheme}
      class="dark:text-white border dark:border-gray-600 h-10 w-10 flex justify-center rounded-md transition-opacity hover:opacity-80  shadow-sm items-center"
      type="button"
    >
      <div class="block dark:hidden w-8">
        <SunIcon />
      </div>
      <div class="hidden dark:block w-8">
        <MoonIcon />
      </div>
    </button>
  )
}

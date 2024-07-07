const setTheme = () => {
  const currentTheme = localStorage.getItem("theme")
  const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches

  if (currentTheme === "dark" || (currentTheme == null && isSystemDark)) {
    document.documentElement.classList.add("dark")
  } else {
    document.documentElement.classList.remove("dark")
  }
}

setTheme()

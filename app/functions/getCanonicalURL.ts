import { baseURL } from "@/constants/path"

export const getCanonicalURL = (url: string) => {
  const path = new URL(url).pathname
  return `${baseURL}${path}`
}

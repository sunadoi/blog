import { baseURL } from "@/constants/site"

export const getCanonicalURL = (url: string) => {
  const path = new URL(url).pathname
  return `${baseURL}${path}`
}

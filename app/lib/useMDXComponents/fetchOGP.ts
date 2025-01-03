import { JSDOM, VirtualConsole } from "jsdom"

type Ogp = {
  title: string
  description: string
  image: string
  url: string
  host: string
  favicon: string
}

export const fetchOgp = async (url: string) => {
  const virtualConsole = new VirtualConsole()
  virtualConsole.on("jsdomError", (e: Error) => {
    // jsdomが内部依存しているcssomがcssの@ルールをサポートできていなくて以下のエラーが出る
    // ここでは関係ないので、該当のエラーの場合は握りつぶす
    // https://github.com/NV/CSSOM/issues/109
    if (e.message === "Could not parse CSS stylesheet") return
    console.error(e)
  })

  try {
    const dom = await JSDOM.fromURL(url, { virtualConsole })
    const host = new URL(url).host
    const favicon = `https://www.google.com/s2/favicons?domain=${host}&sz=20`
    const metas = dom.window.document.getElementsByTagName("meta")

    const ogp: Ogp = {
      title: "",
      description: "",
      image: "",
      url: "",
      host,
      favicon,
    }
    for (const meta of metas) {
      const prop = meta.getAttribute("property")
      if (!prop || !prop.includes("og:")) continue
      const key = prop.replace("og:", "")

      if (
        key === "title" ||
        key === "description" ||
        key === "image" ||
        key === "url"
      ) {
        ogp[key] = meta.getAttribute("content") || ""
      }
    }

    return ogp
  } catch (e) {
    console.error(e)
  }
}

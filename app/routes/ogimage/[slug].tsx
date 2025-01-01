import { existsSync, readFileSync, writeFileSync } from "node:fs"
import { Resvg } from "@resvg/resvg-js"
import { ssgParams } from "hono/ssg"
import { createRoute } from "honox/factory"
import satori from "satori"
import { getArticle, getArticles } from "../../functions/articles"

export default createRoute(
  ssgParams(() =>
    // OGP画像が作成されてない場合のみ作成する。更新する場合は作成済みのものを削除する必要あり
    getArticles()
      .articles.filter((article) => !existsSync(getOGPPath(article.slug)))
      .map((article) => ({ slug: article.slug })),
  ),
  async (c) => {
    const slug = c.req.param("slug")
    const frontmatter = getArticle(slug)?.frontmatter

    if (!frontmatter) return c.redirect("/404")

    const imgBase64 = readFileSync(
      new URL("../../public/assets/ogp-background.png", import.meta.url),
      { encoding: "base64" },
    )
    const imgDataUrl = `data:image/png;base64,${imgBase64}`

    const notoSansBold = await loadGoogleFont({
      family: "Noto Sans JP",
      weight: 600,
    })

    const svg = await satori(
      (
        <div
          tw="flex w-full h-full rounded-2xl p-8"
          style={{ backgroundImage: `url(${imgDataUrl})` }}
        >
          <div tw="flex flex-col justify-around bg-[#eee] rounded-2xl w-full">
            <div tw="flex flex-col w-full items-center mt-20">
              <div tw="flex justify-center px-20 text-[3.5rem] flex-wrap leading-relaxed">
                {frontmatter.ogImageTitle ? (
                  frontmatter.ogImageTitle.map((word) => <span>{word}</span>)
                ) : (
                  <span>{frontmatter.title}</span>
                )}
              </div>
            </div>
            <div tw="flex flex-col items-center w-full text-[#191919]">
              <div tw="flex items-center">
                <img
                  alt="avatar"
                  width={40}
                  height={40}
                  tw="rounded-full mr-4"
                  src="https://github.com/sunadoi.png"
                />
                <p tw="text-4xl">suna.dev</p>
              </div>
            </div>
          </div>
        </div>
        // biome-ignore lint/suspicious/noExplicitAny: Reactはinstallしていないのでanyにする
      ) as any,
      {
        width: 1200,
        height: 630,
        fonts: [
          {
            name: "NotoSansJP",
            data: notoSansBold,
            weight: 600,
            style: "normal",
          },
        ],
      },
    )

    const body = new Resvg(svg).render().asPng()
    const ogpPath = getOGPPath(slug)
    writeFileSync(ogpPath, body)

    c.header("Content-Type", "image/png")
    // https://github.com/honojs/hono/issues/3729
    return c.body(body as unknown as ArrayBuffer)
  },
)

const getOGPPath = (slug: string) => {
  return new URL(`../../public/ogimage/${slug}.png`, import.meta.url)
}

const loadGoogleFont = async ({
  family,
  weight,
}: {
  family: string
  weight: number
}) => {
  const url = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(family)}:wght@${weight}&subset=latin`

  const res = await fetch(`${url}`, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
    },
  })
  const css = await res.text()

  const fontUrl = css.match(
    /src: url\((.+)\) format\('(opentype|truetype)'\)/,
  )?.[1]

  if (!fontUrl) throw new Error("Could not find font URL")

  return (await fetch(fontUrl)).arrayBuffer()
}

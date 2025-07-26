import { Feed } from "feed"
import { createRoute } from "honox/factory"
import { baseURL, siteName } from "@/constants/site"
import { getArticles } from "@/functions/articles"

export default createRoute(async (c) => {
  const feeds = await generateRssFeed()

  return c.text(feeds, 200, {
    "Content-Type": "text/xml",
  })
})

export const generateRssFeed = async (): Promise<string> => {
  const feed = new Feed({
    title: siteName,
    description: "技術ブログ",
    id: baseURL,
    link: baseURL,
    language: "ja",
    copyright: "copyright",
    generator: baseURL,
    favicon: `${baseURL}/favicon.ico`,
    image: `${baseURL}/assets/me.webp`,
    author: {
      name: "suna",
    },
  })

  const { articles } = await getArticles()
  for (const article of articles) {
    feed.addItem({
      title: article.frontmatter.title,
      description: article.frontmatter.description,
      date: new Date(article.frontmatter.publishedAt),
      id: `${baseURL}/articles/${article.slug}`,
      link: `${baseURL}/articles/${article.slug}`,
    })
  }

  // RSS 2.0
  return feed.rss2()
}

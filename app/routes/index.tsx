import { createRoute } from "honox/factory"
import { getArticles } from "../functions/articles"
import { Anchor } from "@/components/parts/Anchor"

export default createRoute((c) => {
  const articles = getArticles()

  return c.render(
    <div className="flex justify-between">
      <div>
        <h1>Articles</h1>
        <div className="py-4" />
        <ul className="flex flex-col gap-4">
          {articles.map((article) => (
            <li key={article.slug}>
              <Anchor href={`articles/${article.slug}`}>
                <h3>{article.frontmatter.title}</h3>
              </Anchor>
            </li>
          ))}
        </ul>
      </div>
      <div className="">Categories</div>
    </div>,
  )
})

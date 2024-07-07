import Counter from "@/islands/counter"
import { createRoute } from "honox/factory"
import { getArticles } from "../functions/articles"

export default createRoute((c) => {
  const articles = getArticles()

  return c.render(
    <div>
      {articles.map((article) => (
        <li key={article.slug}>
          <p>{article.slug}</p>
          <a href={`articles/${article.slug}`}>{article.frontmatter.title}</a>
        </li>
      ))}
    </div>,
  )
})

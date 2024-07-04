import { getArticles } from "../functions/articles"
import Counter from "../islands/counter"
import { createRoute } from "honox/factory"

export default createRoute((c) => {
  const articles = getArticles()

  return c.render(
    <div>
      <h1>Hello</h1>
      <Counter />
      {articles.map((article) => (
        <li key={article.slug}>
          <p>{article.slug}</p>
          <a href={`articles/${article.slug}`}>{article.frontmatter.title}</a>
        </li>
      ))}
    </div>,
  )
})

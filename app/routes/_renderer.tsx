import { jsxRenderer, useRequestContext } from "hono/jsx-renderer"
import { Script } from "honox/server"
import { Footer } from "@/components/projects/Footer"
import { Header } from "@/components/projects/Header"
import { baseURL, siteName } from "@/constants/site"
import { getCanonicalURL } from "@/functions/url"

export default jsxRenderer(
  async ({ children, title, description, ogImagePath, publishedAt, updatedAt, tags }) => {
    const pageTitle = title ? `${title} | ${siteName}` : siteName
    const siteDescription = description ?? `${siteName} is a tech blog`
    const c = useRequestContext()
    const canonicalURL = getCanonicalURL(c.req.url)

    const isArticlePage = !!title && !!publishedAt
    const jsonLd = getJSONLD(isArticlePage, title, siteDescription, ogImagePath, publishedAt, updatedAt, tags, canonicalURL)

    return (
      <html lang="ja">
        <head>
          <meta charset="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <meta name="description" content={siteDescription} />
          <meta property="og:site_name" content={siteName} />
          <meta property="og:title" content={pageTitle} />
          <meta property="og:description" content={siteDescription} />
          <meta property="og:url" content={canonicalURL} />
          <meta property="og:type" content={isArticlePage ? "article" : "website"} />
          <meta
            property="og:image"
            content={ogImagePath || `${baseURL}/favicon.ico`}
          />
          <meta property="og:locale:alternate" content="ja_JP" />
          {isArticlePage && publishedAt && (
            <>
              <meta property="article:published_time" content={publishedAt} />
              {updatedAt && (
                <meta property="article:modified_time" content={updatedAt} />
              )}
              <meta property="article:author" content="sunadoi" />
              {tags?.map((tag) => (
                <meta property="article:tag" content={tag} />
              ))}
            </>
          )}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@suna_tech" />
          <meta
            name="twitter:image"
            content={ogImagePath || `${baseURL}/favicon.ico`}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {import.meta.env.PROD ? (
            <script src="/static/theme.js" />
          ) : (
            <script src="/app/theme.ts" />
          )}
          <Script src="/app/client.ts" async />
          {import.meta.env.PROD ? (
            <link href="/static/assets/index.css" rel="stylesheet" />
          ) : (
            <link href="/app/styles/index.css" rel="stylesheet" />
          )}
          {import.meta.env.PROD ? (
            <>
              {/* faviconはroot直下に置く方がベター */}
              <link rel="icon" href="/favicon.ico" />
              <link
                rel="apple-touch-icon"
                sizes="180x180"
                href="/apple-touch-icon.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="32x32"
                href="/favicon-32x32.png"
              />
              <link
                rel="icon"
                type="image/png"
                sizes="16x16"
                href="/favicon-16x16.png"
              />
              <link rel="manifest" href="/site.webmanifest" />
            </>
          ) : (
            <link rel="icon" href="/app/public/favicon.ico" />
          )}
          <link rel="canonical" href={canonicalURL} />
          <link
            rel="alternate"
            type="application/rss+xml"
            title={siteName}
            href={`${baseURL}/feed.xml`}
          />
          <title>{pageTitle}</title>
        </head>
        <body class="flex flex-col sm:mx-20">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </body>
      </html>
    )
  },
)

const getJSONLD = (
  isArticlePage: boolean,
  title: string | undefined,
  description: string,
  ogImagePath: string | undefined,
  publishedAt: string | undefined,
  updatedAt: string | undefined,
  tags: string[] | undefined,
  canonicalURL: string,
) => {
  return isArticlePage
  ? {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: title,
      description: description,
      image: ogImagePath || `${baseURL}/favicon.ico`,
      datePublished: publishedAt,
      dateModified: updatedAt || publishedAt,
      author: {
        "@type": "Person",
        name: "sunadoi",
        url: `${baseURL}/about`,
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: `${baseURL}/favicon.ico`,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": canonicalURL,
      },
      keywords: tags?.join(","),
    }
  : {
      "@context": "https://schema.org",
      "@type": "Blog",
      name: siteName,
      url: baseURL,
      description: description,
      author: {
        "@type": "Person",
        name: "sunadoi",
        url: `${baseURL}/about`,
      },
      publisher: {
        "@type": "Organization",
        name: siteName,
        logo: {
          "@type": "ImageObject",
          url: `${baseURL}/favicon.ico`,
        },
      },
    }
}

import { promises } from "node:fs"
import { $ } from "bun"
import prompts from "prompts"

const result = await prompts(
  [
    {
      type: "text",
      name: "title",
      message: "記事のタイトルを入力してください:",
    },
    {
      type: "text",
      name: "slug",
      message: "記事のslugを入力してください:",
    },
    {
      type: "text",
      name: "tags",
      message: "記事のtagsを入力してください:",
    },
    {
      type: "text",
      name: "icon",
      message: "記事のiconを入力してください:",
    },
  ],
  {
    onCancel: () => {
      process.exit(0)
    },
  },
)

const date = new Date()
const yyyy = date.getFullYear()
const yyyyMM = date
  .toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
  })
  .replace("/", "")
const yyyyMMdd = date.toLocaleDateString("ja-JP", {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
})

const { exitCode } = await $`ls ./app/articles/${yyyy}/${yyyyMM}`
  .nothrow()
  .quiet()

if (exitCode !== 0) {
  await $`mkdir ./app/articles/${yyyy}/${yyyyMM}`
}

await $`touch ./app/articles/${yyyy}/${yyyyMM}/${result.slug}.mdx`

const frontMatter = `---
title: ${result.title}
ogImageTitle: ${result.title}
description:
tags: ${result.tags}
icon: ${result.icon}
publishedAt: ${yyyyMMdd}
updatedAt: ${yyyyMMdd}
---
`

await promises.writeFile(
  `./app/articles/${yyyy}/${yyyyMM}/${result.slug}.mdx`,
  frontMatter,
)

await $`echo articles/${yyyy}/${yyyyMM}/${result.slug}.mdx is created.`

// reactコンポーネント前提の型定義なので、MDXComponentsの型定義は使わない
// import type { MDXComponents } from "mdx/types"
import type { JSX } from "hono/jsx/jsx-runtime"
import { FileIconMap } from "@/constants/fileIconMap"
import { Anchor } from "./Anchor"
import { EmbedLink } from "./EmbedLink"
import { Img } from "./Image"

export function useMDXComponents() {
  return {
    h2: (props: JSX.IntrinsicElements["h2"]) => (
      <h2 className="font-semibold py-2 border-b" {...props}>
        {props.children}
      </h2>
    ),
    h3: (props: JSX.IntrinsicElements["h3"]) => (
      <h3 className="font-semibold py-2 border-b" {...props}>
        {props.children}
      </h3>
    ),
    h4: (props: JSX.IntrinsicElements["h4"]) => (
      <h4 className="font-semibold -mb-4" {...props}>
        {props.children}
      </h4>
    ),
    ol: (props: JSX.IntrinsicElements["ol"]) => (
      <ol class="list-decimal list-inside">{props.children}</ol>
    ),
    ul: (props: JSX.IntrinsicElements["ul"]) => (
      <ul class="list-disc list-inside">{props.children}</ul>
    ),
    a: (props: JSX.IntrinsicElements["a"]) => {
      return props.href?.startsWith("#") ? (
        <a href={props.href}>{props.children}</a>
      ) : (
        <Anchor {...props} />
      )
    },
    blockquote: (props: JSX.IntrinsicElements["blockquote"]) => (
      <blockquote
        className="text-slate-11 border-l-4 border-slate-6 pl-4 py-2"
        {...props}
      >
        {props.children}
      </blockquote>
    ),
    EmbedLink: EmbedLink,
    Img: Img,
    figcaption: (props: JSX.IntrinsicElements["figcaption"]) => {
      const Icon = FileIconMap.get(props["data-language"])

      return (
        <figcaption
          className="flex items-center gap-2 text-sm py-1 text-slate-100 bg-slate-600 rounded-md rounded-b-none px-3 w-fit"
          {...props}
        >
          {Icon && (
            <div class="w-4">
              <Icon />
            </div>
          )}
          {props.children}
        </figcaption>
      )
    },
    // codeのスタイルはstyles/syntax-hilight.cssで定義
  }
}

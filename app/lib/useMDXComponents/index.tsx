import type { MDXComponents } from "mdx/types"
import { FileIconMap } from "@/constants/fileIconMap"
import { Anchor } from "./Anchor"
import { EmbedLink } from "./EmbedLink"
import { Img } from "./Image"

export function useMDXComponents(): MDXComponents {
  return {
    h2: (props) => (
      <h2 className="font-semibold py-2 border-b" {...props}>
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="font-semibold py-2 border-b" {...props}>
        {props.children}
      </h3>
    ),
    h4: (props) => (
      <h4 className="font-semibold -mb-4" {...props}>
        {props.children}
      </h4>
    ),
    ol: (props) => <ol class="list-decimal list-inside">{props.children}</ol>,
    ul: (props) => <ul class="list-disc list-inside">{props.children}</ul>,
    a: (props) => {
      return props.href.startsWith("#") ? (
        <a href={props.href}>{props.children}</a>
      ) : (
        <Anchor {...props} />
      )
    },
    blockquote: (props) => (
      <blockquote
        className="text-slate-11 border-l-4 border-slate-6 pl-4 py-2"
        {...props}
      >
        {props.children}
      </blockquote>
    ),
    EmbedLink: EmbedLink,
    Img: Img,
    figcaption: (props) => {
      const Icon = FileIconMap.get(props["data-language"])

      return (
        <figcaption
          className="flex items-center gap-2 text-slate-100 bg-slate-600 rounded-md rounded-b-none px-3 w-fit"
          {...props}
        >
          {Icon && <Icon width={16} height={16} />}
          {props.children}
        </figcaption>
      )
    },
    // codeのスタイルはstyles/syntax-hilight.cssで定義
  }
}

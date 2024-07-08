import type { MDXComponents } from "mdx/types"
import { FileIconMap } from "@/constants/fileIconMap"
import { Anchor } from "./Anchor"
import { EmbedLink } from "./EmbedLink"

export function useMDXComponents(): MDXComponents {
  return {
    h2: (props) => (
      <h2
        className="bg-accent text-accent-foreground px-3 py-4 rounded-md"
        {...props}
      >
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3 className="border-b-2 text-accent-foreground px-3 py-2" {...props}>
        {props.children}
      </h3>
    ),
    a: (props) => {
      return props.href.startsWith("#") ? (
        <a href={props.href}>{props.children}</a>
      ) : (
        <Anchor {...props} />
      )
    },
    blockquote: (props) => (
      <blockquote
        className="text-slate-11 border-l-4 border-slate-4 pl-4 py-2"
        {...props}
      >
        {props.children}
      </blockquote>
    ),
    EmbedLink: EmbedLink,
    figcaption: (props) => {
      const icon = FileIconMap.get(props["data-language"])

      return (
        <figcaption
          className="flex gap-2 text-slate-100 bg-slate-600 rounded-md rounded-b-none px-4 w-fit"
          {...props}
        >
          {icon && <img src={icon} alt="" width={16} height={16} />}
          {props.children}
        </figcaption>
      )
    },
    // codeのスタイルはstyles/syntax-hilight.cssで定義
  }
}
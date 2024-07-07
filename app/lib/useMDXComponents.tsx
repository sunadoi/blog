import type { MDXComponents } from "mdx/types"

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
        <a
          className="text-accent-foreground underline hover:opacity-70"
          target="_blank"
          rel="noreferrer"
          {...props}
        >
          {props.children}
        </a>
      )
    },
    blockquote: (props) => (
      <blockquote
        className="bg-slate-2 border-l-4 border-slate-4 pl-2 py-4 rounded-md"
        {...props}
      >
        {props.children}
      </blockquote>
    ),
    // codeのスタイルはstyles/syntax-hilight.cssで定義
  }
}

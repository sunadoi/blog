import type { MDXComponents } from "mdx/types"

export function useMDXComponents(): MDXComponents {
  return {
    h1: (props) => (
      <h1 className="text-lime-7 text-3xl" {...props}>
        {props.children}
      </h1>
    ),
  }
}

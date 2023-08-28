import { MDXComponents } from "mdx/types";
import NextImage from "next/image";
// import Link from '@components/link'
import { File, FileTree, Folder } from "@/components/file-tree";
import { MDXImage } from "./mdx-image";
import { MDXNote } from "./mdx-note";
// import Info from '@components/icons/info'
import Pre from "@/components/Pre";
import { GoHome, GoInfo } from "react-icons/go";
import { Tweet } from "react-tweet";
export const mdxComponents: MDXComponents = {
  pre: Pre,
  // @ts-expect-error types
  img: MDXImage,
  Image: NextImage,
  Details: ({
    children,
    summary,
    ...props
  }: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLDetailsElement
  > & {
    summary: string;
  }) => (
    <details {...props}>
      {summary && <summary>{summary}</summary>}
      {children}
    </details>
  ),
  Note: MDXNote,
  // icons
  InfoIcon: GoInfo,
  HomeIcon: GoHome,

  // file tree
  FileTree,
  File,
  Folder,

  Tweet: (props) => (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Tweet {...props} />
    </div>
  ),
};

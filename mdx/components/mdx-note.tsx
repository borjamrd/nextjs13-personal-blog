import { BsInfoSquare } from "react-icons/bs";
import styles from "./mdx-note.module.css";
export function MDXNote({
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <div
      {...props}
      className="relative bg-slate-800 backdrop-blur-xs p-3 rounded"
    >
      <BsInfoSquare className="absolute -left-2 -top-4" />

      <div>
        <b>Note: </b>
        {children}
      </div>
    </div>
  );
}

import { Code } from "bright";
import { FC } from "react";
import { copytoclipboard } from "./extension";
interface PreProps {}

const Pre: FC<PreProps> = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLElement>,
  HTMLPreElement
>) => {
  Code.lineNumbers = true;
  Code.theme = "monokai";
  Code.extensions = [copytoclipboard];
  return <Code {...props}>{children as any}</Code>;
};

export default Pre;

import { CopyButton } from "./CopyButton";

/** @type {import("bright").Extension} */
export const copytoclipboard = {
  name: "copytoclipboard",
  MultilineAnnotation: ({ children, query, brightProps }) => (
    <CopyButton />
  ),
}
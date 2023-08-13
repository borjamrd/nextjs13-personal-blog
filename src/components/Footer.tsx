import Link from "next/link";
import { FC } from "react";
import Button from "./Button";

interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="h-10 p-3  flex justify-center backdrop-blur-sm border-neutral-300 border-t border-b dark:border-neutral-600">
        <div className="flex justify-between gap-10 items-center text-sm">
          <p>@ 2023 Borja Muñoz Ruiz-Dana</p>
          <div className="flex items-center space-x-1">
            <Link href={"https://twitter.com/borjamrd1"}>
              <Button size={"square"}>
                <svg height="1.2em" viewBox="0 0 24 24" width="1.2em">
                  <path
                    d="M22.46 6c-.77.35-1.6.58-2.46.69c.88-.53 1.56-1.37 1.88-2.38c-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29c0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15c0 1.49.75 2.81 1.91 3.56c-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.98a8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56c.84-.6 1.56-1.36 2.14-2.23Z"
                    fill="currentColor"
                  ></path>
                </svg>{" "}
                <span className="sr-only">Twitter</span>{" "}
              </Button>
            </Link>

            <a
              href="https://github.com/borjamrd"
              className="flex items-center dark:hover:bg-slate-800 hover:bg-slate-300 justify-center rounded-md h-8 p-1.5 w-8"
              target="_blank"
            >
              <svg height="1.2em" viewBox="0 0 24 24" width="1.2em">
                <path
                  d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              <span className="sr-only">Github</span>{" "}
            </a>
            <a
              href="/rss.xml"
              className="flex items-center dark:hover:bg-slate-800 hover:bg-slate-300 justify-center rounded-md h-8 p-1.5 w-8"
              target="_blank"
            >
              <svg height="1.2em" viewBox="0 0 24 24" width="1.2em">
                <path
                  d="M6.18 15.64a2.18 2.18 0 0 1 2.18 2.18C8.36 19 7.38 20 6.18 20C5 20 4 19 4 17.82a2.18 2.18 0 0 1 2.18-2.18M4 4.44A15.56 15.56 0 0 1 19.56 20h-2.83A12.73 12.73 0 0 0 4 7.27V4.44m0 5.66a9.9 9.9 0 0 1 9.9 9.9h-2.83A7.07 7.07 0 0 0 4 12.93V10.1Z"
                  fill="currentColor"
                ></path>
              </svg>{" "}
              <span className="sr-only">RSS</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";
import { FC } from "react";
import Button from "./Button";
import { AiOutlineTwitter, AiOutlineGithub } from "react-icons/ai";
interface FooterProps {}

const Footer: FC<FooterProps> = ({}) => {
  return (
    <footer>
      <div className="h-10 p-3  flex justify-center backdrop-blur-sm border-neutral-300 border-t border-b dark:border-neutral-600">
        <div className="flex justify-between gap-10 items-center text-sm">
          <p>@ 2023 Borja Muñoz Ruiz-Dana</p>
          <div className="flex items-center space-x-1">
            <Link target="_blank" href={"https://twitter.com/borjamrd1"}>
              <Button size={"square"}>
                <AiOutlineTwitter />
                <span className="sr-only">Twitter</span>{" "}
              </Button>
            </Link>
            <Link target="_blank" href={"https://github.com/borjamrd"}>
              <Button size={"square"}>
                <AiOutlineGithub />
                <span className="sr-only">Github</span>{" "}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

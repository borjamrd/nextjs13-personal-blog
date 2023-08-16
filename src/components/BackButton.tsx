"use client";

import { FC } from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface BackButtonProps {}

const BackButton: FC<BackButtonProps> = ({}) => {
  return (
    <Link href={"/"}>
      <Button variant={"dark"} size={"xs"} className="mb-4">
        Atrás
      </Button>
    </Link>
  );
};

export default BackButton;

"use client";

import { FC, useEffect, useRef, useState } from "react";
import { copyToClipboard } from "./copyToClipboard";
import { cn } from "@/lib/utils";

interface CopyButtonProps {
  children: any;
}

export function CopyButton({ children }: CopyButtonProps) {
  const preRef = useRef<HTMLPreElement>(null);

  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setCopied(false), 2000);

    return () => clearTimeout(timer);
  }, [copied]);

  const onClick = async () => {
    if (preRef.current?.innerText) {
      copyToClipboard(preRef.current.innerText);
      setCopied(true);
    }
  };
  return (
    <button
      type="button"
      aria-label="Copy to Clipboard"
      onClick={onClick}
      disabled={copied}
    >
      hi
    </button>
  );
}

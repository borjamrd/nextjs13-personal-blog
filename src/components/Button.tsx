import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import Link from "next/link";
import { FC, ReactNode } from "react";
export const buttonVariants = cva("inline-block border", {
  variants: {
    variant: {
      default:
        "flex gap-2 items-center flex-nowrap rounded-lg border hover:backdrop-blur-sm border-transparent p-2 transition-colors hover:border-gray-300 hover:bg-gray-100/30 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30",
      // "border-indigo-600 bg-indigo-600 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500",
      dark: "text-slate-100 bg-slate-800",
    },
    size: {
      xs: "text-xs px-2.5 py-0.5",
      sm: "text-sm px-2.5 py-0.5",
      md: "text-base px-2.5 py-1.5",
      square: "text-base p-1.5",
      lg: "text-lg px-3 py-1.5",
      xl: "text-3xl px-3.5 py-1.5.5",
      xxl: "text-4xl px-4 py-2.5",
    },
    pill: {
      square: "rounded-none",
      large: "rounded-lg",
      full: "rounded-full",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    pill: "large",
  },
});

interface ButtonProps
  extends React.HtmlHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
}

const Button: FC<ButtonProps> = ({ className, variant, children, size }) => {
  return (
    <button className={cn(buttonVariants({ variant, size, className }))}>
      {children}
    </button>
  );
};

export default Button;

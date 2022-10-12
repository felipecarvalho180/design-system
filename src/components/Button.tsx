import React, { ButtonHTMLAttributes } from "react";
import { clsx } from "clsx";
import { Slot } from "@radix-ui/react-slot";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  asChild?: boolean;
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      {...props}
      className={clsx(
        "py-3 px-4 bg-cyan-500 rounded text-black font-semibold text-sm w-full hover:bg-cyan-300 transition-colors focus:ring-2 ring-white",
        className
      )}
    >
      {children}
    </Comp>
  );
}

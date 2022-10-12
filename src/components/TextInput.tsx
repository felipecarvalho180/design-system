import React, { InputHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";

export interface TextInputRootProps {
  children: React.ReactNode;
}

function Root({ children }: TextInputRootProps) {
  return (
    <div className="flex items-center gap-3 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300 h-12">
      {children}
    </div>
  );
}

Root.displayName = "TextInput.Root";

export interface TextInputIconProps {
  children: React.ReactNode;
}

function Icon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>;
}

Icon.displayName = "TextInput.Icon";

interface TextInputInputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input(props: TextInputInputProps) {
  return (
    <input
      className="bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none"
      {...props}
    />
  );
}

Input.displayName = "TextInput.Input";

export const TextInput = {
  Root,
  Input,
  Icon,
};

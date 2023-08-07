import { type } from "os";
import { ReactNode } from "react";

export default function Button({
  onClick,
  children,
  bgColor = "purple",
  rounded = "rounded-lg",
  className = "",
  height = "h-15", // Default height
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={[
        "inline-flex justify-center text-base px-3 sm:px-[calc(1.9rem_+_0.5vw)] transition-colors",
        "text-white hover:text-gray-100",
        "items-center py-2 capitalize whitespace-nowrap",
        bgColors[bgColor],
        rounded,
        className,
      ].join(" ")}
      style={{ height }}
    >
      {children}
    </button>
  );
}

const bgColors: Record<Exclude<ButtonProps["bgColor"], undefined>, string> = {
  orange: "bg-accent hover:bg-accent-dark",
  primary: "bg-primary hover:bg-primary-dim",
  purple: "bg-purple-350 hover:bg-purple-450",
};

interface ButtonProps {
  onClick?: () => void;
  children: string | ReactNode;
  type?: "button" | "submit" | "reset";
  bgColor?: "orange" | "primary" | "purple";
  rounded?: string;
  className?: string;
  height?: string; // You can use any valid tailwind CSS height classes here
}

import { cn } from "@/lib/utils";
import type { HTMLAttributes } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  large?: boolean;
  alt?: boolean;
}

export default function Container({
  large,
  alt,
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={cn(
        "container px-8 mx-auto xl:px-5",
        large ? " max-w-(--breakpoint-xl)" : " max-w-(--breakpoint-lg)",
        !alt && "py-5 lg:py-8",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

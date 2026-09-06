import type { AnchorHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  variant?: "primary" | "outline";
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-card hover:bg-primary-hover hover:shadow-card-hover",
  outline:
    "border border-line text-ink hover:border-primary hover:text-primary-hover",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <a
      className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all duration-200 ${variantClasses[variant]} ${className}`}
      {...rest}
    >
      {children}
    </a>
  );
}

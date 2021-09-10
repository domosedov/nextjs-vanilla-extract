import { forwardRef } from "react";
import type { ButtonHTMLAttributes } from "react";
import clsx from "clsx";
import { button } from "./button.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: NonNullable<Parameters<typeof button>[0]>["color"];
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", color, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={clsx(button({ color }), className)}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

import { recipe } from "@vanilla-extract/recipes";
export const button = recipe({
  base: {
    border: "none",
    borderRadius: "0.25rem",
  },
  variants: {
    color: {
      primary: {
        backgroundColor: "orange",
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

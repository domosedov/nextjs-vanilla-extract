import { recipe } from "@vanilla-extract/recipes";
import { globalVars, vars } from "../../../styles/app.css";
export const button = recipe({
  base: {
    border: "none",
    borderRadius: "0.25rem",
    paddingLeft: "2rem",
    paddingRight: "2rem",
    fontSize: "2rem",

    "@media": {
      "screen and (min-width: 768px)": {
        fontSize: "0.75rem",
      },
    },
  },
  variants: {
    color: {
      primary: {
        backgroundColor: globalVars.color.brand,
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

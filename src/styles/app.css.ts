import { createTheme, createGlobalTheme } from "@vanilla-extract/css";

export const [theme, vars] = createTheme({
  color: {
    brand: "green",
  },
});

export const themeRose = createTheme(vars, {
  color: {
    brand: "pink",
  },
});

console.log(theme);

export const globalVars = createGlobalTheme(":root", {
  color: {
    brand: "red",
  },
});

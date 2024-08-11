import { createContext } from "react";

export interface IThemeContext {
  theme: "light" | "dark";
  changeTheme?: (themeMode: "light" | "dark") => void;
}

export const defaultThemeContextValue: IThemeContext = {
  theme: "light",
};

const ThemeContext = createContext<IThemeContext>(defaultThemeContextValue);

export default ThemeContext;

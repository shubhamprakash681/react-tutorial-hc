import { createContext } from "react";

interface IThemeContext {
  theme: "light" | "dark";
  changeTheme?: (theme: "light" | "dark") => void;
}

export const defaultThemeState: IThemeContext = {
  theme: "light",
};

const ThemeContext = createContext<IThemeContext>(defaultThemeState);

export default ThemeContext;

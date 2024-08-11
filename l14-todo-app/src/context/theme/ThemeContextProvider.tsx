import React, { useState } from "react";
import ThemeContext, { defaultThemeContextValue } from "./ThemeContext";

interface IThemeContextProvider {
  children: React.ReactNode;
}
const ThemeContextProvider = ({ children }: IThemeContextProvider) => {
  const [theme, setTheme] = useState<"light" | "dark">(
    defaultThemeContextValue.theme
  );

  const changeTheme = (themeMode: "light" | "dark") => {
    setTheme(themeMode);
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

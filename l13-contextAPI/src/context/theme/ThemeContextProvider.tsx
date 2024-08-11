import React, { useState } from "react";
import ThemeContext, { defaultThemeState } from "./ThemeContext";

type Props = {
  children: React.ReactNode;
};

const ThemeContextProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<"light" | "dark">(defaultThemeState.theme);

  const changeTheme = (theme: "light" | "dark") => setTheme(theme);

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContextProvider;

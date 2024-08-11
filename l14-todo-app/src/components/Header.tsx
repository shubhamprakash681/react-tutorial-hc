import React, { useContext } from "react";
import ThemeContext, { IThemeContext } from "../context/theme/ThemeContext";
import { MdLightMode, MdDarkMode } from "react-icons/md";

type HeaderButtonProps = {
  children?: React.ReactNode;
  onClickHandler: () => void;
};

const HeaderButton: React.FC<HeaderButtonProps> = ({
  children,
  onClickHandler,
}) => {
  return (
    <button
      className="rounded-md border border-orange-400 p-3 hover:bg-orange-700 hover:border-orange-700"
      title="theme-btn"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

const Header = () => {
  const { theme, changeTheme } = useContext<IThemeContext>(ThemeContext);

  return (
    <>
      <div className="flex items-center justify-between px-5 py-3">
        <h1 className="font-semibold text-lg">TODOS</h1>

        {theme === "light" && (
          <HeaderButton
            onClickHandler={() => changeTheme && changeTheme("dark")}
          >
            {<MdLightMode size={"20px"} />}
          </HeaderButton>
        )}
        {theme === "dark" && (
          <HeaderButton
            onClickHandler={() => changeTheme && changeTheme("light")}
          >
            {<MdDarkMode size={"20px"} />}
          </HeaderButton>
        )}
      </div>
    </>
  );
};

export default Header;

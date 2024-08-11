import React, { useContext } from "react";
import ThemeContext from "../context/theme/ThemeContext";
import { MdDarkMode, MdLightMode } from "react-icons/md";

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
      className="rounded-md border border-green-400 p-3 hover:bg-green-100 hover:text-black"
      title="theme-btn"
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

const Header = () => {
  const { theme, changeTheme } = useContext(ThemeContext);

  return (
    <div className="flex items-center justify-between px-5 py-3">
      <h1 className="font-semibold text-lg">Context API Practice APP</h1>

      {theme === "light" && (
        <HeaderButton onClickHandler={() => changeTheme && changeTheme("dark")}>
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
  );
};

export default Header;

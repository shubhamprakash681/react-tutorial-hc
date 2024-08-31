import React from "react";
import { useAppDispatch, useAppSelector } from "../hooks/useStore";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { toggleTheme } from "../features/themeSlice";

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
  const { theme } = useAppSelector((state) => state.themeReducer);

  const dispatch = useAppDispatch();

  return (
    <div className="flex items-center justify-between px-5 py-3">
      <h1 className="font-semibold text-lg">TODOS</h1>

      {theme === "light" && (
        <HeaderButton onClickHandler={() => dispatch(toggleTheme())}>
          {<MdLightMode size={"20px"} />}
        </HeaderButton>
      )}
      {theme === "dark" && (
        <HeaderButton onClickHandler={() => dispatch(toggleTheme())}>
          {<MdDarkMode size={"20px"} />}
        </HeaderButton>
      )}
    </div>
  );
};

export default Header;

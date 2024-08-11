import { useContext, useEffect, useState } from "react";
import Header from "./components/Header";
import ThemeContext from "./context/theme/ThemeContext";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

interface PageButtonProps {
  children: React.ReactNode;
  onClickHandler: () => void;
  isActive: boolean;
}
const PageButton: React.FC<PageButtonProps> = ({
  children,
  isActive,
  onClickHandler,
}) => {
  return (
    <button
      className={`${
        isActive && "bg-green-500"
      } w-40 sm:w-60 border border-green-400 p-3 hover:bg-green-700 hover:text-black`}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

const App = () => {
  const { theme } = useContext(ThemeContext);

  const [activePage, setActivePage] = useState<"login" | "profile">("login");

  // useEffect for setting tailwind theme
  useEffect(() => {
    const html = document.querySelector("html");

    html?.classList.remove("light", "dark");

    html?.classList.add(theme);
  }, [theme]);

  return (
    <>
      <div className="app-container bg-white text-black dark:bg-black dark:text-white">
        <div className="outer-top shadow-sm shadow-blue-200">
          <Header />
        </div>

        <div className="outer-bottom">
          <div className="page-container p-6">
            <div className="flex items-start justify-around">
              <div>
                <div className="rounded-sm">
                  <PageButton
                    isActive={activePage === "login"}
                    onClickHandler={() => setActivePage("login")}
                  >
                    Login
                  </PageButton>
                  <PageButton
                    isActive={activePage === "profile"}
                    onClickHandler={() => setActivePage("profile")}
                  >
                    View Profile
                  </PageButton>
                </div>

                {activePage === "login" && <Login />}
                {activePage === "profile" && <Profile />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

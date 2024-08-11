import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ThemeContextProvider from "./context/theme/ThemeContextProvider.tsx";
import TodoContextProvider from "./context/todo/TodoContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </ThemeContextProvider>
  </StrictMode>
);

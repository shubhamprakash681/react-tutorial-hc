import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todoSlice";
import themeReducer from "../features/themeSlice";

const reduxStore = configureStore({
  reducer: { todoReducer, themeReducer },
});

export default reduxStore;

export type RootState = ReturnType<typeof reduxStore.getState>;
export type AppDispatch = typeof reduxStore.dispatch;

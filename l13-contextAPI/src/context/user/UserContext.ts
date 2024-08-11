import { createContext } from "react";

export interface IUser {
  name: string;
  email: string;
  age: number;
}

interface IUserContext {
  user: IUser;

  changeUserData?: (name: string, email: string, age: number) => void;
}

export const defaultUserState: IUser = {
  name: "",
  email: "",
  age: 0,
};

const UserContext = createContext<IUserContext>({ user: defaultUserState });
export default UserContext;

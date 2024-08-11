import React, { useState } from "react";
import UserContext, { defaultUserState, IUser } from "./UserContext";

type Props = { children: React.ReactNode };

const UserContextProvider = ({ children }: Props) => {
  const [user, setUser] = useState<IUser>(defaultUserState);

  const changeUserData = (name: string, email: string, age: number) =>
    setUser({
      name,
      email,
      age,
    });

  return (
    <UserContext.Provider value={{ user, changeUserData }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;

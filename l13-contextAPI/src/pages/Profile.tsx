import { useContext } from "react";
import UserContext from "../context/user/UserContext";

type Props = {};

const Profile = (props: Props) => {
  const { user } = useContext(UserContext);

  return (
    <div className="text-center my-10 p-4">
      <h1 className="text-3xl font-bold">Profile</h1>

      {user.name === "" || user.email === "" || user.age === 0 ? (
        <div className="h-20 text-xl font-semibold my-5">
          Please login to view profile
        </div>
      ) : (
        <>
          <div className="flex justify-between items-center my-5">
            <span>Name: </span>
            <span className="w-4/5">{user.name}</span>
          </div>

          <div className="flex justify-between items-center my-5">
            <span>Email: </span>
            <span className="w-4/5">{user.email}</span>
          </div>

          <div className="flex justify-between items-center my-5">
            <span>Age: </span>
            <span className="w-4/5">{user.age}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;

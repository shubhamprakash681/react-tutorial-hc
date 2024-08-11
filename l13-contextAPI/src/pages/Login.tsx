import { useContext, useState } from "react";
import UserContext, {
  defaultUserState,
  IUser,
} from "../context/user/UserContext";

type Props = {};

const Login = (props: Props) => {
  const { changeUserData } = useContext(UserContext);

  const [displaySuccessMessage, setDisplaySuccessMessage] =
    useState<boolean>(false);
  const [formData, setFormData] = useState<IUser>(defaultUserState);

  const loginHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    changeUserData &&
      changeUserData(formData.name, formData.email, formData.age);

    setDisplaySuccessMessage(true);
  };

  const formChangeHandler = (e: {
    target: { name: string; value: string };
  }) => {
    const { name, value } = e.target;

    if (name === "age") {
      setFormData({ ...formData, [name]: Number(value) });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <>
      {/* {console.log("formData: ", formData)} */}

      <form onSubmit={loginHandler} className="text-center my-10 p-4">
        <h1 className="text-3xl font-bold">Login</h1>

        <div className="flex justify-between items-center my-5">
          <label htmlFor="name">Name:</label>
          <input
            required
            onChange={formChangeHandler}
            className="w-4/5 bg-transparent"
            id="name"
            name="name"
            type="text"
            value={formData.name}
          />
        </div>

        <div className="flex justify-between items-center my-5">
          <label htmlFor="email">Email:</label>
          <input
            required
            onChange={formChangeHandler}
            className="w-4/5 bg-transparent"
            id="email"
            name="email"
            type="email"
            value={formData.email}
          />
        </div>

        <div className="flex justify-between items-center my-5">
          <label htmlFor="age">Age:</label>
          <input
            required
            onChange={formChangeHandler}
            min={0}
            max={110}
            className="w-4/5 bg-transparent"
            id="age"
            name="age"
            type="number"
            value={formData.age}
          />
        </div>

        {displaySuccessMessage && (
          <h3 className="text-green-800">Login Successful</h3>
        )}
        <button
          className="mt-2 w-full text-white rounded-md border border-green-700 p-3 bg-green-700 hover:bg-green-800"
          type="submit"
        >
          Login
        </button>
      </form>
    </>
  );
};

export default Login;

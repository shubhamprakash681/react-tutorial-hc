import { useParams } from "react-router-dom";

type Props = {};

const User = ({}: Props) => {
  const { userId } = useParams();

  return (
    <div className="min-h-52 flex flex-col justify-center">
      <div className="bg-slate-700 p-3 m-3 text-center text-2xl">
        User: {userId}
      </div>
      ;
    </div>
  );
};

export default User;

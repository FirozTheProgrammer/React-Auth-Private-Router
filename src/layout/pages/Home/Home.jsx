import { useContext } from "react";
import { AuthContex } from "../../../Provider/AuthProvider";

const Home = () => {
  const authinfo = useContext(AuthContex);
  return (
    <div>
      <h1>This is my Home for {authinfo.name}</h1>
    </div>
  );
};

export default Home;

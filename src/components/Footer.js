import { useContext } from "react";
import UserContext from "../utils/UserContext";

const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <>
      <h1>footer</h1>
      <h1 className="text-red-500 font-semibold">
        This site is developed by {user.name} - {user.email}
      </h1>
    </>
  );
};

export default Footer;

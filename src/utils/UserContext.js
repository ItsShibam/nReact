import { createContext } from "react";

const UserContext = createContext({
  user: {
    name: "React Learner",
    email: "dummy@gmail.com",
  },
});

UserContext.displayName = "UserContext";
export default UserContext;

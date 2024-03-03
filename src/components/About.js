import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";
import React from "react";
import UserContext from "../utils/UserContext.js";

// const About = () => {
//   return (
//     <>
//       <h1>About</h1>
//       {/* <Outlet/> */}
//       <ProfileFunctional name={"Appu"}/>
//       <Profile name={"AppuClass"}/>
//     </>
//   );
// };

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("Parent - constructor");
  }

  componentDidMount() {
    console.log("Parent - componentDidMount");
  }

  render() {
    console.log("Parent - render");
    return (
      <>
        <h1 className="text-4xl">About Us</h1>
        <UserContext.Consumer>
          {({ user }) => (
            <h1 className="font-bold text-3xl text-green-600 p-2 m-2">
              {user.name} : {user.email}
            </h1>
          )}
        </UserContext.Consumer>
        <p>this is react course</p>
        <Outlet />
        {/* <ProfileFunctional name={"Appu"} /> */}
        {/* <Profile name={"Child1"} /> */}
        {/* <Profile name={"Child2"} /> */}
      </>
    );
  }
}

export default About;

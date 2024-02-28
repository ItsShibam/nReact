import { Outlet } from "react-router-dom";
import ProfileFunctional from "./Profile";
import Profile from "./ProfileClass";
import React from "react";

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
    console.log("Parent - componentDidMount")
  }



  render() {
    console.log("Parent - render");
    return (
      <>
        <h1>About</h1>
        {/* <Outlet/> */}
        {/* <ProfileFunctional name={"Appu"} /> */}
        <Profile name={"Child1"} />
        {/* <Profile name={"Child2"} /> */}
      </>
    );
  }
}

export default About;

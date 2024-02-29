import React, { useEffect, useState } from "react";
import LOGO from "../assets/img/logofood.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

export const Title = () => {
  return (
    <a href="/">
      <img alt="logo" className="logo" src={LOGO} />
    </a>
  );
};

const Header = () => {
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();

  // useEffect(() => {
  //   console.log("useEffect inside Header");
  // });

  // console.log("rendering header");
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to={"/about"}>About</Link>
          </li>
          <li>
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li>Cart</li>
          <li>
            <Link to={"/instamart"}>Instamart</Link>
          </li>
          {isOnline ? <li>🟢online</li> : <li>🔴offline</li>}
        </ul>
      </div>
      {isLoggedIn ? (
        <button onClick={() => setIsLoggedIn(false)}>Logout</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>LogIn</button>
      )}
    </div>
  );
};

export default Header;

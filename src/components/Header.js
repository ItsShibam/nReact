import React, { useEffect, useState } from "react";
import LOGO from "../assets/img/logofood.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

export const Title = () => {
  return (
    <a href="/">
      <img alt="logo" className="logo w-28" src={LOGO} />
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
    <div className="header flex justify-between border shadow-lg bg-pink-50 sm:bg-blue-50 md:bg-yellow-50">
      <Title />
      <div className="nav-items">
        <ul className="flex items-center py-10 font-semibold">
          <li className="m-2">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="m-2">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="m-2">
            <Link to={"/contact"}>Contact us</Link>
          </li>
          <li className="m-2">Cart</li>
          <li className="m-2">
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

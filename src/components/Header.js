import React, { useEffect, useState, useContext } from "react";
import LOGO from "../assets/img/logofood.png";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

import { useSelector } from "react-redux";

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

  const { user } = useContext(UserContext);

  const cartItems = useSelector((s) => s.cart.items);

  // useEffect(() => {
  //   console.log("useEffect inside Header");
  // });

  // console.log("rendering header");
  return (
    <div className="header flex justify-between border shadow-lg bg-pink-50 sm:bg-blue-50 md:bg-yellow-50">
      <Title />
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
        <li className="m-2">
          <Link to={"/instamart"}>Instamart</Link>
        </li>
        <li className="m-2"><Link to={"/cart"}>Cart-{cartItems.length}</Link></li>
      </ul>
        {isOnline ? <span>🟢</span> : <span>🔴</span>}
      <h2 className="font-semibold text-green-500">{user.name}</h2>
      {isLoggedIn ? (
        <button className="underline" onClick={() => setIsLoggedIn(false)}>
          Logout
        </button>
      ) : (
        <button className="underline" onClick={() => setIsLoggedIn(true)}>
          LogIn
        </button>
      )}
    </div>
  );
};

export default Header;

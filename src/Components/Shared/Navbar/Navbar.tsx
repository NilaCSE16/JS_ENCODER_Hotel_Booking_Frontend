"use client";
import React, { use, useEffect, useState } from "react";
import "./Navbar.css";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/(rootLayout)/lib/hooks";
import { loginUser, logoutUser } from "@/Components/Redux/user/userSlice";
import { IoMenuOutline } from "react-icons/io5";
const Navbar = () => {
  const user = useSelector((state: any) => state.user.user).email;
  const dispatch = useAppDispatch();
  // console.log(!user.email);
  const router = useRouter();
  const handleHome = () => {
    router.push("/");
  };
  const handleLogout = () => {
    // Logout logic
    dispatch(logoutUser());
    localStorage.removeItem("myBook");
    router.push("/login");
  };
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  return (
    <div className="navbar bgColor menu-sm">
      <div className="flex flex-1">
        <div className="menu-icon" onClick={toggleMenu}>
          {/* <i className="fa fa-bars" aria-hidden="true"></i> */}
          <IoMenuOutline />
        </div>
        <h3 className={`btn ${showMenu ? "show" : ""}`} onClick={handleHome}>
          Home
        </h3>
        <h3
          className={`btn ${showMenu ? "show" : ""}`}
          onClick={() => router.push("/showBook")}
        >
          My Bookings
        </h3>
        <button
          className={`btn ${showMenu ? "show" : ""}`}
          onClick={user ? handleLogout : () => router.push("/login")}
        >
          {user ? "Logout" : "Login"}
        </button>
        {/* <button className={`btn ${showMenu ? "show" : ""}`}>Login</button> */}
      </div>
      <div style={{ cursor: "pointer" }}>{/* <h3>JS</h3> */}</div>
    </div>
  );
};

export default Navbar;

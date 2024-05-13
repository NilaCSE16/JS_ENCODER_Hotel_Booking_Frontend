"use client";

import React, { useEffect } from "react";
import "./Login.css";
import "../Navbar/Navbar.css";
import { useAppDispatch, useAppSelector } from "@/app/(rootLayout)/lib/hooks";
import { loginUser } from "@/Components/Redux/user/userSlice";
import { useRouter } from "next/navigation";

const Login = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleRegister = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    dispatch(loginUser({ email: email, password: password }));
  };
  React.useEffect(() => {
    // fetch("../../../../public/fakedb.json")
    //   .then((res) => res.json())
    //   .then((data) => console.log(data));
    if (user.user.email && !user.isError) {
      router.push("/");
    }
  }, [user.isError, router, user.user]);
  // console.log(user);
  return (
    <div className="login">
      <h2 className="text-center mb">Login Now</h2>
      <form onSubmit={handleRegister}>
        <div className="grid">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" placeholder="email" id="email" />
        </div>
        <div className="grid">
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            id="password"
          />
        </div>
        <div className="">
          <button className="btn bgColor">Submit</button>
        </div>
      </form>
      <p style={{ marginTop: "15px" }}>
        New to JS? Please{" "}
        <a href="/register" style={{ color: "blue" }}>
          Register now
        </a>
      </p>
    </div>
  );
};

export default Login;

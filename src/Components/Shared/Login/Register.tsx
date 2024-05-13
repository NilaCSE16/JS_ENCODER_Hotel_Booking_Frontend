"use client";

import React from "react";
import "./Login.css";
import "../Navbar/Navbar.css";
import { useAppDispatch, useAppSelector } from "@/app/(rootLayout)/lib/hooks";
import { createUser } from "@/Components/Redux/user/userSlice";
import { useRouter } from "next/navigation";

// interface SignupFormInputs {
//   email: string;
//   password: string;
// }

const Register = () => {
  const router = useRouter();
  const user = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const handleRegister = (event: any) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email);
    // const user = { email: email, password: password };
    dispatch(createUser({ email: email, password: password }));
  };
  React.useEffect(() => {
    if (user.user.email && !user.isError) {
      router.push("/");
    }
  }, [user.isError, router, user.user]);
  return (
    <div className="login">
      <h2 className="text-center mb">Register Now</h2>
      <form onSubmit={handleRegister}>
        <div className="grid">
          <label htmlFor="">Email: </label>
          <input type="email" name="email" placeholder="email" id="email" />
        </div>
        <div className="grid">
          <label htmlFor="">Password: </label>
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
        Already have an account? Please{" "}
        <a href="/login" style={{ color: "blue" }}>
          Login now
        </a>
      </p>
    </div>
  );
};

export default Register;

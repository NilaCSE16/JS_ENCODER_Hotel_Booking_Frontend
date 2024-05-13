"use client";
import Home from "@/app/(rootLayout)/page";
import React, { useEffect, useState } from "react";

const page = ({ hotel }: any) => {
  console.log(hotel);
  return (
    <>
      <h1 style={{ textAlign: "center" }}>This is home page</h1>
    </>
  );
};

export default page;

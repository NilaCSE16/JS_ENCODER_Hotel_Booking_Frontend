import React from "react";
import Home from "@/Components/Home/Home";
import { Suspense } from "react";

export default function Page({ children }: any) {
  return (
    <>
      <Suspense fallback={<>Loading...</>}>
        <Home></Home>
      </Suspense>
    </>
  );
}

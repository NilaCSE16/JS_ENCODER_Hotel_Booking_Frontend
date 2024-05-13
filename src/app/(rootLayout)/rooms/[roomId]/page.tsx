import ViewHotels from "@/Components/ViewHotels/ViewHotels";
import { useRouter } from "next/router";
// import { useRouter } from "next/navigation";
import React from "react";

const page = () => {
  //   const router = useRouter();
  return (
    <div>
      <ViewHotels></ViewHotels>
    </div>
  );
};

export default page;

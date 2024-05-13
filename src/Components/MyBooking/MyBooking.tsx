"use client";

import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "../Shared/Login/Login.css";
import { useAppDispatch } from "@/app/(rootLayout)/lib/hooks";
import { addBook, showBooks } from "../Redux/hotels/myBookSlice";

interface Room {
  id: number;
  type: string;
  description: string;
  occupancy: number;
  rate: number;
  currency: string;
  images: string;
  selected: boolean;
  quantity: number;
}

const MyBooking = () => {
  const user = useSelector((state: any) => state.user.user);
  const dispatch = useAppDispatch();
  const [myRoom, setMyRoom] = useState<Room[]>([]);
  const { hotelId, roomId } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/fakedb.json`);
      const data = await response.json();
      //   setHotels(data.hotels);
      const hotels = data.hotels;
      const srooms = hotels.find((hotel: any) => hotel.id == hotelId);
      const { rooms } = srooms;
      const roomBook = rooms.find((room: any) => room.id == roomId);
      setMyRoom(roomBook);
    };
    fetchData();
  }, [hotelId, roomId]);
  const route = useRouter();
  const handleBooking = () => {
    if (user.email) {
      dispatch(addBook(myRoom));
      alert("Booking Successful");
    } else {
      alert("Please login before room booking");
    }
    // route.push("/showBook");
  };
  return (
    <div className="login">
      <h2 className="text-center mb">Book Now: </h2>
      <form onSubmit={() => handleBooking()}>
        <div className="grid">
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            defaultValue={user.email}
            id="email"
            readOnly
          />
        </div>
        <div className="grid">
          <label htmlFor="type">Room Type: </label>
          <input
            type="text"
            name="type"
            placeholder="Room Type"
            defaultValue={myRoom.type}
            id="type"
            readOnly
          />
        </div>
        <div className="grid">
          <label htmlFor="price">Price: </label>
          <input
            type="text"
            name="price"
            placeholder="Price"
            defaultValue={myRoom.rate}
            id="price"
            readOnly
          />
        </div>
        <div className="">
          <button className="btn bgColor">Confirm Booking</button>
        </div>
      </form>
    </div>
  );
};

export default MyBooking;

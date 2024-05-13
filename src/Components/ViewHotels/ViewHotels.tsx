"use client";

import { useParams, useRouter } from "next/navigation";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import "../../Components/Home/home.css";
import "../Shared/Navbar/Navbar.css";
import Image from "next/image";

interface Room {
  id: number;
  type: string;
  description: string;
  occupancy: number;
  rate: number;
  currency: string;
  images: string;
}

const ViewHotels = () => {
  const router = useRouter();
  const { roomId } = useParams();
  const [totalRooms, setTotalRooms] = useState<Room[]>([]);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`/fakedb.json`);
      const data = await response.json();
      //   setHotels(data.hotels);
      const hotels = data.hotels;
      const srooms = hotels.filter((room: any) => room.id == roomId);
      const { rooms } = srooms[0];
      setTotalRooms(rooms);
      //   console.log(rooms);
      //   console.log(totalRooms);
    };

    fetchData();
  }, [roomId]);
  const handleBook = (id: number) => {
    // console.log(room);
    router.push(`/bookform/${roomId}/${id}`);
  };
  return (
    <>
      <h1 style={{ margin: "20px" }}>My Awesome Website</h1>
      {totalRooms?.length > 0 ? ( // Ensure data is available before rendering
        <div className="grid">
          {/* <div className="hotel-card width"> */}
          {totalRooms?.map((room) => (
            <div
              key={room.id}
              className="hotel-card"
              style={{ width: "300px", height: "500px", marginBottom: "20px" }}
            >
              <Image
                loader={() => room.images}
                src={room.images}
                alt="Room"
                width={0}
                height={0}
                className="img"
                style={{
                  width: "300px",
                  height: "300px",
                  // borderRadius: "20px",
                }}
              />
              <h3>Type: {room.type}</h3>
              <p>About room: {room.description}</p>
              <p>Occupancy: {room.occupancy}</p>
              <p style={{ marginBottom: "15px" }}>
                Price per night: {room.rate}
                {room.currency}
              </p>
              {/* ... (Render other hotel details like room info) */}
              <button
                onClick={() => handleBook(room.id)}
                className="btn"
                // style={{ marginBottom: "10px" }}
              >
                Book Now
              </button>
            </div>
          ))}
          {/* </div> */}
        </div>
      ) : (
        <p>Loading hotels...</p> // Display loading state
      )}
    </>
  );
};

export default ViewHotels;

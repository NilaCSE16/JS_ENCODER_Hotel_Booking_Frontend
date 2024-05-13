"use client";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import "./home.css";
import "../Shared/Navbar/Navbar.css";
import Image from "next/image";

interface Hotel {
  id: number;
  name: string;
  location: {
    city: string;
    state: string;
    country: string;
  };
  stars: number;
  image: string;
  rooms: {
    id: number;
    type: string;
    description: string;
    occupancy: number;
    rate: number;
    currency: string;
    images: string;
  };
}

const Home = () => {
  const [hotels, setHotels] = useState<Hotel[]>([]);
  const searchParams = useSearchParams();
  // console.log(hotels);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/fakedb.json");
      const data = await response.json();
      setHotels(data.hotels);
    };

    fetchData();
  }, []);
  const router = useRouter();
  const handleView = (id: number) => {
    router.push(`/rooms/${id}`);
  };
  return (
    <div>
      <h1 style={{ margin: "20px", textAlign: "center" }}>Hotels Collection</h1>
      <div className="grid">
        {/* <div className="hotel-card width"> */}
        {hotels.map((hotel: any) => (
          <div
            key={hotel.id}
            className="hotel-card"
            style={{ width: "300px", height: "450px" }}
          >
            <Image
              loader={() => hotel.image}
              src={hotel.image}
              alt={hotel.name}
              width={0}
              height={0}
              className="img"
              style={{
                width: "300px",
                height: "300px",
                // borderRadius: "20px",
              }}
            />
            <h3>{hotel.name}</h3>
            <p>
              {hotel.location.city}, {hotel.location.state},{" "}
              {hotel.location.country}
            </p>
            <span className="stars">
              Review: {hotel.stars}
              {/* {Array(hotel.stars)
                  .fill(1)
                  .map((_, index) => (
                    <i key={index} className="fas fa-star"></i>
                  ))} */}
            </span>
            <br />
            {/* ... (Render other hotel details like room info) */}
            <button
              onClick={() => handleView(hotel.id)}
              className="btn"
              style={{ marginTop: "15px" }}
            >
              View Rooms
            </button>
          </div>
        ))}
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;

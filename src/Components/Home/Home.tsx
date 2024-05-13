"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import "./home.css";
import "../Shared/Navbar/Navbar.css";

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
  const [hotels, setHotels] = useState<Hotel>({
    id: 0,
    name: "",
    location: {
      city: "",
      state: "",
      country: "",
    },
    stars: 0,
    image: "",
    rooms: {
      id: 0,
      type: "",
      description: "",
      occupancy: 0,
      rate: 0,
      currency: "",
      images: "",
    },
  });
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
      {hotels.length > 0 ? ( // Ensure data is available before rendering
        <div className="grid">
          {/* <div className="hotel-card width"> */}
          {hotels.map((hotel: any) => (
            <div
              key={hotel.id}
              className="hotel-card"
              style={{ width: "300px", height: "450px" }}
            >
              <img
                src={hotel.image}
                alt={hotel.name}
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
      ) : (
        <p>Loading hotels...</p> // Display loading state
      )}
    </div>
  );
};

export default Home;

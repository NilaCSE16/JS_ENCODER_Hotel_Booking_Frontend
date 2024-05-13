"use client";

import React, { useEffect } from "react";
import "./ShowBook.css";
import { useSelector } from "react-redux";
import { useAppDispatch } from "@/app/(rootLayout)/lib/hooks";
import { deleteBook, showBooks } from "../Redux/hotels/myBookSlice";

const ShowBook = () => {
  const rooms = useSelector((state: any) => state.rooms.rooms);
  const dispatch = useAppDispatch();
  const handleDelete = (id: number) => {
    dispatch(deleteBook(id));
    alert("Successfully Deleted");
  };
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Bookings</h1>
      <table className="table-auto">
        <thead>
          <tr className="table-border">
            <th>Room Id</th>
            <th>Room Type</th>
            <th>Price per night</th>
            <th>Occupance</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rooms?.map(
            (room: any, index: any) =>
              index > 0 && (
                <tr key={room.id}>
                  <td>{room.id}</td>
                  <td>{room.type}</td>
                  <td>
                    {room.rate}
                    {room.currency}
                  </td>
                  <td>{room.occupancy}</td>
                  <td>
                    <button onClick={() => handleDelete(room.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBook;

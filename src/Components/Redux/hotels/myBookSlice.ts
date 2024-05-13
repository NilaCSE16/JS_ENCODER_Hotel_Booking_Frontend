import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import { WritableDraft } from "immer";

// type Hotels = {
//   id: number;
//   name: string;
//   location: {
//     city: string;
//     state: string;
//     country: string;
//   };
//   stars: number;
//   image: string;
//   rooms: Rooms;
// };

type Rooms = {
  id: number;
  type: string;
  description: string;
  occupancy: number;
  rate: number;
  currency: string;
  images: string;
};

interface IHotelsState {
  rooms: Rooms[];
}
// type Response = WritableDraft<Hotel[]>;

const initialState: IHotelsState = {
  rooms: [
    {
      id: 0,
      type: "",
      description: "",
      occupancy: 0,
      rate: 0,
      currency: "",
      images: "",
    },
  ],
};

// export const fetchHotels = createAsyncThunk("books/fetchBooks", async () => {
//   const res = await fetch("../../../../public/fakedb.json");
//   // console.log(res)
//   return res;
// });

const hotelsSlice = createSlice({
  name: "rooms",
  initialState: initialState,
  reducers: {
    showBooks: (state) => state,
    addBook: (state, action) => {
      state.rooms.push(action.payload);
    },
    // updateBook: (state, action) => {
    //   const { id, title, author } = action.payload;
    //   const isBookExist = state.rooms.filter((room) => room.id === id);
    //   //   console.log(isBookExist);
    //   if (isBookExist) {
    //     isBookExist.title = title;
    //     isBookExist.author = author;
    //   }
    // },
    deleteBook: (state, action) => {
      const id = action.payload;
      state.rooms = state.rooms.filter((room) => room.id !== id);
    },
  },
});
export const { showBooks, addBook, deleteBook } = hotelsSlice.actions;
export default hotelsSlice.reducer;

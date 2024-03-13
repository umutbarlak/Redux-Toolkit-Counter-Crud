import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";

const initialState = {
  tasks: [
    {
      title: "Headar yapılacak",
      author: "memo",
      assigned_to: "sedat",
      end_date: "2024-03-02",
      id: "d4b2915f-73d1-45f2-a9cb-68f81b1615af",
    },
    {
      title: "Footer yapılacak",
      author: "hayri",
      assigned_to: "kenan",
      end_date: "2024-03-23",
      id: "a7cfae6a-2630-44b7-8971-857ab820456e",
    },
    {
      title: "Aside yapılacak",
      author: "caner",
      assigned_to: "sabri",
      end_date: "2024-03-29",
      id: "a7cfae6a-2630-44b7-8971-857ab820256e",
    },
  ],
  isError: false,
  isLoading: false,
};

const crudSlice = createSlice({
  name: "crud",
  initialState,
  reducers: {
    addTask: (state, action) => {
      //id ekle
      action.payload.id = v4();
      //veriyi tasks e ekle
      state.tasks.push(action.payload);
    },
    deleteTask: (state, action) => {
      const index = state.tasks.findIndex((task) => task.id === action.payload);

      state.tasks.splice(index, 1);

      //   const filtred = state.tasks.filter((item) => item.id !== action.payload);

      //   state.tasks = filtred;
    },
    editTask: (state, action) => {
      const index = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );

      state.tasks.splice(index, 1, action.payload);
    },
  },
});

export const { addTask, deleteTask, editTask } = crudSlice.actions;

export default crudSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
    name: "data",
    initialState: {
        data: []
    },

    reducers: {
        setData: (state, action) => {
            state.data = action.payload
        },
        addUser: (state, action) => {
           state.data.push(action.payload)
        },
        removeUsers: (state, action) => {
            state.data = state.data.filter((user) => user.id !== action.payload)
        }
    }
});

export const { setData, addUser, removeUsers } = dataSlice.actions;
export default dataSlice.reducer
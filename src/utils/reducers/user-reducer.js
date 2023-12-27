import {createSlice} from "@reduxjs/toolkit"


const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
        userEvents: null
    },
    reducers: {
        setReduxUser: (state, action) => {
            state.userData = action.payload;
        },
        removeReduxUser: (state, action) => {
            state.userData = null;
            state.userEvents = null;
            localStorage.clear();
        },
        setUserEvents: (state, action) => {
            state.userEvents = action.payload;
        }
    }
})


export const {setReduxUser, removeReduxUser, setUserEvents} = userSlice.actions;

export default userSlice.reducer;
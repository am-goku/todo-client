import {createSlice} from "@reduxjs/toolkit"

const userSlice = createSlice({
    name: "user",
    initialState: {
        userData: null,
        userEvents: [],
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
        },
        updateUserEvents: (state, action) => {
          state.userEvents.push(action.payload);
        },

        deleteOneEvent: (state, action) => {
          const eventId = action.payload;
          const events = state.userEvents;

          const newEvents = events.filter((event) => {
            return event?._id !== eventId;
          })

          state.userEvents = newEvents;
          
        }
    }
})


export const {setReduxUser, removeReduxUser, setUserEvents, updateUserEvents, deleteOneEvent} = userSlice.actions;

export default userSlice.reducer;
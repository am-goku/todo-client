import {createSlice} from "@reduxjs/toolkit"
import { getUser } from "../../services/apis/user-methods";


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



export const authenticateUser = () => async (dispatch) => {
  return new Promise((resolve, reject) => {
    getUser()
      .then((res) => {
        dispatch(setReduxUser(res));
        resolve(true);
      })
      .catch((err) => {
        dispatch(removeReduxUser());
        reject(false);
      });
  });
};


export const {setReduxUser, removeReduxUser, setUserEvents} = userSlice.actions;

export default userSlice.reducer;
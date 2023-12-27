import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { persistStore, persistReducer } from "redux-persist";
import userReducer from "./reducers/user-reducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [],
  stateReconciler: autoMergeLevel2,
};


const rootReducers = combineReducers({
    user: userReducer,
});


const persistedReducer = persistReducer(persistConfig, rootReducers);


export const store = configureStore({
    reducer: persistedReducer
});

export const persistor = persistStore(store)


import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import appRouter from "./services/router";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./utils/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <RouterProvider router={appRouter}>
        <App />
      </RouterProvider>
    </PersistGate>
  </Provider>
);

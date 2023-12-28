import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider } from "react-router-dom";
import appRouter from "./services/router";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./utils/store";
import { Provider } from "react-redux";
import authenticate from "./middleware/function/Authenticator";
import { authenticateUser } from "./utils/reducers/user-reducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
Promise.all([authenticateUser()]).then(() => {
  root.render(
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={appRouter}>
          <App />
        </RouterProvider>
      </PersistGate>
    </Provider>
  );
})

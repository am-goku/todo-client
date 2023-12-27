import {createBrowserRouter} from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import SingleEvent from "../pages/SingleEvent";
import Login from "../pages/Login";
import Signup from "../pages/Signup";


const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },

            {
                path: "/event/:id",
                element: <SingleEvent />
            }
        ]
    },

    {
        path: "/login",
        element: <Login />
    }, 

    {
        path: "/signup",
        element: <Signup />
    }
]);


export default appRouter;
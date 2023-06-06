import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/HomePage/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
              path: "/",
              element: <Home></Home>,
            },
            {
              path: "/home",
              element: <Home></Home>,
            },
          ],
    }
])

export default router
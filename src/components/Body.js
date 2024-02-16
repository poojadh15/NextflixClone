import Login from "./Login";
import Browse from "./Browse";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
const Body = () => {
    const appRouting = createBrowserRouter([
        {
            path:"/",
            element: <Login />
        },
        {
            path:"/browse",
            element: <Browse />
        },
    ])
    return <>
    <RouterProvider router={appRouting}/>
    </>
}
export default Body;
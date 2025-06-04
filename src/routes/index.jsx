import { createBrowserRouter } from "react-router-dom";

import { Login } from "../containers/Login";
import { Home } from "../containers/home";
import { Register } from "../containers/Register";

export const router = createBrowserRouter([

{
    path:'/',
    element: <Home />,
},

{
    path:'/login',
    element: <Login />,
},

{
    path:'/cadastro',
    element: <Register />,
    

},

])
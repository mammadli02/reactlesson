// import AdminRoot from "../pages/AdminRoot";
// import Basket from "../pages/Basket";
// import Home from "../pages/Home";
// import Login from "../pages/Login";
// import MainRoot from "../pages/MainRoot";
// import Products from "../pages/Products";
// import Register from "../pages/Register";
// import Users from "../pages/Users";

// export const ROUTES=[
//     {
//         path:'/',
//         element:<MainRoot/>,
//         children:[
//             {
//             path:'/',
//             element:<Home/>
//         },
//         {
// path:'/products',
// element:<Products/>
//         },
//     ],

//     },

// {
// path:'/admin',
// element:<AdminRoot/>,
// children:[
//     {
//         path:'/basket',
//         element:<Basket/>
//     },{
//         path: '/login',
//         element:<Login/>
//     },{
//         path:'/register',
//         element:<Register/>
//     },{
//         path:'/users',
//         element:<Users/>
//     }
// ]
// }
// ]

import Home from "../pages/Home";
import Login from "../pages/Login";
import MainRoot from "../pages/MainRoot";
import Register from "../pages/Register";
import Users from "../pages/Users";


export const ROUTES = [
    {
        path: '',
        element: <MainRoot/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/users',
                element: <Users/>
            }
        ]
    }
]
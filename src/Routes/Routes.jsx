import { createBrowserRouter } from "react-router-dom";
import * as RoutePath from './RoutePath.js' 
import Main from "../Layouts/Main.jsx";
import Home from "../Pages/Home/Home/Home.jsx";
import Menu from "../Pages/Menu/Menu/Menu.jsx";
import OrderPage from "../Pages/Order/OrderPage/OrderPage.jsx";
import Login from "../Pages/Login/Login.jsx";
import SignUp from "../Pages/SignUp/SignUp.jsx";
import Dashboard from "../Layouts/Dashboard.jsx";
import MyCart from "../Pages/Dashboard/MyCart/MyCart.jsx";
import PrivateRoute from "./PrivateRoute.jsx";


export const route= createBrowserRouter([
	{
		path:RoutePath.DASHBOARD,
		element:<Main/>,
		children:[
			{
				path:RoutePath.DASHBOARD,
				element:<Home/>,
			},
			{
				path:RoutePath.MENU,
				element:<Menu/>
			},
			{  
				path:RoutePath.SHOP,
				element:<OrderPage/>

			},
			{
				path:RoutePath.LOGIN,
				element:<Login/>
			},
			{
				path:RoutePath.SIGNUP,
				element:<SignUp/>
			},
			

		]
	},
	{
		path:RoutePath.CART,
		element:<PrivateRoute><Dashboard/></PrivateRoute>,
		children:[
			{
				path:RoutePath.MYCART,
				element:<MyCart/>
			}
		]
	}
])


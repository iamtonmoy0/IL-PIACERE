import { createBrowserRouter } from "react-router-dom";
import * as RoutePath from './RoutePath.js' 
import Main from "../Layouts/Main.jsx";
import Home from "../Pages/Home/Home/Home.jsx";


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
				
			}
		]
	}
])

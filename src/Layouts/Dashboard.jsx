import { NavLink, Outlet } from "react-router-dom";
import * as RoutePath from '../Routes/RoutePath'
import userHomeImg from '../assets/dashboard/userHome.gif'
import reservationImg from '../assets/dashboard/reservation.gif'
import paymentImg from '../assets/dashboard/payment.gif'
import cartImg from '../assets/dashboard/cart.gif'
import homeImg from '../assets/dashboard/home.gif'
import menuImg from '../assets/dashboard/menu.gif'
import orderImg from '../assets/dashboard/order.gif'
import useCart from "../hooks/useCart";
import {  FaWallet, FaHome, FaUtensils, FaBook, FaUsers } from 'react-icons/fa';
// import useAdmin from "../hooks/useAdmin";



const Dashboard = () => {
	const [cart]=useCart();

    //TODO : load data from server based on admin role
    const isAdmin =false;
    // const [isAdmin]=useAdmin();
    // console.log(isAdmin)
	return (
		<div className="drawer drawer-mobile lg:drawer-open ">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button  lg:hidden" >Open drawer</label>

            </div>
            <div className="drawer-side  w-80" style={{backgroundImage:"url('https://i.ibb.co/3FMYn6c/slide4.jpg')",backgroundSize:"fit"}}>
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu  bg-slate-950 bg-opacity-60 h-full p-4 w-80 text-white hover:text-red-300">
                    {
                        isAdmin? <>  
                         <li><NavLink to="/dashboard/home"><FaHome></FaHome> Admin Home</NavLink></li>
                            <li><NavLink to={RoutePath.ADDITEM}> <FaUtensils></FaUtensils> Add Items</NavLink></li>
                            <li><NavLink to={RoutePath.MANAGE}><FaWallet></FaWallet> Manage Items</NavLink></li>
                            <li><NavLink to="/dashboard/history"><FaBook></FaBook> Manage Bookings</NavLink></li>
                            <li><NavLink to={RoutePath.ALLUSERS}><FaUsers></FaUsers> All Users</NavLink></li>
                            
                        </> 
                        :
                        <>   <li><NavLink > <img src={userHomeImg}  className="h-10" alt="" />User Home</NavLink></li>
                    <li><NavLink > <img src={reservationImg}  className="h-10" alt="" />Reservations</NavLink></li>
                    <li><NavLink > <img src={paymentImg}  className="h-10" alt="" />Payment History</NavLink></li>
                    <li>
                        <NavLink to={RoutePath.MYCART} ><img src={cartImg}  className="h-10" alt="" /> My Cart
                            <span className="badge inl badge-secondary">+{cart.length}</span>
                        </NavLink>

                    </li>
		
                    <li className="mt-10"><NavLink to={RoutePath.DASHBOARD}> <img src={homeImg}  className="h-10 " alt="" /> Home</NavLink> </li>
                    <li><NavLink to={RoutePath.MENU}><img src={menuImg}  className="h-10" alt="" />Menu</NavLink></li>
                    <li><NavLink  to={RoutePath.SHOP}><img src={orderImg}  className="h-12" alt="" /> Order</NavLink></li></>
                    }

                 
                </ul>

            </div>
        </div>
	);
}

export default Dashboard;

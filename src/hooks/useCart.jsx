import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from './useAuth'
const useCart = () => {
	const {user}=useAuth()
	// const token = localStorage.getItem('access-token')
	const [axiosSecure]=useAxiosSecure();
	const {refetch,data: cart = []}=useQuery({
		queryKey:['cart',user?.email],
		queryFn:async ()=>{
			const res = await axiosSecure(`/carts?email=${user.email}`) //axios secure form useAxiosSecure hook
			return res.data;
		},
	})
	return [cart,refetch]
}

export default useCart;

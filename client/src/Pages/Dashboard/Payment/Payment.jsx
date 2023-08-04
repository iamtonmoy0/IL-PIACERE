import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckOut from "./CheckOut";
import useCart from "../../../hooks/useCart";

//TODO: provide stripe publish key

const stripePromise= loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const Payment = () => {
	const [cart]=useCart();
	const total=cart.reduce((sum,item)=>sum +item.price,0)
	const price = parseFloat(total.toFixed(2))
	// console.log(total)
	return (
		<div  className="w-9/12">
		<Helmet>
			<title>Payment</title>
		</Helmet>
		<SectionTitle heading={'Pay Here'}/>
		<Elements stripe={stripePromise}>
			<CheckOut cart={cart} price={price} />
		</Elements>
			
		</div>
	);
}

export default Payment;


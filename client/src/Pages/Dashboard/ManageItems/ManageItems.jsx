import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const ManageItems = () => {
	return (
		<div className="w-full mx-auto">
		<Helmet>
			<title>Manage Item</title>
		</Helmet>
		<SectionTitle heading={'Manage Item Here'} subHeading={`Total Item `} />
			
		</div>
	);
}

export default ManageItems;

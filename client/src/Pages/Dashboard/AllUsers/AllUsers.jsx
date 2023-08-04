import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { FaTrashAlt, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
	const {data:users =[],refetch} =useQuery(['users'],async()=>{
		const res = await fetch('https://il-piacere-server-o976c9cqm-iamtonmoy0.vercel.app/users')
		return res.json();
	})

	//delete user function
	const handleDelete=(user)=>{
		console.log(user)
		
	}
	//make admin function 
	const handleMakeAdmin=(user)=>{
	fetch(`https://il-piacere-server-o976c9cqm-iamtonmoy0.vercel.app/users/admin/${user._id}`,{
		method:'PATCH'
	})
	.then(res=>res.json())
	.then(data=>{
		if(data.modifiedCount){
			Swal.fire({
			position: 'top-end',
			icon: 'success',
			title: `${user.name} Is Promoted To Admin !`,
			showConfirmButton: false,
			timer: 1500
	})
		}
	})
	}
	return (
		<>
		<Helmet>
			<title>All-Users</title>
		</Helmet>
		<h3 className="text-3xl font-semibold my-4">Total Users: {users.length}</h3>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-[600px]">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{ user.role === 'admin' ? 'Admin' :
                                    <button onClick={() => handleMakeAdmin(user)} className="btn btn-ghost bg-lime-700  text-white"><FaUserShield></FaUserShield></button> 
                                    }</td>
                                <td><button onClick={() => handleDelete(user)} className="btn btn-ghost bg-red-600  text-white"><FaTrashAlt></FaTrashAlt></button></td>
                            </tr>)
                        }
                        
                        
                    </tbody>
                </table>
            </div>
		</>
	);
}

export default AllUsers;

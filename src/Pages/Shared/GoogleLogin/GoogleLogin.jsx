import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";


const GoogleLogin = () => {
    const { googleSignIn ,setLoading} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedInUser = result.user;
		if(!loggedInUser) return setLoading(false)
                const saveUser = { name: loggedInUser.displayName, email: loggedInUser.email }
                fetch('https://il-piacere-server.vercel.app/users', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(saveUser)
                })
                    .then(res => res.json())
                    .then(() => {
			navigate(from, { replace: true });
			setLoading(false)
			
		})
            })
	.catch(error=>{
		if(error) return setLoading(false)
          });
    }

    return (
        <div>
            <div className="divider"></div>
            <div className="w-full text-center my-4">
                <button onClick={handleGoogleSignIn} className="btn btn-circle btn-outline hover:bg-red-400">
                    <FaGoogle></FaGoogle>
                </button>
            </div>
        </div>
    );
};

export default GoogleLogin;
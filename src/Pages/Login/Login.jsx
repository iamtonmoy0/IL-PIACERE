import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../context/AuthProvider";
import { Link } from "react-router-dom";
import loginImg from '../../assets/contact/banner.jpg';
import { SIGNUP } from "../../Routes/RoutePath";
import Swal from "sweetalert2";
import Loading from "../Loading/Loading";

const Login = () => {
	// submit button disable state
	const [disable,setDisable]=useState(true);
  const {logIn,loading,setLoading}=useContext(AuthContext); //auth context
  
	useEffect(()=>{
    
		loadCaptchaEnginge(6)
	},[])
// captcha
const handleCaptcha=(e)=>{
  const captcha=e.target.value;
  
  //checking captcha validation 
  if(validateCaptcha(captcha)) return setDisable(false)
  else return Swal.fire('Wrong captcha.Try again') ;
  
  
}
// handle log in
const handleLogin=(e)=>{
  e.preventDefault();
  const form = e.target;
  const email = form.email.value;
  const pass = form.password.value;
  console.log(email,pass)
  logIn(email,pass)
    .then(()=>{
       Swal.fire({
                    title: 'User Login Successful.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                      },
                      hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                      }
                    });
                    setLoading(false);
                  })
                  .then(error=>{
                    alert(error.message)
    })
    
	}
  if(loading) return <Loading/>;
	return (
		<>
		<Helmet>
			<title>Login</title>
		</Helmet>
			

			<div className="relative">
      <img
        src={loginImg}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 rounded-full">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="flex flex-col items-center justify-between xl:flex-row">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                Enjoy The Best Meal <br className="hidden md:block" />
                Of Town
                <span className="text-teal-accent-400">!!</span>
              </h2>
              <p className="max-w-xl mb-4 text-base text-gray-400 md:text-lg">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ratione, excepturi.
              </p>
              <Link   to={SIGNUP}
               className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-teal-400 hover:text-teal-accent-700"
              >
                New To This Site ,Register here 
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </Link>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-5/12">
              <div className="bg-gray-50  rounded-md shadow-2xl p-7 sm:p-10">
                <h3 className="mb-4 text-xl font-semibold sm:text-center sm:mb-6 sm:text-2xl">
                  Sign in for order
                </h3>
                <form onSubmit={handleLogin} >
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Email
                    </label>
                    <input
		placeholder="john.doe@example.org"
                      
                      required
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="email"
                      name="email"
                    />
                  </div>
		{/* captcha */}
		<div className="mb-1 sm:mb-2">
                    <label
                      className="inline-block mb-1 font-medium"
                    >
                      <LoadCanvasTemplate />
                    </label>
                    <input
                      onBlur={handleCaptcha}
                      type="text"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="captcha"
                      name="captcha"
                    />
		
                  </div>
		
                  <div className="mb-1 sm:mb-2">
                    <label
                      htmlFor="email"
                      className="inline-block mb-1 font-medium"
                    >
                      Password
                    </label>
                    <input
                      required
                      type="password"
                      className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                      id="password"
                      name="password"
                    />
                  </div>
                  <div className="mt-4 mb-2 sm:mb-4">
                    <button disabled={disable}
                      type="submit"
                      className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-purple-400 hover:bg-purple-700 focus:shadow-outline focus:outline-none"
                    >
                      Login
                    </button>
                  </div>
                  <p className="text-xs text-gray-600 sm:text-sm">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

		</>
	);
}

export default Login;

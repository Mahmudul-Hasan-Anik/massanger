import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import Shadow from "../../components/Shadow";

const Login = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')

  const handleStatusChange = () => {
      setShow(!show)
  };

  // onChange Value
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
    setPasswordError('')
  }

    // validation

    const handleSubmit = (e) => {
      e.preventDefault()
      
      if (!email) {
        setEmailError("Email is required.");
      } else {
        if (!email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)) {
          setEmailError("Please entered a valid email address");
        }
      }

      if(!password){
        setPasswordError('Password is Required *')
      }else{
        if(!password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/)){
          setPasswordError("Please entered a valid password")
        }
      }
    }
  
  return (
    <div className=" relative bg-[#0E1628] w-full">
      <Shadow/>
    
    <div className=" flex flex-col  w-full justify-center h-[100vh] items-center">
    <div className=" text-center mb-7">
      <h1 className=" text-white text-3xl font-bold">Sign in</h1>
      <p className=" text-white">Sign in to continue.</p>
    </div>

    <div className="border-2 border-[#1f2a43] p-9 shadow-lg max-h-96 backdrop-blur-sm bg-[#132C49 z-20 rounded-md">  
        <form className=" w-full">
        <div>
                    
            <label for="email-address-icon" className="block mb-2 text-sm font-medium  dark:text-gray-300 w-96 text-white">Your Email</label>

            <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <FiMail/>
            </div>

            <input onChange={handleEmail} type="text" className={inputStyle} placeholder="name@gmail.com"/>

            </div>
            {emailError && <p className=" text-red-500 text-sm font-bold">{emailError}</p>}

                <label for="email-address-icon" className="block mb-2 mt-2 text-sm font-medium text-white dark:text-gray-300">Your Password</label>

            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <AiOutlineLock/>
                </div>

                <input onChange={handlePassword} className={inputStyle} placeholder="password"
                type={show == true ? "text" : "password"}
                />

                <p
                className=" absolute cursor-pointer top-3 right-4"
                onClick={handleStatusChange}
                >
                    {show == true ? <BsEyeFill /> : <BsEyeSlashFill />}
                </p>

                </div>
                {passwordError && <p className=" text-red-500 text-sm font-bold">{passwordError}</p>}

            </div>


                <button onClick={handleSubmit} className=" self-cente w-96 p-2 bg-indigo-700 rounded-lg font-nonito font-normal text-[16px] text-white mt-4">
                    Login to Continue
                </button>
        </form>
        <p className="w-3/5 m-auto text-center mt-4 text-sm text-custome-blue font-nonito font-semibold text-white">
          Don’t have an account ?
          <Link to="/registration" className=" text-yellow-300 ml-2">
            Sign up
          </Link>
        </p>
    </div>
    </div> 
    </div>
  );
};

export default Login;


const inputStyle = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
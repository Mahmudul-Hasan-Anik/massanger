import React, { useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { BsEyeFill, BsEyeSlashFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { AiOutlineLock } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import Shadow from "../../components/Shadow";
import { toast } from 'react-toastify';

const Registration = () => {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('')
  const [nameError, setNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [success, setSuccess] = useState('')
  const [failed, setFailed] = useState('')

  const navigation = useNavigate()

// firebase
const auth = getAuth();

  const handleStatusChange = () => {
    setShow(!show)
  };

  // onChange Value
  const handleEmail = (e) => {
    setEmail(e.target.value)
    setEmailError('')
  }

  const handleName = (e)=>{
    setName(e.target.value)
    setNameError('')
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
    setPasswordError('')
  }

  // validation && Registration
  const handleSubmit = (e) => {
    e.preventDefault()

    const emailRex = email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const nameRex = name.match(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/);
    const passwordRex = password.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}/);

      if (!email) {
        setEmailError("Email is required.");
      } else {
        if (!emailRex) {
          setEmailError("Please entered a valid email address");
        }
      }
  
      if(!password){
        setPasswordError('Password is Required *')
      }else{
        if(!passwordRex){
          setPasswordError("Please entered a valid password")
        }
      }
  
      if(!name){
        setNameError('Name is Required *')
      }else{
        if(!nameRex){
          setNameError("Please entered a valid name")
        }
      }
    
// Registration
      if(email && password && name && emailRex && nameRex && passwordRex ){
          createUserWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
          })
          .then(()=>{
            const resolver = new Promise(resolve => setTimeout(resolve, 3000));
            toast.promise(
              resolver,
                {
                  pending: 'Loading...',
                  success: 'Registration Successful 👌',
                  error: 'Registration Failed 🤯'
                }
            ).then(()=>{
              setTimeout(()=>{
                navigation('/login')
              },2000)
            })
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            if(errorMessage.includes('auth/email-already-in-use')){
              toast.error('Registration failed')
            }
          });
        } 
  }

  return (
    <div className=" relative bg-[#0E1628] w-full">
      <Shadow/>
    <div className=" flex flex-col w-full justify-center h-[100vh] items-center">
    <div className=" text-center mb-7">
      <h1 className=" text-white text-3xl font-bold">Register</h1>
      <p className=" text-white">Get your free account now.</p>
    </div>

    <div className="border-2 border-[#1f2a43] p-9 shadow-lg max-h-[600px] backdrop-blur-sm bg-[#132C49 z-20 rounded-md">  
        <form className=" w-full">
        <div>
{/* email */}
            <label for="email-address-icon" className="block mb-2 text-sm font-medium  dark:text-gray-300 w-96 text-white">Your Email</label>

            <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <FiMail/>
            </div>

            <input onChange={handleEmail} type="text" className={inputStyle} placeholder="name@gmail.com"/>

            </div>
            {emailError && <p className=" text-red-500 text-sm font-bold">{emailError}</p>}
{/* username */}
            <label for="email-address-icon" className="block mb-2 mt-2 text-sm font-medium  dark:text-gray-300 w-96 text-white">Your Name</label>

            <div className="relative">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <BiUserCircle/>
            </div>

            <input onChange={handleName} type="text" className={inputStyle} placeholder="user name"/>
            </div>
            {nameError && <p className=" text-red-500 text-sm font-bold">{nameError}</p>}

{/* password */}
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
                    Register
                </button>
        </form>
        <p className="w-3/5 m-auto text-center mt-4 text-sm text-custome-blue font-nonito font-semibold text-white">
          Don’t have an account ?
          <Link to="/login" className=" text-yellow-300 ml-2">
            Login
          </Link>
        </p>
    </div>
    </div> 
    </div>
  );
};

export default Registration;


const inputStyle = "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-96 pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
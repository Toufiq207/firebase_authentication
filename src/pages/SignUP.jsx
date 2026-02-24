import React, { useState } from 'react'

// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import {app} from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider  } from "firebase/auth";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { Navigate, useNavigate } from 'react-router-dom';
const SignUP = () => {
    // const auth = getAuth();
    const auth = getAuth();
    let [email,setEmail]=useState("")
    let [password,setPassword]=useState("")

     const provider = new GoogleAuthProvider();
let nevigete=useNavigate()
let handleEmail=(e)=>{
    setEmail(e.target.value)

}

let handlePassword=(e)=>{
    setPassword(e.target.value)
}





let handleSignUP=()=>{
 if(!email){
   toast.error('please Enter your Email');
  
}else if(!password){
 toast.error('please Enter your Password');
}else{
     createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
toast.success("Registration done");
setTimeout(()=>{
  nevigete('/login')
},2000)
   
  })
  .catch((error) => {
    // const errorCode = error.code;
    // console.log(errorCode);
    toast.error("Registration fail")
    // ..
  });
}
    
}



 const handleGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log("User Info:", user);
      
      // SignUp সফল হলে Homepage এ redirect
     nevigete("/"); // "/" হলো homepage route
    } catch (error) {
      console.error("Google Sign-Up Error:", error);
      alert(error.message);
    }
  };
  return (
    <div>This is SignUP page
          <ToastContainer
          position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

          
          />
        <div>
          <label className='text-base text-scendary font-dm font-bold ' htmlFor="email">Email address</label><br />
          <input onChange={handleEmail}  className='py-6 mb-6 w-[508px]  border-b border-[#F0F0F0] ' id='email' type="email" placeholder='company@domain.com' /><br />
        </div>
        <div>
          <label className='text-base text-scendary font-dm font-bold ' htmlFor="password">Password</label><br />
          <input  onChange={handlePassword}   className='py-6 mb-6 w-[508px]  border-b border-[#F0F0F0] ' id='password' type="password" placeholder='.....' />
        </div>

        <button onClick={handleSignUP}  className="text-amber-50 hover:text-black 
bg-black hover:bg-amber-50 
border border-transparent hover:border-black 
py-2 px-4 rounded-2xl">
          SignUP
        </button>

      
      <p>or</p>
      <button onClick={handleGoogleSignUp}
 className="text-amber-50 hover:text-black 
bg-black hover:bg-amber-50 
border border-transparent hover:border-black 
py-2 px-4 rounded-2xl">
          SginUp With Google
        </button>
    </div>
  )
}

export default SignUP
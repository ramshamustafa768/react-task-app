import React from 'react'

import { useState } from "react";

const Login = ({handleLogin}) =>{
  const [showPassword, setShowPassword] = useState(false);


const SubmitHandler = (e) => {
    e.preventDefault()
    console.log(email);
    console.log(password);
   handleLogin (email,password)
    setEmail('')
    setpassword('')
  
}

const [email, setEmail] = useState('')
const [password, setpassword] = useState('')

//   return (
//             <div className="min-h-screen flex items-center justify-center  bg-linear-to-br from-[#1f0a18] via-[#42132d] to-[#09090b] px-5">

//       {/* Main 3D Card */}
//       <div className="w-full max-w-md">

//         {/* Back 3D Layer */}
//         <div className="absolute w-[90%] max-w-md h-500px bg-purple-600/20 rounded-3xl blur-2xl"></div>

//         {/* Login Card */}


//         <form   onSubmit={(e)=>{
//             SubmitHandler(e)
//         }}   className="relative bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]">

//           {/* 3D Icon */}
//           <div className="flex justify-center mb-6">

//             <div className="w-20 h-20 rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_15px_30px_rgba(168,85,247,0.4)] rotate-3">

//               <div className="w-12 h-12  rounded-xl bg-white/20 border border-white/30 flex items-center justify-center">
//                 🔐   
//               </div>

//             </div>

//           </div>

//           {/* Heading */}
//           <h1 className="text-3xl font-bold text-white text-center">
//             Welcome Back
//           </h1>

//           <p className="text-gray-400 text-center mt-2 mb-8">
//             Login to your account
//           <
//           {/* Email */}
//           <div className="mb-5">

//             <label className="block text-gray-300 text-sm mb-2">
//               Email Address
//             </label>

//             <input 
//              value={email}
//                 onChange={(e)=>{
//                   setEmail(e.target.value)
//                 }}
//               type="email"
//               placeholder="Enter your email"
//               className="w-full px-4 py-3.5 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
//             />

//           </div>

//           {/* Password */}
//           <div className="mb-5">

//             <label className="block text-gray-300 text-sm mb-2">
//               Password
//             </label>

//             <div className="relative">

//               <input

//                 value={password}

//               onChange={(e) => {
//                 setpassword(e.target.value)
//               }}
//                 type={showPassword ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="w-full px-4 py-3.5 pr-20 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-500 outline-none transition duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30"
//               />

//               <button
//                 type="button"
//                 onClick={() => setShowPassword(!showPassword)}
//                 className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-300 hover:text-white text-sm"
//               >
//                 {showPassword ? "Hide" : "Show"}
//               </button>

//             </div>

//           </div>

//           {/* Remember / Forgot */}
//           <div className="flex justify-between items-center mb-6">

//             <label className="flex items-center gap-2 text-sm text-gray-400">
//               <input
//                 type="checkbox"
//                 className="accent-purple-500"
//               />
//               Remember me
//             </label>

//             {/* <button className="text-sm text-purple-300 hover:text-purple-200">
//               Forgot Password?
//             </button> */}

//           </div>

//           {/* Login Button */}
//           <button
//             className="w-full py-3.5 rounded-xl  from-purple-500 to-pink-500 text-white font-semibold shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(168,85,247,0.5)] active:translate-y-0 transition-all duration-300"
//           >
//             Login →
//           </button> 

//           {/* Sign Up */}

//           <p className="text-center text-gray-400 text-sm mt-7">
//             Don't have an account?

//             {/* <button className="text-purple-300 ml-2 hover:text-purple-200">
//               Sign Up
//             </button> */}
//           </p>

//         </form>
//       </div>

//     </div>
//   );
// };


return ( <div className="min-h-screen w-auto overflow-x-hidden flex items-center justify-center bg-linear-to-br from-[#1f0a18] via-[#42132d] to-[#09090b] px-3 min-[400px]:px-4 sm:px-6 py-6 sm:py-10">
   {/* Main Container */} <div className="relative w-full max-w-md sm:max-w-lg"> {/* Back 3D Layer */} 
    <div className="absolute inset-2 sm:inset-3 rounded-2xl sm:rounded-3xl bg-purple-600/20 blur-2xl"></div> {/* Login Card */}
     <form onSubmit={(e) => { SubmitHandler(e); }} className="relative w-full rounded-2xl sm:rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl p-4 min-[400px]:p-5 sm:p-7 md:p-8 shadow-[0_30px_80px_rgba(0,0,0,0.5)]" > {/* 3D Icon */} 
      <div className="flex justify-center mb-5 sm:mb-6"> 
        <div className="w-16 h-16 min-[400px]:w-18 min-[400px]:h-18 sm:w-20 sm:h-20 rounded-xl sm:rounded-2xl bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-[0_15px_30px_rgba(168,85,247,0.4)] rotate-3"> 
          <div className="w-10 h-10 min-[400px]:w-11 min-[400px]:h-11 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-white/20 border border-white/30 flex items-center justify-center text-lg sm:text-xl"> 🔐 </div> </div> </div> 
          {/* Heading */}
          
           <h1 className="text-2xl min-[400px]:text-[27px] sm:text-3xl font-bold text-white text-center leading-tight"> Welcome Back </h1> <p className="text-gray-400 text-xs min-[400px]:text-sm sm:text-base text-center mt-2 mb-6 sm:mb-8"> Login to your account </p>
           {/* Email */}
            <div className="mb-4 sm:mb-5"> <label className="block text-gray-300 text-xs min-[400px]:text-sm mb-2"> Email Address </label> <input value={email} onChange={(e) => { setEmail(e.target.value); }} type="email" placeholder="Enter your email" className="w-full min-w-0 px-3 min-[400px]:px-4 py-3 sm:py-3.5 rounded-xl bg-white/10 border border-white/20 text-white text-sm sm:text-base placeholder-gray-500 outline-none transition duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30" /> </div> {/* Password */} <div className="mb-4 sm:mb-5"> 
              <label className="block text-gray-300 text-xs min-[400px]:text-sm mb-2"> Password </label> <div className="relative"> <input value={password} onChange={(e) => { setpassword(e.target.value); }} type={showPassword ? "text" : "password"} placeholder="Enter your password" className="w-full min-w-0 px-3 min-[400px]:px-4 py-3 sm:py-3.5 pr-16 sm:pr-20 rounded-xl bg-white/10 border border-white/20 text-white text-sm sm:text-base placeholder-gray-500 outline-none transition duration-300 focus:border-purple-400 focus:ring-2 focus:ring-purple-500/30" />
               <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-purple-300 hover:text-white text-xs sm:text-sm" > {showPassword ? "Hide" : "Show"} </button> </div> </div> {/* Remember */} <div className="flex items-center justify-between mb-5 sm:mb-6"> <label className="flex items-center gap-2 text-xs sm:text-sm text-gray-400"> <input type="checkbox" className="accent-purple-500" /> 
               <span>Remember me</span> </label> </div> {/* Login Button */} <button type="submit" className="w-full py-3 sm:py-3.5 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white text-sm sm:text-base font-semibold shadow-[0_10px_30px_rgba(168,85,247,0.4)] hover:-translate-y-1 hover:shadow-[0_15px_35px_rgba(168,85,247,0.5)] active:translate-y-0 transition-all duration-300" > Login → </button> {/* Sign Up */}
                <p className="text-center text-gray-400 text-xs sm:text-sm mt-5 sm:mt-7"> Don't have an account? </p> </form> </div> </div> );
}


export default Login;
























































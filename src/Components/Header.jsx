// import React from 'react'

// export const Header = ({data,handlelogout}) => {
//   return (
//     <header className="w-full bg-linear-to-r from-[#5c1a35] via-[#7a2448] to-[#3b1028] border-b border-white/10 px-6 py-4">
//        <div className="max-w-7xl mx-auto flex items-center justify-between"> {/* User Name */}
//    <h1 className="text-2xl font-semibold text-white">  Hello, {data?.name || "Admin"} 👋 </h1> {/* Logout Button */} 
//    <button onClick={handlelogout} type="button" className="px-5 py-2.5 rounded-xl bg-linear-to-r from-purple-500 to-pink-500 text-white font-medium shadow-lg shadow-purple-500/20 hover:scale-105 active:scale-95 transition duration-200" >
//     Logout </button>
//     </div> </header>
//   )
// }

// export default Header

export const Header = ({ data, handlelogout }) => {
  return (
    <header className="w-full bg-linear-to-r from-[#5c1a35] via-[#7a2448] to-[#3b1028] border-b border-white/10 px-6 py-4">
      
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* User Name */}
        <h1 className="text-2xl font-semibold text-white">
          Hello, {data?.name || "Admin"} 👋
        </h1>

        {/* Logout Button */}
<div className="logout-wrapper"> 
  {/* Moving color layer */} 
  <div className="logout-gradient-layer"></div> 
  {/* Second moving color layer */} <div className="logout-gradient-layer second"></div> 
  {/* White glowing light */} <div className="logout-light"></div> {/* Actual button */} 
  <button onClick={handlelogout} type="button" className="logout-btn" > Logout </button> {/* Text on top */}
   <div className="logout-text-overlay"> Logout </div> </div>      </div>
    </header>
  );
};

export default Header;
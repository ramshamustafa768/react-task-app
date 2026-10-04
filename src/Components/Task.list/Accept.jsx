// import React from 'react'

// const AcceptTask = ({data}) => {
//   return (
//     <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition-all duration-300">

//       {/* Top */}
//       <div className="flex items-center justify-between mb-5">
//         <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-semibold border border-blue-400/20">
//           Development
//         </span>

//         <span className="text-sm text-gray-400">
//           20 Sep 2026
//         </span>
//       </div>

//       {/* Heading */}
//       <h2 className="text-2xl font-bold mb-3">
//         {data.taskTitle}
//       </h2>

//       {/* Description */}
//       <p className="text-gray-400 leading-relaxed mb-6">
//         {data.taskDescription}
//       </p>

//       {/* Buttons */}
//       <div className="flex gap-3">
//         <button className="flex-1 py-2.5 rounded-xl bg-green-500/15 text-green-300 border border-green-400/20 hover:bg-green-500 hover:text-white transition">
//           Mark as Done
//         </button>

//         <button className="flex-1 py-2.5 rounded-xl bg-red-500/15 text-red-300 border border-red-400/20 hover:bg-red-500 hover:text-white transition">
//           Mark as Failed
//         </button>
//       </div>

//     </div>
//   )
// }

// export default AcceptTask



import React, { useContext } from "react";

import { Authprovider } from "../../Contex/AuthContex";



const AcceptTask = ({ data,name }) => {

const {updateTaskStatus} = useContext(Authprovider)

  return (
    <div className="relative overflow-hidden rounded-2xl p-1">

      {/* Golden rotating light */}
      <div className="absolute w-40 h-[180%] top-[-40%] left-1/2 bg-linear-to-r from-transparent via-yellow-400 to-transparent animate-[rotation_5s_linear_infinite]"></div>

      {/* Actual Card */}
      <div className="relative z-10 rounded-2xl bg-black p-6 text-white">

        {/* Top */}
        <div className="flex items-center justify-between mb-5">
          <span className="px-3 py-1 rounded-full bg-blue-500/15 text-blue-300 text-xs font-semibold border border-blue-400/20">
            Development
          </span>

          <span className="text-sm text-gray-400">
            20 Sep 2026
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-2xl font-bold mb-3">
          {data.taskTitle}
        </h2>

        {/* Description */}
        <p className="text-gray-400 leading-relaxed mb-6">
          {data.taskDescription}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
          onClick={() =>{
             console.log("Button clicked")
    console.log("Employee name:", name);
    console.log("Task title:", data.taskTitle)
    updateTaskStatus(
      name,
      data.taskTitle,
      "completed"
   ) }}
           className="flex-1 py-2.5 rounded-xl bg-green-500/15 text-green-300 border border-green-400/20 hover:bg-green-500 hover:text-white transition">
            Mark as Done
          </button>

          <button 
            onClick={() => {
      updateTaskStatus(
        name,
        data.taskTitle,
        "failed"
      );
    }}
          className="flex-1 py-2.5 rounded-xl bg-red-500/15 text-red-300 border border-red-400/20 hover:bg-red-500 hover:text-white transition">
            Mark as Failed
          </button>
        </div>

      </div>
    </div>
  );
};

export default AcceptTask;
import React from 'react'

// const CompletedTask = ({data}) => {
//   return (
//     <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/10 p-6 text-white shadow-[0_20px_50px_rgba(0,0,0,0.35)] hover:-translate-y-2 transition-all duration-300">

//       {/* Top */}
//       <div className="flex items-center justify-between mb-5">
//         <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 text-xs font-semibold border border-purple-400/20">
//           QA
//         </span>

//         <span className="text-sm text-gray-400">
//           22 Sep 2026
//         </span>
//       </div>

//       {/* Heading */}
//       <h2 className="text-2xl font-bold mb-3">
//         {data.taskTitle}
//       </h2>

//       {/* Description */}
//       <p className="text-gray-400 leading-relaxed mb-6">
//         {data. taskDescription}
//       </p>

//       {/* Completed */}
//       <button className="w-full py-2.5 rounded-xl bg-green-500/15 text-green-300 border border-green-400/20">
//         ✓ Completed
//       </button>

//     </div>
//   )
// }

// export default CompletedTask


const CompletedTask = ({ data }) => {
  return (
    <div className="relative overflow-hidden rounded-3xl p-1">

      {/* Golden rotating light */}
      <div className="absolute w-40 h-[180%] top-[-40%] left-1/2 bg-linear-to-r from-transparent via-yellow-400 to-transparent animate-[rotation_5s_linear_infinite]"></div>

      {/* Actual Card */}
      <div className="relative z-10 rounded-3xl bg-black p-6 text-white">

        {/* Top */}
        <div className="flex items-center justify-between mb-5">
          <span className="px-3 py-1 rounded-full bg-purple-500/15 text-purple-300 text-xs font-semibold border border-purple-400/20">
            QA
          </span>

          <span className="text-sm text-gray-400">
            {data.taskDate}
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

        {/* Completed */}
        <button className="w-full py-2.5 rounded-xl bg-green-500/15 text-green-300 border border-green-400/20">
          ✓ Completed
        </button>

      </div>
    </div>
  );
};

export default CompletedTask;
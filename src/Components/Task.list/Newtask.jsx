import React from "react";
const Newtask = ({ data }) => {
  console.log(data);

  return (
    <div className="bg-linear-to-br from-[#2a0a18] via-[#4a102a] to-[#09090b] p-5 flex pt-20 justify-center">
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

        {/* Card 1 */}
        <div className="relative overflow-hidden rounded-2xl p-1">

          {/* Golden rotating light */}
          <div className="absolute w-40 h-[180%] top-[-40%] left-1/2 bg-linear-to-r from-transparent via-yellow-400 to-transparent animate-[rotation_5s_linear_infinite]"></div>

          {/* Actual Card */}
          <div className="relative z-10 h-44 rounded-2xl bg-black p-5 text-white">
            <h2 className="text-3xl font-bold">
              {data.newTask}
            </h2>

            <div className="flex items-center justify-center h-24">
              <h3 className="text-lg font-semibold">
                New Task
              </h3>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative overflow-hidden rounded-2xl p-1">

          <div className="absolute w-40 h-[180%] top-[-40%] left-1/2 bg-linear-to-r from-transparent via-yellow-400 to-transparent animate-[rotation_5s_linear_infinite]"></div>

          <div className="relative z-10 h-44 rounded-2xl bg-black p-5 text-white">
            <h2 className="text-3xl font-bold">
              {data?.completedTask}
            </h2>

            <div className="flex items-center justify-center h-24">
              <h3 className="text-lg font-semibold">
                Completed
              </h3>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative overflow-hidden rounded-2xl p-1">

          <div className="absolute w-40 h-[180%] top-[-40%] left-1/2 bg-linear-to-r from-transparent via-yellow-400 to-transparent animate-[rotation_5s_linear_infinite]"></div>

          <div className="relative z-10 h-44 rounded-2xl bg-black p-5 text-white">
            <h2 className="text-3xl font-bold">
              {data.pendingTask}
            </h2>

            <div className="flex items-center justify-center h-24">
              <h3 className="text-lg font-semibold">
                Pending
              </h3>
            </div>
          </div>
        </div>

        {/* Card 4 */}
        <div className="relative overflow-hidden rounded-2xl p-1">

          <div className="absolute w-40 h-[180%] top-[-40%] left-1/2 bg-linear-to-r from-transparent via-yellow-400 to-transparent animate-[rotation_5s_linear_infinite]"></div>

          <div className="relative z-10 h-44 rounded-2xl bg-black p-5 text-white">
            <h2 className="text-3xl font-bold">
              {data?.failed}
            </h2>

            <div className="flex items-center justify-center h-24">
              <h3 className="text-lg font-semibold">
                Failed Tasks
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Newtask;


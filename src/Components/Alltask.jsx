
// import React from "react";
// import { User, CalendarDays } from "lucide-react";
// import { Authprovider } from "../Contex/AuthContex";
// import { useContext } from "react";

// const AllTasks = () => {

// const authdata = useContext(Authprovider)

// console.log(authdata);

// const employees = authdata?.employees

//   return (
//     <div className="min-h-screen overflow-y-auto bg-slate-950 text-white px-4 py-10">

//       <div className="max-w-6xl mx-auto">

//         {/* Heading */}
//         <div className="mb-6">
//           <h1 className="text-3xl font-bold">
//             All Tasks
//           </h1>

//           <p className="text-slate-400 mt-1">
//             Manage all assigned tasks
//           </p>
//         </div>

//            {employees?.map((employes)=>(

//                 employes.tasks.map((task)=> (

// <div className="w-full rounded-2xl border border-white/10 bg-slate-900 px-5 py-4 mb-3 flex items-center justify-between">
//  <div className="flex items-center gap-5">
//    <span className="rounded-full bg-yellow-500/10 px-3 py-1.5 text-xs font-semibold text-yellow-400"> Pending </span> <div>

//    <h2 className="font-semibold"> {task.taskTitle} </h2> <div className="flex items-center gap-3 mt-1 text-xs text-slate-400"> 

//     <span>Design</span> 
//    <span className="flex items-center gap-1"> <CalendarDays size={13} /> 

//    {task.taskDate} </span> </div> </div>  </div> 

//    <div className="flex items-center gap-3"> <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">

//     <User size={20} className="text-blue-400" /> </div> <div className="hidden sm:block"> <p className="text-sm font-medium">{employes.name}</p>

//      <p className="text-xs text-slate-500">Assigned To</p>
     
     
     
//                   <div className="flex gap-2 mt-2 text-xs">
//     <span className="text-green-400">
//       Completed: {employes.completedTask}
//     </span>

//     <span className="text-blue-400">
//       New: {employes.newTask}
//     </span>

//     <span className="text-yellow-400">
//       Pending: {employes.pendingTask}
//     </span>

//     <span className="text-red-400">
//       Failed: {employes.failed}
//     </span>
//   </div>

//       </div> </div> </div>

//                   )  ) )
//           )}



//       </div>

//     </div>
//   );
// };

// export default AllTasks






























import React from "react";
import { User, CalendarDays } from "lucide-react";
import { Authprovider } from "../Contex/AuthContex";
import { useContext } from "react";

const AllTasks = () => {

const authdata = useContext(Authprovider)

console.log(authdata);

const employees = authdata?.employees

  return (
    <div className=" overflow-y-auto bg-linear-to-br from-[#2a0a18] via-[#4a102a] to-[#09090b] text-white px-4 py-10">

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-6">
          <h1 className="text-4xl text-white font-bold">
            All Tasks
          </h1>

          <p className="text-slate-400 mt-1">
            Manage all assigned tasks
          </p>
        </div>
<div className="tasks-grid ">


           {employees?.map((employes)=>(

                employes.tasks.map((task)=> (
<div className="task-card">

  <div className="task-card-content g">

    <div className="flex items-center  pt-3 gap-5">
    {/* <div className="flex items-start gap-3 flex-wrap"> */}
   <span className="rounded-full bg-yellow-500/10 px-3 py-1.5 text-xs font-semibold text-yellow-400"> Pending </span> <div>

   <h2 className="font-semibold"> {task.taskTitle} </h2> <div className="flex items-center gap-3 mt-1 text-xs text-slate-400"> 

    <span>Design</span> 
   <span className="flex items-center gap-1"> <CalendarDays size={13} /> 

   {task.taskDate} </span> </div> </div>  </div> 

   <div className="flex items-center gap-3"> <div className="w-10 h-10 rounded-full bg-blue-600/20 flex items-center justify-center">

    <User size={20} className="text-blue-400" /> </div> <div className="hidden sm:block"> <p className="text-sm font-medium">{employes.name}</p>

     <p className="text-xs text-slate-500">Assigned To</p>
     
     
     
                  <div className="flex gap-2 mt-2 text-xs">
    <span className="text-green-400">
      Completed: {employes.completedTask}
    </span>

    <span className="text-blue-400">
      New: {employes.newTask}
    </span>

    <span className="text-yellow-400">
      Pending: {employes.pendingTask}
    </span>

    <span className="text-red-400">
      Failed: {employes.failed}
    </span>
  </div>

      </div> </div> </div>
      </div> 
                  )  ) )
          )}

      </div>

</div>

      </div>

  );
};

export default AllTasks 

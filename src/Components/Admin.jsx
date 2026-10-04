import React, { useState } from "react";
import { useContext } from "react";
import { Authprovider } from "../Contex/AuthContex";
import {
  ClipboardPlus,
  CalendarDays,
  User,
  Tag,
  AlignLeft,
  Plus,
} from "lucide-react";

 const Admin = () => {

const {addTaskstoEmployee} = useContext(Authprovider)


const [tasktitle, settasktitle] = useState('')

const [date, setdate] = useState('')

const [text, settext] = useState('')

const [Description, setDescription] = useState('')


const [Category, setCategory] = useState('')


const handlesubmit = (e) =>{
 e.preventDefault()

addTaskstoEmployee(text, {
  active: true,
  newTask: true,
  complete: false,
  failed: false,
  taskTitle: tasktitle,
  taskDescription: Description,
  taskDate: date,
  category: Category,
});

// addTaskstoEmployee (text,newTask);

setdate('')
settasktitle('')
setDescription('')
settext('')
setCategory('')




const inputdat = ({
  date,
  text,
  Description,
  Category,
  tasktitle,
})
console.log(inputdat);
}

  return (
    <div className="bg-linear-to-br from-[#2a0a18] via-[#4a102a] to-[#09090b] text-white   transition-all duration-500 hover:bg-slate-600 shadow-[0_0_40px_rgba(59,130,246,0.25),0_0_0_80px_rgba(168,85,247,0.15),0_0_100px_rgba(236,72,153,0.12)]">
      {/* Main Container */}
      {/* <div className="max-w-6xl mx-auto px-4 py-24"> */}
< div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14 lg:py-20">
        {/* Card */}
        {/* <div className="rounded-3xl p-1px bg-linear-to-r from-cyan-500/60 via-purple-500/50 to-pink-500/60 shadow-[0_0_25px_rgba(34,211,238,0.15),0_0_50px_rgba(168,85,247,0.12)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.35),0_0_70px_rgba(168,85,247,0.25),0_0_100px_rgba(236,72,153,0.15)]"> */}
        <div className="w-full rounded-3xl p-px bg-linear-to-r from-cyan-500/60 via-purple-500/50 to-pink-500/60 shadow-[0_0_25px_rgba(34,211,238,0.15),0_0_50px_rgba(168,85,247,0.12)] transition-all duration-500 hover:shadow-[0_0_35px_rgba(34,211,238,0.35),0_0_70px_rgba(168,85,247,0.25),0_0_100px_rgba(236,72,153,0.15)]">
        {/* <div className="rounded-[23px] bg-[#111318] p-6 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_15px_40px_rgba(0,0,0,0.45)] transition-all duration-500 hover:scale-[0.985] hover:bg-[#151821]"> */}
        <div className="w-full rounded-[23px] bg-[#111318] p-4 sm:p-6 md:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_15px_40px_rgba(0,0,0,0.45)] transition-all duration-500 hover:scale-[0.985] hover:bg-[#151821]">
          {/* Header */}
          {/* <div className="flex items-center gap-4 mb-10"> */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 sm:mb-10">

            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 flex items-center justify-center">
              <ClipboardPlus
                size={30}
                className="text-blue-400"
              />
            </div>

            <div>
              {/* <h1 className="text-3xl font-bold"> */}
              <h1 className="text-2xl sm:text-3xl font-bold">
                Create New Task
              </h1>

              <p className="text-slate-400 mt-1">
                Fill in the details below to create a new task.
              </p>
            </div>

          </div>


          {/* Form */}
          <form    onSubmit={handlesubmit}   className="space-y-7">

            {/* Row 1 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Task Title */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Task Title
                </label>

                <div className="relative">

                  <ClipboardPlus
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text" value={tasktitle}  onChange={(e)=>settasktitle(e.target.value)}
                    placeholder="Enter task title"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-12 pr-4 outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />

                </div>
              </div>


              {/* Date */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Date
                </label>

                <div className="relative">

                  <CalendarDays
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input value={date} onChange={(e)=>setdate(e.target.value)}
                    type="date"
                    className=" w-full rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-12 pr-4 outline-none text-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />

                </div>
              </div>

            </div>


            {/* Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {/* Assign To */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Assign To
                </label>

                <div className="relative">

                  <User
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <input
                    type="text" value={text} onChange={(e)=>settext(e.target.value)}
                    placeholder="Enter employee name"
                    className="w-full rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-12 pr-4 outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  />

                </div>
              </div>


              {/* Category */}
              <div>
                <label className="block text-sm font-medium mb-2">
                  Category
                </label>

                <div className="relative">

                  <Tag
                    size={20}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500"
                  />

                  <select  value={Category}   onChange={(e)=>setCategory(e.target.value)}
                    className="w-full appearance-none rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-12 pr-4 outline-none text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select category</option>
                    <option value="design">Design</option>
                    <option value="development">Development</option>
                    <option value="marketing">Marketing</option>
                    <option value="seo">SEO</option>
                    <option value="testing">Testing</option>
                  </select>

                </div>
              </div>

            </div>


            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Description
              </label>

              <div className="relative">

                <AlignLeft
                  size={20}
                  className="absolute left-4 top-4 text-slate-500"
                />

                <textarea  value={Description}  onChange={(e)=>setDescription(e.target.value)}
                  rows="6"
                  placeholder="Enter task description..."
                  className="w-full resize-none rounded-xl border border-slate-700 bg-slate-950 py-3.5 pl-12 pr-4 outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                ></textarea>

              </div>
            </div>


            {/* Button */}



 <button  className="create-btn" type="submit">
  Create Task
</button> 
            {/* <div className="pt-2">
  <button
    type="submit"
    className="create-task-btn"
  >
    <span className="clip"></span>

    <span className="arrow leftArrow"></span>
    <span className="arrow rightArrow"></span>

    <span className="corner rightTop"></span>
    <span className="corner leftTop"></span>
    <span className="corner leftBottom"></span>
    <span className="corner rightBottom"></span>

    <span className="button-content">
      {/* <Plus size={21} /> */}
      {/* Create Task
    </span>
  </button>

</div>  */}
            {/* <div className="pt-2">

              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-500 hover:-translate-y-0.5 active:translate-y-0"
              >
                <Plus size={21} />
                Create Task
              </button>

            </div> */}

          </form>

        </div>

      </div>

    </div>
    </div>

  )
}






















export default Admin
// return (
//   <div className="min-h-screen w-full overflow-x-hidden bg-linear-to-br from-[#2a0a18] via-[#4a102a] to-[#09090b] text-white transition-all duration-500 shadow-[0_0_40px_rgba(59,130,246,0.25),0_0_80px_rgba(168,85,247,0.15),0_0_100px_rgba(236,72,153,0.12)]">

//     {/* Main Container */}
//     <div className="w-full max-w-6xl mx-auto px-2 min-[400px]:px-3 sm:px-5 lg:px-8 py-5 min-[400px]:py-7 sm:py-10 lg:py-14">

//       {/* Outer Card */}
//       <div className="w-full rounded-2xl sm:rounded-3xl p-px bg-linear-to-r from-cyan-500/60 via-purple-500/50 to-pink-500/60 shadow-[0_0_20px_rgba(34,211,238,0.12),0_0_40px_rgba(168,85,247,0.10)] transition-all duration-500">

//         {/* Inner Card */}
//         <div className="w-full min-w-0 rounded-[15px] sm:rounded-[23px] bg-[#111318] p-3 min-[400px]:p-4 sm:p-6 lg:p-8 xl:p-10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06),0_15px_40px_rgba(0,0,0,0.45)]">

//           {/* Header */}
//           <div className="flex flex-col min-[400px]:flex-row min-[400px]:items-center gap-3 sm:gap-4 mb-6 sm:mb-8 lg:mb-10">

//             {/* Icon */}
//             <div className="shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-blue-600/20 flex items-center justify-center">
//               <ClipboardPlus
//                 size={24}
//                 className="sm:w-30px] sm:h-30px text-blue-400"
//               />
//             </div>

//             {/* Heading */}
//             <div className="min-w-0">
//               <h1 className="text-xl min-[400px]:text-2xl sm:text-3xl font-bold leading-tight">
//                 Create New Task
//               </h1>

//               <p className="text-xs min-[400px]:text-sm text-slate-400 mt-1 leading-relaxed">
//                 Fill in the details below to create a new task.
//               </p>
//             </div>

//           </div>


//           {/* Form */}
//           <form
//             onSubmit={handlesubmit}
//             className="space-y-5 sm:space-y-6 lg:space-y-7"
//           >

//             {/* Row 1 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

//               {/* Task Title */}
//               <div className="min-w-0">
//                 <label className="block text-xs sm:text-sm font-medium mb-2">
//                   Task Title
//                 </label>

//                 <div className="relative">

//                   <ClipboardPlus
//                     size={18}
//                     className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-500"
//                   />

//                   <input
//                     type="text"
//                     value={tasktitle}
//                     onChange={(e) => settasktitle(e.target.value)}
//                     placeholder="Enter task title"
//                     className="w-full min-w-0 rounded-xl border border-slate-700 bg-slate-950 py-3 sm:py-3.5 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
//                   />

//                 </div>
//               </div>


//               {/* Date */}
//               <div className="min-w-0">
//                 <label className="block text-xs sm:text-sm font-medium mb-2">
//                   Date
//                 </label>

//                 <div className="relative">

//                   <CalendarDays
//                     size={18}
//                     className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-500"
//                   />

//                   <input
//                     value={date}
//                     onChange={(e) => setdate(e.target.value)}
//                     type="date"
//                     className="w-full min-w-0 rounded-xl border border-slate-700 bg-slate-950 py-3 sm:py-3.5 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base outline-none text-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
//                   />

//                 </div>
//               </div>

//             </div>


//             {/* Row 2 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">

//               {/* Assign To */}
//               <div className="min-w-0">
//                 <label className="block text-xs sm:text-sm font-medium mb-2">
//                   Assign To
//                 </label>

//                 <div className="relative">

//                   <User
//                     size={18}
//                     className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-500"
//                   />

//                   <input
//                     type="text"
//                     value={text}
//                     onChange={(e) => settext(e.target.value)}
//                     placeholder="Enter employee name"
//                     className="w-full min-w-0 rounded-xl border border-slate-700 bg-slate-950 py-3 sm:py-3.5 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
//                   />

//                 </div>
//               </div>


//               {/* Category */}
//               <div className="min-w-0">
//                 <label className="block text-xs sm:text-sm font-medium mb-2">
//                   Category
//                 </label>

//                 <div className="relative">

//                   <Tag
//                     size={18}
//                     className="absolute left-3 sm:left-4 top-1/2 -translate-y-1/2 text-slate-500"
//                   />

//                   <select
//                     value={Category}
//                     onChange={(e) => setCategory(e.target.value)}
//                     className="w-full min-w-0 appearance-none rounded-xl border border-slate-700 bg-slate-950 py-3 sm:py-3.5 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base outline-none text-slate-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
//                   >
//                     <option value="">Select category</option>
//                     <option value="design">Design</option>
//                     <option value="development">Development</option>
//                     <option value="marketing">Marketing</option>
//                     <option value="seo">SEO</option>
//                     <option value="testing">Testing</option>
//                   </select>

//                 </div>
//               </div>

//             </div>


//             {/* Description */}
//             <div className="min-w-0">

//               <label className="block text-xs sm:text-sm font-medium mb-2">
//                 Description
//               </label>

//               <div className="relative">

//                 <AlignLeft
//                   size={18}
//                   className="absolute left-3 sm:left-4 top-3.5 sm:top-4 text-slate-500"
//                 />

//                 <textarea
//                   value={Description}
//                   onChange={(e) => setDescription(e.target.value)}
//                   rows="5"
//                   placeholder="Enter task description..."
//                   className="w-full min-w-0 resize-none rounded-xl border border-slate-700 bg-slate-950 py-3 sm:py-3.5 pl-10 sm:pl-12 pr-3 sm:pr-4 text-sm sm:text-base outline-none placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
//                 />

//               </div>

//             </div>


//             {/* Button */}
//             <div className="pt-1 sm:pt-2">

//               <button
//                 type="submit"
//                 className="create-task-btn w-full min-[400px]:w-auto"
//               >
//                 <span className="clip"></span>

//                 <span className="arrow leftArrow"></span>
//                 <span className="arrow rightArrow"></span>

//                 <span className="corner rightTop"></span>
//                 <span className="corner leftTop"></span>
//                 <span className="corner leftBottom"></span>
//                 <span className="corner rightBottom"></span>

//                 <span className="button-content">
//                   Create Task
//                 </span>
//               </button>

//             </div>

//           </form>

//         </div>
//       </div>

//     </div>
//   </div>
// )}


// export default Admin

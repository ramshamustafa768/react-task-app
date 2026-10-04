import React from 'react'
import CompletedTask from './Complete'
import FailedTask from './Faile'
import Tasknew from './TaskNew'
import AcceptTask from './Accept'

const Task= ({data}) => {
   console.log(data);
  
  return (
  

<div className="min-h-screen bg-linear-to-br from-[#2a0a18] via-[#4a102a] to-[#09090b] px-4 py-6">
   <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"> {/* Card 1 */}

{data.tasks.map((elem,idx)=>{

if (elem.active) {
  return <AcceptTask key={idx}  data={elem} name={data.name} />
  
}

if (elem.complete) {
  return<CompletedTask key={idx} data={elem}/>
  
}

if (elem.newTask) {
  return <Tasknew key={idx} data={elem}/>
  
}

if (elem.failed) {
  return <FailedTask key={idx} data={elem}/>
}


 })}
 

     {/* <CompletedTask/>
     
   <AcceptTask/>


   <Tasknew/>
 
 <FailedTask/>

      */}

    </div>
    </div>
  )  
}

export default Task






















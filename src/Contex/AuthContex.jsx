import React from 'react'
import { createContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getLocalstroge, setLocalstroge } from '../Utlis/LocalStorages'


 export const Authprovider = createContext();


export const AuthContex = ({children}) => {


const [User, setData] = useState(null)

useEffect(() => {
   setLocalstroge()
const {employees,admin} = getLocalstroge()

setData({employees,admin})

  
}, [])

 const addTaskstoEmployee = (employeename,newTask) => {

setData((prev)=>{
  if(!prev) return prev ;
   const updateEmploye = prev.employees.map((employee)=>{
    if (employee.name === employeename) {
      return {
        ...employee,
        tasks:[...employee.tasks,newTask],
        newTask: employee.newTask +1,
      }
      
    }
return employee;

   } )


localStorage.setItem("employees",JSON.stringify(updateEmploye))

return{
  ...prev, employees:updateEmploye,
}

})
}


const updateTaskStatus = (employeeName, taskTitle, status) => {

  setData((prev) => {

    if (!prev) return prev;

    const updateEmployees = prev.employees.map((employee) => {

      if (employee.name !== employeeName) {
        return employee;
      }

      const updateTasks = employee.tasks.map((task) => {

        if (task.taskTitle !== taskTitle) {
          return task;
        }

        // Accept Task
        if (status === "accepted") {
          return {
            ...task,
            active: true,
            newTask: false,
            complete: false,
            failed: false,
          };
        }

        // Mark as Done
        if (status === "completed") {
          return {
            ...task,
            active: false,
            newTask: false,
            complete: true,
            failed: false,
          };
        }

        // Mark as Failed
        if (status === "failed") {
          return {
            ...task,
            active: false,
            newTask: false,
            complete: false,
            failed: true,
          };
        }

        return task;
      });


      // Counts dobara calculate
      let completedCount = 0;
      let newCount = 0;
      let pendingCount = 0;
      let failedCount = 0;

      updateTasks.forEach((task) => {

        if (task.complete) {
          completedCount++;
        }

        if (task.newTask) {
          newCount++;
        }

        if (task.active) {
          pendingCount++;
        }

        if (task.failed) {
          failedCount++;
        }

      });


      return {
        ...employee,
        tasks: updateTasks,
        completedTask: completedCount,
        newTask: newCount,
        pendingTask: pendingCount,
        failed: failedCount,
      };

    });


    // localStorage update
    localStorage.setItem(
      "employees",
      JSON.stringify(updateEmployees)
    );


    return {
      ...prev,
      employees: updateEmployees,
    };

  });

};



  return (
    <div>
      <Authprovider.Provider value={{...User,addTaskstoEmployee , updateTaskStatus }}>
        {children}

      </Authprovider.Provider>
    </div>
  )}

export default  AuthContex 
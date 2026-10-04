// import React from 'react'
// import Header from './Header'
// import Newtask from './Task.list/Newtask'
// import Task from './Task.list/Task'
// import { Authprovider } from '../Contex/AuthContex'
// import { useContext } from 'react'

// export const EmployesDashboard = ({data,handlelogout}) => {

//   const authdata = useContext(Authprovider);

//   const updatedEmployee = authdata?.employees?.find(
//     (employee) => employee.id === data.id
//   );


// return(
//     <div >

//         <Header data={data || updatedEmployee} handlelogout={handlelogout}     />
//         <Newtask data={data  || updatedEmployee} />
//         <Task data={data || updatedEmployee}  />

//     </div>
// )} 


// export default EmployesDashboard
import React, { useContext } from "react";
import Header from "./Header";
import Newtask from "./Task.list/Newtask";
import Task from "./Task.list/Task";
import { Authprovider } from "../Contex/AuthContex";

export const EmployesDashboard = ({ data, handlelogout }) => {

  const authdata = useContext(Authprovider);

  const updateEmploye = authdata?.employees?.find(
    (employee) => employee.id === data.id
  );

  const employeeData = updateEmploye || data;

  return (
    <div>

      <Header
        data={employeeData}
        handlelogout={handlelogout}
      />

      <Newtask
        data={employeeData}
      />

      <Task
        data={employeeData}
      />

    </div>
  );
};

export default EmployesDashboard;
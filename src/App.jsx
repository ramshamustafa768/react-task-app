import React, { useContext, useEffect } from 'react'
import Login from './Components/Login'
import EmployesDashboard from './Components/EmployesDashboard'
import { useState } from 'react'
import AdminDashboard from './Components/AdminDashboard'
import { setLocalstroge } from './Utlis/LocalStorages'
import { Authprovider } from './Contex/AuthContex'
import { setLoggedInuser } from './Utlis/LocalStorages'

 const App = () => {

const authdata = useContext(Authprovider)
console.log(authdata?.employees);

const [user, setuser] = useState(null)
const [Employedata, setEmployedata] = useState(null)

 const handlelogout = () => {
  setuser(null)
  setEmployedata(null)
  localStorage.removeItem("LoggedInUser")
}

const handleLogin = (email, password) => {

  if (email === 'admin@gmail.com' && password === '123') {
    setuser('admin')
  }

  else {
    const employee = authdata?.employees?.find(
      (e) => email === e.email && password === e.password
    )

    if (employee) {
      setuser('employee')
      setEmployedata(employee)
      setLoggedInuser(employee)
    }

    else {
      alert("Invalid credentials")
    }
  }
}
  // const [user, setuser] = useState(null)

  //         const handleLogin= (email,password) => {
  //               if (email === 'admin.@com' && password === '123') {
  //                     setuser('admin')
                  
  //                } 
  //                else if{
  //   const employee = authdata?.employees?.find(
  //     (e) => email === e.email && password === e.password
  //   )

  //  else (employee) {
  //     setuser('employee')
  //     setLoggedInuser(employee)
  //   }
  //               }
  //               else{
  //                 alert("Invaild credentails")
  //               }
// useEffect(() => {
  
//     setLocalstroge()
//   }
// )

  return (
    <div >

{!user && <Login handleLogin={handleLogin} />}

{user === 'admin' && <AdminDashboard  handlelogout={handlelogout}/>}

{user === 'employee' && <EmployesDashboard  data={Employedata}   handlelogout={handlelogout}/>}

   {/* { !user ? <Login  handleLogin={handleLogin}/> : '' }

   {user == 'admin' ? <AdminDashboard/> : <EmployesDashboard/>} */}
      
 {/* <EmployesDashboard/> */}

{/* <AdminDashboard/> */}

    </div>
  )
 }

export default App      


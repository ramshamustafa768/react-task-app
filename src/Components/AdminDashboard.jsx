import React from 'react'
import Admin from './Admin'
import Header from './Header'
import AllTasks from './Alltask'

const AdminDashboard = ({handlelogout}) => {
  return (
    <div>
  <Header  handlelogout={handlelogout}/> 
  
      <Admin/>


      <AllTasks/>
    </div>
  )
}

export default AdminDashboard






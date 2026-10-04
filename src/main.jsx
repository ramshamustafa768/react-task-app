import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AuthContex from './Contex/AuthContex.jsx'
import Task from './Contex/Task.jsx'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(

<AuthContex>
        <App />


</AuthContex>



)

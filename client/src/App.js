import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Homepage from './pages/auth/Homepage'


const App = () => {
  return (
    <Routes>
      <Route path= '/login' element= {<Login/>}>
      </Route>
      <Route path= '/register' element= {<Register/>}>
      </Route>
      <Route path= '/' element= {<Homepage/>}>
      </Route>
    </Routes>
    
  )
}

export default App
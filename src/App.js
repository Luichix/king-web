import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthContext from './context/AuthContext'
import Main from './components/Main'
import Shop from './components/Shop'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

function App() {
  const { auth } = useContext(AuthContext)
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path='/' element={<Main/>} exact/>
          <Route path='/store' element={<Shop/>} exact />
          <Route path='/login' element={<Login/>} />
          {auth &&
          <>
            <Route path='/dashboard' element={<Dashboard/>} />
          </>}
        </Routes>
      </div>
    </Router>
  )
}

export default App

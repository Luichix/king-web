import React, { useContext } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import AuthContext from './context/AuthContext'
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Footer from './components/Footer'

function App() {
  const { auth } = useContext(AuthContext)
  return (
    <Router>
      <div className="App">
        <Header></Header>
        <Routes>
          <Route path='/' element={<Main/>} exact/>
          <Route path='/login' element={<Login/>} />
          {auth &&
          <>
            <Route path='/dashboard' element={<Dashboard/>} />
          </>}
        </Routes>
        <Footer></Footer>
      </div>
    </Router>
  )
}

export default App

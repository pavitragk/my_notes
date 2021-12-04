import React, { useState, useEffect } from 'react'
import Home from './components/Home'
import { Link, Route } from 'react-router-dom'
import Login from './components/Login'
import Register from './components/Register'
import NavBar from './components/NavBar'
function App(props) {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false)

  const handleAuth = () => {
    setIsUserLoggedIn(!isUserLoggedIn)
  }

  useEffect(() => {
    if (localStorage.getItem('token')) {
      handleAuth()

    }

  }, [])
  return (
    <div>
      <NavBar isUserLoggedIn={isUserLoggedIn} handleAuth={handleAuth} />
    </div>
  )
}

export default App
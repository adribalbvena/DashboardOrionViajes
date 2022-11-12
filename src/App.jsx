import { useState } from 'react'
import { Dashboard } from './components/Dashboard/Dashboard'
import { Login } from './components/Login/Login'
import { Navbar } from './components/Navbar/Navbar'


export const App = () => {
  return <>
    <Navbar/>
    <Dashboard/>
    {/* <Login /> */}
  </>
}
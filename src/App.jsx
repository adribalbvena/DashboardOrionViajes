import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './auth';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Login } from './components/Login/Login';
import { NoMatch } from './components/NoMatch/NoMatch';
import { RequireAuth } from './components/RequireAuth/RequireAuth';


export const App = () => {
  return (
  <AuthProvider>
  <Routes>
    <Route path='/' element={<Login/>}></Route>
    <Route path='dashboard' element={
      <RequireAuth>
            <Dashboard />
      </RequireAuth>
    }></Route>
    <Route path='*' element={<NoMatch/>}></Route>
  </Routes>
  </AuthProvider>
  )
}
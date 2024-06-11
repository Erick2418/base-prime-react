import React from 'react'
import { Button } from 'primereact/button';                             
import { Link, Route, Routes } from 'react-router-dom';
import HomeScreen from '../modules/home/HomeScreen';
import AuthScreen from '../modules/auth/AuthScreen';
import UserScreen from '../modules/user/UserScreen';

const AppRouter : React.FC = () => {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/user">User</Link></li>
        <li><Link to="/auth">Auth</Link></li>
      </ul>
      <Button label="Submit" />

      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/auth" element={<AuthScreen />} />
        <Route path="/user" element={<UserScreen />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes> 
    </>
  )
}

export default AppRouter

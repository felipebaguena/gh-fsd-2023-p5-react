import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NavTop } from '../components/NavBar';
import { HomePage } from './Home/HomePage';
import { LoginPage } from './Login/LoginPage';


export const MainApp = () => {
  return (
    <>
    <NavTop/>
    <Routes>
        <Route path = '/' element = {<HomePage/>}/>
        <Route path = 'login' element = {<LoginPage/>}/>
        {/* <Route path = 'about' element = {<AboutPage/>}/> */}
    </Routes>

    </>
  )
}

import React from 'react';

import { Routes, Route } from "react-router-dom";
import { HomePage } from '../Home/HomePage';
import { LoginPage } from '../Login/LoginPage';


export const Body = () => {
  return (
    <>
        <Routes>
            <Route path = '/' element = {<HomePage/>}/>
            <Route path = 'login' element = {<LoginPage/>}/>
            {/* <Route path = 'about' element = {<AboutPage/>}/> */}
        </Routes>
    </>
  )
}

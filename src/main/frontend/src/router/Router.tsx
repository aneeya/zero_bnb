import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from '../pages/Header'
import LoginPage from '../pages/LoginPage';

const Router = () => {
  return(
  <BrowserRouter>
    <Routes>
     <Route path='' element={<Header/>}>
      <Route path='login' element={<LoginPage/>}/>
     </Route>
    </Routes>
  </BrowserRouter>
)
} 

export default Router

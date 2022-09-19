import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Example from '../pages/Example';
import Header from '../pages/Header'
import HostPage from '../pages/HostPage';
import HostRegisterPage from '../pages/HostRegisterPage';
import JoinPage from '../pages/JoinPage';
import LoginPage from '../pages/LoginPage';
import RoomManagePage from '../pages/RoomManagePage';
import RoomRegisterPage from '../pages/RoomRegisterPage';

import HostInfoStore from '../store/HostInfoStore';
import RoomInfoSore from '../store/RoomInfoStore';

const Router = () => {
  return(
  <HostInfoStore>
  <RoomInfoSore>
    <BrowserRouter>
      <Routes>
      <Route path='' element={<Header/>}>
        <Route path='login' element={<LoginPage/>}/>
        <Route path='join' element={<JoinPage/>}/>
          <Route path='host' element={<HostPage/>}/>
          <Route path='host/register' element={<HostRegisterPage/>}/>
          <Route path='host/roomregister' element={<RoomRegisterPage />}/>
          <Route path='host/roommanage' element={<RoomManagePage />}/>
        <Route path='example' element={<Example />}/>
      </Route>
      </Routes>
    </BrowserRouter>
  </RoomInfoSore>
  </HostInfoStore>
)
} 

export default Router

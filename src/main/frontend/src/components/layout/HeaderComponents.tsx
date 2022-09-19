import React, { useState } from 'react';
import HeaderLoginStatus from './HeaderLoginStatus';
import styled from './HeaderComponents.module.css'
import { Link } from 'react-router-dom';
import logoImg from '../../img/logo2.png'

export default function HeaderComponents() {
  const [ confirmLogin, setConfirmLogin ] = useState(true)
  
  return(
    <>
      <header className={styled.header}>
        <div>
          <Link to='/'>
            <img src={logoImg} alt='zerobnb' className='logo'/>
          </Link>
          {confirmLogin  
            ? <HeaderLoginStatus />
            : <div className={styled.loginAndJoin}>
                <Link to='login'>로그인</Link>
                <Link to='join'>회원 가입</Link>
              </div>
          }
        </div>
      </header>
    </>
  )
}

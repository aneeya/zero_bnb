import React, { useState } from 'react';
import HeaderLoginStatus from './HeaderLoginStatus';
import styled from './HeaderComponents.module.css'
import { Link } from 'react-router-dom';

export default function HeaderComponents() {
  const [ confirmLogin, setConfirmLogin ] = useState(true)
  
  return(
    <>
      <header className={styled.header}>
        <div>
          <div className={styled.logo}>zerobnb</div>
          {confirmLogin  
            ? <HeaderLoginStatus />
            : <div className={styled.loginAndJoin}>
                <Link to='login'>로그인</Link>
                <span aria-hidden='true'>|</span>
                <Link to='join'>회원 가입</Link>
              </div>
          }
        </div>
      </header>
    </>
  )
}

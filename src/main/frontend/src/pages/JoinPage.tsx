import styled from './JoinPage.module.css'
import logoImg from '../img/logo2.png'
import ico from '../img/jjangkoo.png'

import JoinComponent from '../components/layout/JoinComponent';
import PopUpLayout from '../components/layout/PopUpLayout';
import { useState } from 'react';

export default function JoinPage() {
  //임시로 작성//
  const [ joined, setJoined ] = useState(false)

  function joinState() {
    setJoined(!joined)
  }

  const popUpContent = <PopUpLayout 
                          text="감사합니다"
                          subText="회원가입이 완료되었습니다"
                          img={ico}
                          page="로그인 하러 가기"
                          toPage='/login'
                          close={joinState}/>
  
  return(
    <div className='mainLayout'>
      <h2 className={styled.joinH2}><img src={logoImg} alt='zerobnb' className="logo"/></h2>
      <JoinComponent joinState={joinState}/>
      {joined? popUpContent : null}
    </div>
  )
}
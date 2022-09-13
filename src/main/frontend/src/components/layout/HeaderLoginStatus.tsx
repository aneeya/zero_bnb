import React, { useEffect, useRef, useState } from 'react'
import styled from './HeaderLoginStatus.module.css'

export default function HeaderLoginStatus() {
  const [ toggle, setToggle ] = useState(false)
  
  function changeToggle() {
    if(toggle) setToggle(false)
  }

  return(
    <div className={styled.headerMenu}>
      <button type='button' className={styled.hostMode}>호스트 전환</button>
      <div>
        <button
          className={styled.userImg}
          onClick={() => setToggle(!toggle)}
          id='$user'
        >사진
        </button>
        {toggle
          ? <NavList changeToggle={changeToggle}/> 
          : null
        }
      </div>
    </div>
  )
}

function NavList({changeToggle}: {changeToggle: () => void}) {
  const $navList = useRef<HTMLUListElement>(null)
  const navList = [
    '위시리스트',
     '예약 목록', 
     '메세지', 
     '마이페이지', 
     '로그아웃', 
     '회원 탈퇴'
    ]

  function canCelNavList(this: HTMLElement, e: MouseEvent) {
    if((e.target as HTMLElement).id !== '$user' && e.target !== $navList.current) {
      changeToggle()
    }
  }
  
  useEffect(() => {
    document.body.addEventListener('click', canCelNavList) 
    return () => {
      document.body.removeEventListener('click', canCelNavList)
    } 
  })
    
  return(
    <>
      <ul className={styled.navList} ref={$navList}>
        {navList.map(list => <li key={list}>{list}</li>)}
      </ul>
    </>
  )
}
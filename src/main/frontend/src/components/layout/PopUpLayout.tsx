import { useNavigate } from 'react-router-dom'
import Button from '../custom/Button'
import CloseButton from '../custom/CloseButton'
import styled from './PopUpLayout.module.css'

interface PopUpProps {
  text: string,
  subText: string,
  img: string,
  page: string,
  toPage: string,
  close?: () => void
}

export default function PopUpLayout({ text, subText, img, page, toPage, close }: PopUpProps) {
  const nav = useNavigate()
  
  return(
    <div className="popUpLayout" >
      <div className={styled.popUpContentArea}>
        <div className={styled.close} onClick={close}>
          <CloseButton />
        </div>
        <div className={styled.textArea}>
          <span className={styled.text}>{text}</span>
          <span className={styled.subText}>{subText}</span>
        </div>
        <div>
          <img src={img} alt="스마일" className={styled.img}/>
        </div>
        <Button type='button' stype='normalButton' onClick={() => nav(toPage)}>{page}</Button>
      </div>
    </div>
  )
}
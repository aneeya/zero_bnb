import React, { useContext, useState } from 'react'
import { hostRegister } from '../../form/dataForm'
import Button from '../custom/Button'
import styled from './HostRegister.module.css'
import PopUpLayout from './PopUpLayout'
import ico from '../../img/jjangkoo.png'
import { hostInfoStore, List, } from '../../store/HostInfoStore'



export default function HostRegister() {
  const findHost = useContext(hostInfoStore)
  const [ register, setRegister ] = useState<List>(findHost[0])
  const [ openPopup, setOpenPopup ] = useState(false)
  const formData = hostRegister
  //<form>onSubmit state에 저장하고 post해야함
  
  const popUp = <PopUpLayout 
                  text='등록이 완료되었어요'
                  subText='호스트 페이지로 이동해 보세요'
                  img={ico}
                  page='GO'
                  toPage='/host'
                  />
  
  function changeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setRegister({ ...register!, [e.target.name]: e.target.value })
  }

  const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = URL.createObjectURL(e.target.files![0])
    setRegister({ ...register!, [e.target.name]: fileName })
    }
  

  function submitHandler(e: React.ChangeEvent<HTMLFormElement>) {
    e.preventDefault()
    setTimeout(() => {
      console.log(findHost)
      findHost[0] = {...register, active: true}
      console.log(findHost[0])
      setOpenPopup(true)
    }, 2000)
  }  
  return(
    <div className="layout">
      <div className="title">호스트 등록</div>
      <form onSubmit={submitHandler}>
        <div className={styled.inputArea}>
          {formData.map(({ name_, type, placeholder, required }) => {
            return <input 
                    key={name_}
                    name={name_}  
                    placeholder={placeholder}
                    type={type}
                    required={required}
                    onChange={name_ === 'profileImage'? imgHandler : changeHandler}
                    className='underLineInput'/>})}
          </div>
        <Button type='submit' stype="normalButton" >등록 하기</Button>
      </form>
      {openPopup ? popUp : null}
    </div>
  )
} 
import React, { useContext, useState } from "react"

import Button from "../custom/Button"
import CloseButton from "../custom/CloseButton"
import HostInfoTable from "./HostInfoTable"

import styled from "./HostInfoComponent.module.css"
import { hostInfo } from "../../form/dataForm"
import { hostInfoStore } from "../../store/HostInfoStore"

const formData = hostInfo

export default function HostInfoComponent() {
  const findHost = useContext(hostInfoStore)
  //reducer로 바꿔보기
  const [ modifyMode, setModifyMode ] = useState(false)
  const [ modifyInfo, setModifyInfo ] = useState(findHost[0])
  const [ imgeChange, setImageChange ] = useState(findHost[0].profileImage)

  const modifyHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModifyInfo({ ...modifyInfo, [e.target.name]: e.target.value })
  } 

 const modifySubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    setTimeout(() => {
      findHost[0] = { ...modifyInfo}
      alert('변경되었습니다.')
      setModifyMode(false)
    }, 2000)
  }

  const imgHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fileName = URL.createObjectURL(e.target.files![0])
    setImageChange(fileName)
    setModifyInfo({ ...modifyInfo, [e.target.name]: fileName })
    }
  
  const reset = () => {
    setModifyInfo(findHost[0])
    setImageChange(findHost[0].profileImage)
    setModifyMode(false)
  }

  return(
    <>
      {/* 사진데이터 받아와야함 state->null useEffect에서 바꾸기 */}
      <img src={imgeChange} alt='호스트 이미지' className={styled.hostImg}/>
        <div className={styled.hostInfo}>
          {modifyMode? 
            <>
              <CloseButton onClick={reset}/>
              <form className={styled.form} onSubmit={modifySubmit}>
                <HostInfoModify onChange={modifyHandler} imgHandler={imgHandler}/>
                {modifyMode ? <Button 
                                stype='confirmButton' 
                                style={{width: 5 +'rem', height: 3 +'rem'}}
                                >완료</Button>
                            : null}
              </form>
            </> : <HostInfoTable modifyInfo={modifyInfo} />}
        </div>
        {!modifyMode ? <Button 
                        stype='confirmButton' 
                        style={{width: 5 +'rem', height: 3 +'rem'}}
                        onClick={()=> setModifyMode(true)}>수정</Button>
                    : null}
    </>
  )
}


type Event = (e: React.ChangeEvent<HTMLInputElement>) => void

function HostInfoModify({onChange, imgHandler}: 
  { onChange: Event,
    imgHandler: Event
  }) {

  //PUT: /host/update/{hostId}

  return(
    <>
      {formData.map(({ name_, label_, type, placeholder }) => {
        return (
          <label htmlFor={name_} key={name_}>
            {label_}
            <input
              name={name_}
              id={name_}
              type={type}
              placeholder={placeholder}
              onChange={label_ === '이미지' ? imgHandler : onChange}
              className='underLineInput'/>
          </label>
        )
      })}
      </>
  )
}
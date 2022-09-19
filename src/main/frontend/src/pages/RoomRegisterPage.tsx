import RoomInfoComponent from "../components/layout/RoomInfoComponent";
import ImgUploadComponent from "../components/layout/ImgUploadComponent";
import styled from "./RoomManagePage.module.css"
import ico from "../img/jjangkoo.png"

import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import Button from "../components/custom/Button";
import PopUpLayout from "../components/layout/PopUpLayout";
import { roomInfoStore } from "../store/RoomInfoStore";

export default function RoomRegisterPage() {
  //redux로 고쳐보기...
  const findRoom = useContext(roomInfoStore)
  const [ confirm, setConfirm ] = useState(false)
  const [ roomInfo, setRoomInfo ] = useState(findRoom[0])
  const [ eventAdd, setEventAdd ] = useState({description: ''})
  const [ serviceType, setServiceType ] = useState(findRoom[0].popularFacilityServiceInputs)
  const nav = useNavigate()

  const confrimPopup = <PopUpLayout 
                        text="완료 되었습니다."
                        img={ico}
                        subText="호스트 페이지에서 확인하세요"
                        page="호스트 페이지로 가기"
                        toPage='/host'/>

  const changeType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomInfo({...roomInfo, [e.target.name]: e.target.value})
  }   
  
  const changeDescript = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setRoomInfo({...roomInfo, [e.target.name]: e.target.value})
    console.log(roomInfo)
  } 

  const changeBasicInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRoomInfo({...roomInfo, [e.target.name]: e.target.value})
  }

  const changeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEventAdd({description: e.target.value})
  }
   

  const changeServie = (e: React.ChangeEvent<HTMLInputElement>) => {
    setServiceType([...serviceType!, { popularFacilityServiceType: Number(e.target.id)}] )
  }

  const handler = [ changeType, changeDescript, changeBasicInfo, changeEvent, changeServie]

  const formSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    let timer;
    if(timer) {
      clearTimeout(timer)
    }
    setTimeout(() => {
      findRoom[0] = { ...roomInfo }
      findRoom[0].popularFacilityServiceInputs = serviceType
      findRoom[0].eventInputs?.push(eventAdd)
    }, 2000)
    setConfirm(true)
  }

  return (
    <>
      <div className={styled.registerLayout}>
        <div className="title">숙소 등록</div>
        <div className={styled.imgInput}>
          <span>IMAGE UPLOAD</span>
          <ImgUploadComponent />
        </div>
        <form className={styled.formLayout} onSubmit={formSubmit}>
          <RoomInfoComponent  handler={handler}/>
    
          <div className={styled.buttons}>
            <Button 
              type='submit' 
              stype="normalButton" 
              style={{width: 15 + 'rem', marginRight: 1.5 + 'rem'}} 
              onClick={() => {setConfirm(!confirm); }}>등록하기</Button>
            <Button 
              type="button" 
              stype="normalButton" 
              style={{width: 15 + 'rem'}}  
              onClick={() => nav('/host')}>취소</Button>
          </div>
        </form>
      </div>
      <div>
      {confirm && confrimPopup }

      </div>
    </>
  )
}





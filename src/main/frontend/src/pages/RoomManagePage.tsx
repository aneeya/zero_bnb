
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import Button from "../components/custom/Button";
// import PopUpLayout from "../components/layout/PopUpLayout";
// import RoomInfoComponent from "../components/layout/RoomInfoComponent";
// import styled from "./RoomManagePage.module.css"
// import ico from "../img/jjangkoo.png"
import RoomManageComponent from "../components/layout/RoomManageComponent";

export default function RoomManagePage() {
  // const [ confirm, setConfirm ] = useState(false)
  // cpmst [ state, setState ] = useState(false)
  // const nav = useNavigate()
  
  return(
    <>
    <RoomManageComponent/>
      {/* <form className={styled.formLayout}>
        <RoomInfoComponent />
        <Button type="normalButton" onClick={() => setConfirm(true)}>수정</Button>
        <Button type="normalButton" onClick={() => nav('/host')}>취소</Button>
      </form>
      {confirm ? 
        <PopUpLayout 
          text="완료 되었습니다."
          subText="호스트 페이지에서 확인하세요"
          img={ico}
          page="호스트 페이지로 가기"
          toPage='/host'/>
          : null } */}
    </>
    
  )
}
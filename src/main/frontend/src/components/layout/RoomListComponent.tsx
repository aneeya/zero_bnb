
import { useNavigate } from "react-router-dom"
import Button from "../custom/Button"
import styled from "./RoomListComponent.module.css"

export default function RoomListComponent() {
  const nav = useNavigate()
  //api 로직
  //정보받아와서 map으로 돌려야함
  return(
    <>
    <Button 
      type="button"
      stype="confirmButton" 
      style={{marginRight: -85 + 'rem', marginTop: -5 + 'rem'}}
      onClick={() => nav('/host/roomregister')}>숙소 등록 하기</Button>
    <ul className={styled.roomList}>
      <RoomInfoLayout />
      <RoomInfoLayout />
      <RoomInfoLayout />
      <RoomInfoLayout />
      <RoomInfoLayout />
      <RoomInfoLayout />
    </ul>
    </>
  )
}

function RoomInfoLayout() {
  const nav = useNavigate()
  return (
    <li className={styled.roomItem} onClick={() => nav('/host/roommanage')}>
      <div role='button' araia-label='관리페이지로 가기' className={styled.pageButton}>
        <img src="/" alt='숙소대표이미지' className={styled.img}/>
        <div>
          <div className={styled.title}>{'숙소명가나다라마바사아자차카파타하하하'}</div>
        </div>
      </div>
    </li>
  )
}
      
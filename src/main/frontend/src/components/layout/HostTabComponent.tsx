import { ReactNode, useState } from 'react'
import HostInfoComponent from './HostInfoComponent'
import styled from './HostTabComponent.module.css'
import RoomListComponent from './RoomListComponent'

export default function HostTabComponent() {
  const [ tabState, setTabState ] = useState<ReactNode>(<HostInfoComponent />)

  

  function changeTab(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    if(e.target instanceof HTMLElement) {
      switch(e.target.id) {
        case '숙소관리':
          setTabState(<RoomListComponent/>)
          break
          case '내정보':
          setTabState(<HostInfoComponent />)
          break
      } 
    }
  }

  return(
    <>
      <ul className={styled.tab}>
        <li>
          <button id='내정보' onClick={changeTab} className={styled.tabButton}>내정보</button>
        </li>
        <li>
          <button id='숙소관리' onClick={changeTab} className={styled.tabButton}>숙소관리</button>
        </li>
      </ul>
      <div className={styled.hostInfoArea}>
      {tabState}
      </div>
    </>
  )
}
  
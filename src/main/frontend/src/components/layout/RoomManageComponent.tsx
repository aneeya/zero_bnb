import { useContext } from "react"
import { comfortsService } from "../../form/dataForm"
import { roomInfoStore } from "../../store/RoomInfoStore"
import ico from "../../img/smile.png"

import styled from "./RoomManageComponent.module.css"

export default function RoomManageComponent() {
  const roomFind = useContext(roomInfoStore)[0]
  const imgList = roomFind.accommodationImageInputs
  const eventList = roomFind.eventInputs
  const serviceList = roomFind.popularFacilityServiceInputs
  const comforts = comfortsService
  console.log(imgList)
  return(
    <>
     <div className={styled.layout}>
       <ul>
        {imgList?.map(({url}) => {
          const source = url ? url : ico
          return <li key={url}>
                    <img src={source} alt='숙소이미지' className={styled.img} />
                 </li>
        })}
       </ul>
       <table className={styled.table}>
        <thead>
          <tr>
            <th scope='row'>TYPE</th>
            <td>{roomFind.type}</td>
          </tr>
          <tr>
            <th scope='row'>NAME</th>
            <td>{roomFind.name}</td>
          </tr>
          <tr>
            <th scope='row'>DESCRIPTION</th>
            <td>{roomFind.description}</td>
          </tr>
          <tr>
            <th scope='row'>ADDRESS</th>
            <td>{roomFind.address}</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope='row'>NOTICE</th>
            <td>{roomFind.notice}</td>
          </tr>
          <tr>
            <th scope='row'>POLICY</th>
            <td>{roomFind.policy}</td>
          </tr>
          <tr>
            <th scope='row'>EVENT</th>
            {eventList?.map(({description}) => {
              return <td key={description}>{description}</td>
            })}
          </tr>
          <tr>
            <th scope="row">SERVICETYPE</th>
            {serviceList?.map(({popularFacilityServiceType}) => {
              const service = comforts[popularFacilityServiceType]
              return <td key={service}>{service}</td>
            })}
          </tr>
        </tbody>
       </table>
     </div>
    </>
  )
}
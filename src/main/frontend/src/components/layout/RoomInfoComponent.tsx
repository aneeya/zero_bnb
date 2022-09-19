import { comforts, event, roomInput, roomType } from "../../form/dataForm"
import plus from "../../img/close.png"

import styled from './RoomInfoComponent.module.css'
import React, { useState } from "react"

const { label, type, name } = roomType[0]
const { name_, label_, lists } = event[0]
const { $name, $type, $list } = comforts[0]

interface Props {
  handler?: ((e: React.ChangeEvent<any>) => void) [] 
  
}

export default function RoomInfoComponent({handler}: Props) {
  const [ inputCount, setInputCount ] = useState(lists)
  const [changeType, changeDescript, changeBasicInfo, changeEvent, changeServie] = handler!
  const list = {
      name: 'description',
      type: 'text',
      placeholder: '이벤트를 추가해 보세요'
  }
  
  function addInput () {
    setInputCount([...inputCount, list])
  }

  function subInput(e: React.MouseEvent<HTMLImageElement>) {
    const target = e.target as HTMLImageElement
    const targetPrev = (e.target as HTMLImageElement).previousSibling!
    target.parentNode?.removeChild(targetPrev)
    target.parentNode?.removeChild(target)
  }

  return (
    <>
      <div className={styled.inputArea}>
        <div>
          <span>ROOMTYPE</span>
          <div className={styled.typeLabel}>
            {label
              .map(item =>
                <label htmlFor={item} key={`$${item}`} className={styled.typeLabel}>
                  {item}
                  <input 
                    type={type} 
                    id={item} 
                    value={item} 
                    name={name} 
                    onChange={changeType}/>
                </label>
              )}
          </div>
        </div>

        <div className={styled.textArea}>
          <label htmlFor="숙소설명">DESCRIPTION</label>
          <textarea 
            id="숙소설명" 
            name="description" 
            rows={5} 
            cols={30} 
            defaultValue='숙소설명'
            className={styled.textAreaStyle}
            onChange={changeDescript}/>
        </div>

      {roomInput
          .map(({ name, type, placeholder}) => {
            return (
              <div className={styled.inputStyle} key={name}>
                <label htmlFor={name}>{name.toLocaleUpperCase()}</label>
                <input 
                  id={name} 
                  type={type} 
                  name={name} 
                  placeholder={placeholder} 
                  onChange={changeBasicInfo}/>
              </div>
            )
          })}

        <div className={styled.eventInput}>
          <label htmlFor={name_}>{label_}</label> 
          <div className={styled.eventList}>
          {inputCount
            .map(({ type, placeholder }, idx) => {
              return (
                <div>
                <input 
                  id={name_} 
                  name='description' 
                  type={type} 
                  placeholder={placeholder} 
                  key={idx.toString() + '!!#'}
                  onChange={changeEvent}/>
                <img 
                  src={plus} 
                  role='button' 
                  alt={`이벤트 ${idx > 0 ? '삭제' : '추가'}하기`} 
                  onClick={idx > 0 ? subInput : addInput}
                  id={String(idx)}
                  className={idx > 0 ? styled.event : styled.firstEvent}/>
                </div>
              )
            })}
          </div>
        </div>

        <div className={styled.checkboxDiv}>
          <span>SERVICETYPE</span>
          <div>
            {$list.map(({value_}, idx) =>
              <div key={value_} className={styled.checkbox}>
              <label htmlFor={idx.toString()}>{value_}</label>
              <input id={idx.toString()} name={$name} type={$type} onChange={changeServie}/>
              </div>)}
          </div>
        </div>
      </div>
    </>
)
}

       
      

import React, { Reducer, useContext, useReducer } from "react"
import { roomInfoStore } from "../../store/RoomInfoStore";
import Button from "../custom/Button";
import styled from './ImgUploadComponent.module.css'

interface Action {
  type: 'add' | 'subtract',
  payload: string
}

function addImgList(state: {url: string}[], action: Action) {
  switch(action.type) {
    case 'add':
      return [...state, {url: action.payload}];
    case 'subtract':
      return [...state].filter(({url}) => {
        return action.payload !== url
      })
    }
  }

  export default function ImgUploadComponent() {
  const findImg = useContext(roomInfoStore)
  const imgData = findImg[0].accommodationImageInputs
  const [ state, dispatch ] = useReducer<Reducer<any, any>>(addImgList, imgData )
 
  function previewImg(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault()
    if(state.length > 4) {
      alert('등록가능한 이미지는 5장입니다.')
      return
    } 
    // const file = e.target.files[0]
    const fileName = URL.createObjectURL(e.target.files![0])
    dispatch({type: 'add', payload: fileName})
    e.target.value = ''
  }

  
  const imgList = state.map(({url}: {url: string}, idx: number) => {
    return (
      <img
        className={styled.img}
        src={url} key={`img${String(idx)}`}
        alt={`숙소이미지${idx + 1}`}
        onClick={(e) => {
          e.preventDefault()
          if(e.target instanceof HTMLImageElement) {
              dispatch({type: 'subtract', payload: e.target.src})
              e.target.src = ''
            }
    }}/>
    )
  })
     
  const submitForm = (e: React.ChangeEvent<HTMLFormElement>) =>{
    e.preventDefault()
    setTimeout(() => {
      imgData?.push(state)
      alert('등록되었습니다.')
      console.log(findImg)
    }, 2000)
  }
     
  return(
    <form className={styled.imgUploadArea} onSubmit={submitForm}>
      <input type='file' 
      name="url" 
      placeholder="이미지" 
      className={styled.inputImg}
      onChange={previewImg} />
      <div className={styled.imgList}>
        {state.length !== 0 ? imgList : null} 
      </div>
      <Button 
        stype="normalButton" 
        type="submit"
        style={
          {width: 10 + 'rem', 
          fontSize: 1.3 + 'rem',
          marginLeft: 40 + 'rem',
          marginTop: 3 + 'rem'
          }}>이미지 등록</Button>
    </form>
  )
}
import { useRef } from 'react'
import styled from './InputCustom.module.css'

interface InputType {
  type: string,
  placeholder?: string,
  name: string,
  lineSt?: 'underLine',
  required?: boolean,
  style?: {},
  onChange?: () => void 
}

export default function InputCustom({ 
  type, 
  placeholder, 
  name,
  lineSt, 
  required, 
  style, 
  onChange }: InputType) {
  const $input = useRef<HTMLInputElement>(null)
  const $input_value = $input.current

  const inputStyle = lineSt === 'underLine' ? styled.underLineStyle : styled.normalStyle
 

  console.log($input_value)

  return( 
    <>
      <input 
      name={name}
      required={required}
      type={type} 
      placeholder={placeholder} 
      className={inputStyle}
      style={style}
      autoComplete={type === 'password' ? 'on' : 'off'} 
      ref={$input}
      onChange={onChange}/>
    </>)
}
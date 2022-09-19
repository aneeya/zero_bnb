import styled from './Button.module.css'

interface Props {
  children: string | React.ReactElement 
  type?: "button" | "submit" | "reset" | undefined
  stype: 'normalButton' | 'confirmButton'
  style?: {}
  onClick?: () => void
}
export default function Button({ children, stype, style, onClick, type }: Props) {
  return <button 
          type={type}
          className={styled[stype]}
          onClick={onClick}
          style={style}>{children}</button>
}
import styled from './Button.module.css'

interface Props {
  size?: 'small' | 'large',
  children: string | React.ReactElement 
}
export default function Button({ size, children }: Props) {
  let buttonSize
  switch (size) {
    case 'small':
      buttonSize = styled.ButtonSmall
      break
    
      case 'large':
        buttonSize = styled.ButtonLarge
        break
    
    default:
      buttonSize = styled.ButtonLarge
      break
  }
  
  return <button className={buttonSize}>{children}</button>
}
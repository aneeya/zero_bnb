import styled from './CloseButton.module.css'

interface CloseProps {
  onClick?: () => void
}

export default function CloseButton({onClick}: CloseProps) {
  return <div 
    role='button' 
    className={styled.closeButton}
    aria-label='닫기'
    onClick={onClick}
    >
  </div>
}
  
import { useState } from "react";
import InputCustom from "../custom/InputCustom";
import Button from "../custom/Button";

import styled from './JoinComponent.module.css'

export default function JoinComponent({ joinState }: { joinState: () => void}) {
  const [ dateToggle, setToggle ] = useState(true)

  return(
    <div className="layout">
        <div className='title'>회원가입</div>
        <form>
          <div className={styled.inputArea}>
            <InputCustom type="text" placeholder="이름을 입력하세요" lineSt='underLine' required name="이름"/>
            <div className={styled.date}>
              {dateToggle? <span>생년월일</span> : null}
              <InputCustom 
                type="date"  
                placeholder="생년월일"
                lineSt='underLine' 
                required 
                name="생년월일"
                onChange={() => setToggle(false)}/>
            </div>
            <div className={styled.emailConfirm}>
              <InputCustom
                type="email"
                placeholder="이메일을 입력하세요"
                lineSt='underLine'
                required
                name="이메일"
                style={{width: 23 + 'rem'}} />
              <Button stype="confirmButton">중복확인</Button>
            </div>
            <InputCustom type="password" placeholder="비밀번호을 입력하세요" lineSt='underLine' required name="비밀번호"/>
            <InputCustom 
              type="tel" 
              placeholder="전화번호('-'를 넣어 입력하세요)" 
              lineSt='underLine'
              name="연락처" 
              required />
          </div>
        </form>
        <Button stype="normalButton" onClick={joinState}>회원가입</Button>
      </div>
  )
}
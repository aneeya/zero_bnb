import { Link } from "react-router-dom";
import Button from "../components/custom/Button";
import InputCustom from "../components/custom/InputCustom";
import styled from "./LoginPage.module.css"

export default function LoginPage() {
  
  return(
    <div className={`layout ${styled.loginPage}`}>
      <div className={styled.emailLogin}>
        <div className={styled.loginType}>이메일 로그인</div>
        <form>
          <div className={styled.emailLoginForm}>
            <InputCustom type="email" placeholder="email" required name="이메일"/>
            <InputCustom type="password" placeholder="password" required name="비밀번호"/>
          </div>
          <Button stype="normalButton">로그인</Button>
        </form>
      </div>
      <div className={styled.socialLogin}>
        <div className={styled.loginType}>소셜 로그인</div>
        <div className={styled.socialLoginBox}>
          <button className={styled.naverLogin}>
            <div></div>
            naver
          </button>
          <button className={styled.kakaoLogin}>
            <div></div>
            kakao
          </button>
        </div>
      </div>
      <Link to='/join' className={styled.joinLink}>회원가입</Link>
    </div>
  )
      
}
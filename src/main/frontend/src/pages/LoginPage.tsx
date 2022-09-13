import Button from "../components/Button";
import FormLayout from "../components/FormLayout";
import styled from "./LoginPage.module.css"

export default function LoginPage() {
  
  return(
    <div className={styled.loginPage}>
      <FormLayout>
        <div className={styled.emailLogin}>
          <div>이메일 로그인</div>
          <form>
            <input type='text' placeholder="email" className="inputForm" required/>
            <input 
              type='password' 
              placeholder="password" 
              className="inputForm" 
              autoComplete="on"
              required/>
            <Button>로그인</Button>
          </form>
        </div>
        <div className={styled.socialLogin}>
          <div>소셜 로그인</div>
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
        <a href="/" className={styled.joinLink}>회원가입</a>
      </FormLayout>
    </div>
  )
      
}
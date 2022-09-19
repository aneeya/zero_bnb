import { useContext } from "react"
import { useNavigate } from "react-router-dom"
import HostTabComponent from "../components/layout/HostTabComponent"
import PopUpLayout from "../components/layout/PopUpLayout"
import ico from '../img/jjangkoo.png'
import { hostInfoStore } from "../store/HostInfoStore"

export default function HostPage() {
  const findHonst = useContext(hostInfoStore)
  const { active } = findHonst[0]
  console.log(active)
  const nav = useNavigate()

  console.log(findHonst)
  const prop = {
    text: '호스트 정보가 존재하지 않습니다',
    subText: '호스트가 되어보세요',
    img: ico,
    page: '호스트 등록 하기',
    toPage: '/host/register',
    close: () => nav('/')
  }
  const notHost = <PopUpLayout {...prop}></PopUpLayout>
  

  return(
    <div className="mainLayout" >
    <HostTabComponent />
    {!active && notHost}
    </div>
  )
}
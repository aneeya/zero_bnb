import { List } from "../../store/HostInfoStore"

interface Prop {
  modifyInfo: List
}

export default function HostInfoTable({modifyInfo}: Prop) {
  
  const { name, businessContact, companyRegistrationNumber, email } = modifyInfo

  return(
    <table>
      <tbody>
        <tr>
          <th scope='row'>호스트명</th>
          <td>{name}</td>
        </tr>
        <tr>
          <th scope='row'>연락처</th>
          <td>{businessContact}</td>
        </tr>
        <tr>
          <th scope='row'>사업자 등록 번호</th>
          <td>{companyRegistrationNumber}</td>
        </tr>
        <tr>
          <th scope='row'>이메일</th>
          <td>{email}</td>
        </tr>
      </tbody>
    </table>
  )
}
   
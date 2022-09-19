import { createContext, ReactNode } from "react"
import ico from "../img/smile.png"

export type List = {
  'businessContact': string,
  'companyRegistrationNumber': string,
  'email': string,
  'name': string,
  'profileImage': string,
  'active': boolean
}



const hostInfoList: List[] = [
  {
    'businessContact': '',
  'companyRegistrationNumber': '',
  'email': '',
  'name': '',
  'profileImage': ico,
  'active': false
  }
] 

export const hostInfoStore = createContext(hostInfoList)

export default function HostInfoStore({children}: {children: ReactNode}) {
  return (
    <hostInfoStore.Provider value={hostInfoList}>{children}</hostInfoStore.Provider>
  )
}
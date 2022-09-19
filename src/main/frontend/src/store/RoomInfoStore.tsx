import { createContext, ReactNode } from "react"

interface RoomInfo {
  type?: string;
  address?: string;
  description?: string;
  locationPosition?: {
      latitude?: number;
      longitude?: number;
  };
  name?: string;
  notice?: string;
  policy?: string;
  eventInputs?: {
      description: string;
  }[];
  popularFacilityServiceInputs?: {
    popularFacilityServiceType: number;
  }[];
  accommodationImageInputs?: {
    url: string;
  }[];
}


 const roomInfoList: RoomInfo[] = [
  {
    "type": "",
    "address": "",
    "description": "",
    "locationPosition": {
    },
    "name": "",
    "notice": "",
    "policy": "",
    "eventInputs": [
      
    ],
    "popularFacilityServiceInputs": [
    ],
    "accommodationImageInputs": [
    ]
  }
]




export const roomInfoStore = createContext(roomInfoList) 

export default function RoomInfoSore({children}: {children: ReactNode}) {
  return(
    <roomInfoStore.Provider value={roomInfoList}>{children}</roomInfoStore.Provider>
  )
}
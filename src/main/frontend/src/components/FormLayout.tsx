import React, { ReactNode } from "react"
import styled from "./FormLayout.module.css"

export default function FormLayout({children}: {children: ReactNode}) {
  return (
    <div className={styled.layout}>
      {children}
    </div>
  )
}
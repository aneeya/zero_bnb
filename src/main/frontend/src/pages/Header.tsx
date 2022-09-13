import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderComponents from '../components/layout/HeaderComponents'

export default function Header() {
  return (
    <>
      <HeaderComponents/>
      <Outlet/>
    </>
  )
}

import React from 'react'
import Nav from '../Navigation/Nav'
import Foot from '../Footer/Foot'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <>
    <Nav/>
    <Outlet/>
    <Foot/>
    </>
  )
}

export default Layout
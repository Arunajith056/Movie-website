import React from 'react'
import {Outlet } from 'react-router-dom'
import Footerpart from './Footerpart'

const Layout = () => {
  return (<>
    <Outlet />
    <Footerpart />
 </> )
}
export default Layout
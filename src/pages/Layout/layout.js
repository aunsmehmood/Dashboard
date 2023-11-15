import React from 'react'
import ResponsiveDrawer from '../Navbar'

export default function Layout({children}) {
  return (
    <React.Fragment>
        <ResponsiveDrawer />
        {children}
    </React.Fragment>
  )
}

import React from 'react'
import  Header from '../Header/Header.jsx'
import Middle from '../../Component/Middle/Middle.jsx'
import Footer from '../../Component/Foooter/Footer.jsx'

function Layout({children}) {
  return (
    <div>
        <Header />
        {children}
        <Middle />
        <Footer />
    </div>
  )
}

export default Layout

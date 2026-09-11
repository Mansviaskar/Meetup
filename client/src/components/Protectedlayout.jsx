import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Protectedlayout = () => {
  return (
    <div
      className="min-h-screen flex flex-col font-sans bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/layout_bg.png')",
      }}
    >
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  )
}

export default Protectedlayout
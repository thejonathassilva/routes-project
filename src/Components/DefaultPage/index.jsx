import React from 'react'
import Banner from 'Components/Banner'
import { Outlet } from 'react-router-dom'

export default function DefaultPage() {
  return (
    <main>
      <Banner />

      <Outlet />
    </main>
  )
}

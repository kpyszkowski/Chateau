import React from 'react'
import AppLayout from '../components/molecules/AppLayout/AppLayout'
import Sidebar from '../components/organisms/Sidebar/Sidebar'
import 'twin.macro'

const DashboardPage = () => (
  <AppLayout renderAside={() => <Sidebar />}>
    <span tw="text-6xl">Conversation here</span>
  </AppLayout>
)

export default DashboardPage

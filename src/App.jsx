import React from 'react'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import SideBar from './components/SideBar/SideBar'
import GreetMessage from './components/Dashboard/GreetMessage'
import AccountsBalance from './components/Dashboard/AccountsBalance'
import AccountsLayout from './components/Accounts/AccountsLayout'
import FundTransferLayout from './components/FundTransfer/FundTransferLayout'
import BillPaymentsLayout from './components/BillPayments/BillPaymentsLayout'
import CardsPageLayout from './components/Cards/CardsPageLayout'
import ProfileLayout from './components/Profile/ProfileLayout'

const App = () => {
  return (
    <div className='bg-[#f4f7fc]'>
      {/* <DashboardLayout /> */}
      {/* <AccountsLayout /> */}
      {/* <FundTransferLayout /> */}
      {/* <BillPaymentsLayout /> */}
      {/* <CardsPageLayout /> */}
      <ProfileLayout />
    </div>
  )
}

export default App
import React from 'react'
import Login from './components/Login/Login'
import Navbar from './components/Navbar/Navbar'
import DashboardLayout from './components/Dashboard/DashboardLayout'
import SideBar from './components/SideBar/SideBar'
import GreetMessage from './components/Dashboard/GreetMessage'
import AccountsBalance from './components/Dashboard/AccountsBalance'
import AccountsLayout from './components/Accounts/AccountsLayout'
import FundTransferLayout from './components/FundTransfer/FundTransferLayout'
import BillPaymentsLayout from './components/BillPayments/BillPaymentLayout'
import CardsPageLayout from './components/Cards/CardsPageLayout'
import ProfileLayout from './components/Profile/ProfileLayout'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import TransactionsLayout from './components/Transactions/TransactionsLayout'

const App = () => {
  return (
    <BrowserRouter>
      <div className='bg-[#f4f7fc] min-h-screen'>
        <Routes>
          {/* Initial Route */}
          <Route path='/' element={<Navigate to="/dashboard" replace />} />

          <Route path='/dashboard' element={<DashboardLayout />} />
          <Route path='/accounts' element={<AccountsLayout />} />
          {/* <Route path='/transactions' element={<TransactionsLayout />} /> */}
          <Route path='/transfer' element={<FundTransferLayout />} />
          <Route path='/cards' element={<CardsPageLayout />} />
          <Route path='/bill-payments' element={<BillPaymentsLayout />} />
          <Route path='/setting&profile' element={<ProfileLayout />} />

          <Route path='/login' element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
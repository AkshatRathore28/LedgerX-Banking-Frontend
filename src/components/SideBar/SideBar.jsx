import React from 'react'
import LedgerXBankingLogo from "../../../../../Assets/logo2.png"

const SideBar = () => {
     return (
          <div className='h-screen flex flex-col p-4 bg-white border-2 border-gray-100 shadow-lg'>
               <div id='logo' className='h-50p-5 mb-5'>
                    <img src={LedgerXBankingLogo} alt="" />
               </div>
               <div id='optionsContainer' className='flex flex-col justify-between h-full'>
                    <div id='options' className='flex flex-col  gap-4 px-1 py-2 '>
                         <button className='px-2 py-3 rounded-xl cursor-pointer font-bold text-blue-500 bg-blue-100 w-full'>Dashboard</button>
                         <button className='px-2 py-2 rounded-xl cursor-pointer font-bold text-blue-500 bg-blue-100 w-full'>Accounts</button>
                         <button className='px-2 py-2 rounded-xl cursor-pointer font-bold text-blue-500 bg-blue-100 w-full'>Transaction</button>
                         <button className='px-2 py-2 rounded-xl cursor-pointer font-bold text-blue-500 bg-blue-100 w-full'>Transfer</button>
                         <button className='px-2 py-2 rounded-xl cursor-pointer font-bold text-blue-500 bg-blue-100 w-full'>Cards</button>
                         <button className='px-2 py-2 rounded-xl cursor-pointer font-bold text-blue-500 bg-blue-100 w-full'>Bill Payments</button>
                         <button className='px-2 py-2 rounded-xl cursor-pointer font-bold text-blue-500 bg-blue-100 w-full'>Setting</button>
                    </div>
                    <div id='LogoutBtn' className='flex flex-col  gap-4 px-1 py-2 items-start'>
                         <button className='px-2 py-2 rounded-xl cursor-pointer font-bold text-red-500 bg-red-100 w-full'>Logout</button>
                    </div>
               </div>
          </div>
     )
}

export default SideBar
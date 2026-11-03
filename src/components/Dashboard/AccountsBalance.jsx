import React, { useState } from 'react'

const AccountsBalance = () => {
     const [accountsBalance, setAccountsBalance] = useState([
          {
               accountType: "Saving Account",
               accountNumber: 123456789,
               accountBalance: 1234.25,
               accountLogo: "",
               message: "Available Balance",
          },
          {
               accountType: "Current Account",
               accountNumber: 123456789,
               accountBalance: 1234.25,
               accountLogo: "",
               message: "Available Balance",
          },
          {
               accountType: "Total Balance",
               accountNumber: 123456789,
               accountBalance: 1234.25,
               accountLogo: "",
               message: "Access 2 Accounts",
          },
     ])
     return (
          <div className='flex gap-5' id='AccountsDetailContainer'>
               <div id='SavingAccountContainer' className='border bg-white border-gray-100 shadow-sm rounded-2xl p-5 h-full w-1/2 '>
                    {/* Saving Account Top Section */}
                    <div className='flex justify-between px-2 py-2'>
                         {/* Icon Div of Top Section */}
                         <div className='bg-green-100 p-3 rounded-2xl'>{/* Icon div Container */}
                              <i class="ri-bank-fill text-green-600 text-3xl"></i>
                         </div>

                         {/* Accont Type and Number of top section */}
                         <div>
                              <h2 className='font-bold text-gray-600'>Saving Account</h2>
                              <h4 className='font-semibold text-gray-600'>**** 8789</h4>
                         </div>
                    </div>

                    {/* Saving Account Bottom Section */}
                    <div className='flex flex-col pl-5'>
                         <h1 className='text-3xl font-semibold'><span className='text-4xl font-bold'>₹</span>12,12,222</h1>
                         <h3 className='text-gray-600 font-semibold'>Available Balance</h3>
                    </div>
               </div>
               <div id='SavingAccountContainer' className='bg-white border border-gray-100 shadow-sm rounded-2xl p-5 h-full w-1/2 '>
                    {/* Saving Account Top Section */}
                    <div className='flex justify-between px-2 py-2'>
                         {/* Icon Div of Top Section */}
                         <div className='bg-blue-100 p-3 rounded-2xl'>{/* Icon div Container */}
                              <i class="ri-bank-fill text-blue-600 text-3xl"></i>
                         </div>

                         {/* Accont Type and Number of top section */}
                         <div>
                              <h2 className='font-bold text-gray-600'>Current Account</h2>
                              <h4 className='font-semibold text-gray-600'>**** 8789</h4>
                         </div>
                    </div>

                    {/* Saving Account Bottom Section */}
                    <div className='flex flex-col pl-5'>
                         <h1 className='text-3xl font-semibold'><span className='text-4xl font-bold'>₹</span>12,12,222</h1>
                         <h3 className='text-gray-600 font-semibold'>Available Balance</h3>
                    </div>
               </div>
               <div id='SavingAccountContainer' className='bg-white border border-gray-100 shadow-sm rounded-2xl p-5 h-full w-1/2 '>
                    {/* Saving Account Top Section */}
                    <div className='flex justify-between px-2 py-2'>
                         {/* Icon Div of Top Section */}
                         <div className='bg-blue-100 p-3 rounded-2xl'>{/* Icon div Container */}
                              <i class="ri-wallet-3-fill  text-blue-600 text-3xl"></i>
                         </div>

                         {/* Accont Type and Number of top section */}
                         <div>
                              <h2 className='font-bold text-gray-600'>Total Balance</h2>
                              <h4 className='font-semibold text-gray-600'>**** 8789</h4>
                         </div>
                    </div>

                    {/* Saving Account Bottom Section */}
                    <div className='flex flex-col pl-5 '>
                         <h1 className='text-3xl font-semibold'><span className='text-4xl font-bold'>₹</span>12,12,222</h1>
                         <h3 className='text-gray-600 font-semibold'>Available Balance</h3>
                    </div>
               </div>
          </div>
     )
}

export default AccountsBalance
import React from 'react'
import SideBar from '../SideBar/SideBar'
import Navbar from '../Navbar/Navbar'

const AccountsLayout = () => {
     return (
          <div
               id="DashboardContainer"
               className="flex h-screen w-full overflow-hidden"
          >

               <div id="SideBar" className="bg-green-300 w-1/6 h-full shrink-0 shadow-xl">

                    <SideBar />
               </div>
               <div className=" w-full min-w-0 h-full flex flex-col">

                    <div className="bg-white h-[10%] shrink-0 py-5 items-center border-2 border-gray-100 shadow-lg"> <Navbar /> </div>

                    <div id="MainContent" className="flex flex-1 flex-col min-h-0 min-w-0 gap-3 bg-red-300 p-3">
                         {/* Main Container cotain 4 section  */}

                         {/* Heading Section*/}
                         <h1 className='bg-green-200 h-[5%] text-2xl font-bold'>My Accounts</h1>

                         {/* Accounts Types */}
                         <div id="accountsTypeContainer" className='bg-yellow-300 flex justify-evenly items-center h-full p-4 gap-10 rounded-xl shadow-lg'>
                              <div id="savingAccount" className='h-full w-1/3 bg-purple-300 rounded-xl border border-gray-300'>
                                   Saving Account
                              </div>
                              <div id="currentAccount" className='h-full w-1/3 rounded-xl bg-blue-400 border border-gray-300'>
                                   Current Account
                              </div>
                         </div>

                         {/* Account Information Section */}
                         <div className='bg-white  h-full rounded-xl shadow-lg'>
                              <h1 className='text-xl font-bold py-1 border-b border-gray-100 shadow-sm'>Account Information</h1>
                              <div id='accountInfos'>

                              </div>
                         </div>

                         {/* Recent Transactions */}
                         <div className='bg-blue-200 h-full rounded-xl shadow-lg'>
                              <h1>Recent Transaction</h1>
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default AccountsLayout
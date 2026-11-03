import React from 'react'
import Search from '../SearchBar/Search'
import SideBar from '../SideBar/SideBar'
import RecentTransaction from './RecentTransaction'

const FundTransferLayout = () => {
     return (
          <div
               id="DashboardContainer"
               className="flex h-full w-full overflow-hidden"
          >

               <div id="SideBar" className=" w-1/6 h-full shrink-0 shadow-xl">
                    <SideBar />
               </div>
               <div className=" w-full min-w-0 flex flex-col m-3">
                    <div> <Search /> </div>
                    <h1 className='text-2xl font-bold p-2 mx-5'>Transfer Money</h1>
                    <div id='transferMoneyContainer' className=' w-full h-full flex'>
                         <div id="transferMoneyLeft" className=' rounded-xl w-1/1 m-3'>

                              <div id='moneyTransfreOptions' className=' flex flex-col p-4'>
                                   <div className=' w-full h-[3rem] flex justify-around rounded-t-xl'>
                                        <button className='bg-gray-200  h-full w-1/2 rounded-tl-xl'>To Account</button>
                                        <button className='bg-gray-200  h-full w-1/2 '>To UPI</button>
                                        <button className='bg-gray-200
                                         w-1/2 h-full rounded-tr-xl'>To Beneficiary</button>
                                   </div>

                                   {/* Money Transfer Option ka form */}
                                   <div className=''>
                                        {/* From Account */}
                                        <div id='FromAccont' className=' my-5'>
                                             <h1 className='text-lg font-bold text-gray-600'>From Account</h1>
                                             <div className="flex items-center bg-white justify-between w-full pr-5 border-2 border-gray-200 p-2 rounded-lg">
                                                  <select
                                                       name="cars"
                                                       id="cars"
                                                       className="w-full outline-none"
                                                  >
                                                       <option value="Saving Account">Saving Account - **** **** 4568</option>
                                                       <option value="Current Account">Current Account - **** **** 6523</option>
                                                  </select>
                                             </div>
                                        </div>

                                        {/* To Account Number */}
                                        <div id='FromAccont' className='my-5'>
                                             <h1 className='text-lg font-bold text-gray-600'>To Account Number</h1>
                                             <input type='number' className="flex items-center bg-white justify-between w-full pr-5 border-2 border-gray-200 p-2 rounded-lg outline-none" placeholder='Enter account number'>
                                             </input>
                                        </div>

                                        {/* Amount */}
                                        <div id='FromAccont' className=' my-5'>
                                             <h1 className='text-lg font-bold  text-gray-600'>Amount</h1>
                                             <input type='number' className="flex bg-white items-center justify-between w-full pr-5 border-2 border-gray-200 p-2 rounded-lg outline-none" placeholder='Enter Amount'>
                                             </input>
                                        </div>

                                        {/* Remarks */}
                                        <div id='FromAccont' className=' my-5'>
                                             <h1 className='text-lg font-bold text-gray-600'>Remarks (Opional)</h1>
                                             <input type='number' className="flex bg-white items-center justify-between w-full pr-5 border-2 border-gray-200 p-2 rounded-lg outline-none" placeholder='e.g. Rent, Bill, etc.'>
                                             </input>
                                        </div>

                                        {/* Continue Button */}
                                        <button className='bg-blue-600 text-white text-xl w-full py-2 rounded-xl font-bold'>Continue</button>


                                   </div>
                              </div>
                         </div>
                         <div id="transferMoneyRight" className='bg-blue-50 w-1/2 m-3 border-2 border-gray-200 rounded-2xl overflow-hidden shadow-lg'>
                              <RecentTransaction />
                         </div>
                    </div>
               </div>
          </div>
     )
}

export default FundTransferLayout
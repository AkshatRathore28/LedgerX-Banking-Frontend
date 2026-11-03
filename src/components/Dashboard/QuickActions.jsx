import React from 'react'

const QuickActions = () => {
     return (
          <div className='w-full flex-1 min-h-0 border-2 border-gray-100 shadow-lg rounded-lg flex flex-col flex-wrap  gap-2 p-2'>
               <div><h1 className='font-bold text-lg px-4'>Quick Actions</h1></div>
               <div className="w-full flex-1 min-h-0 rounded-lg flex flex-wrap justify-evenly items-center gap-2">

                    <div className="w-[40%] h-[40%] rounded-lg flex justify-evenly items-center flex-col">
                         <i class="ri-arrow-left-right-fill px-5 py-4 font-bold text-blue-600 bg-blue-200 rounded-2xl text-2xl" ></i>
                         <h1 className='font-semibold text-gray-700 text-lg'>Transfer Money</h1>
                    </div>
                    <div className="w-[40%] h-[40%] rounded-lg flex justify-evenly items-center flex-col">
                         <i class="ri-bill-fill px-5 py-4 font-bold text-blue-600 bg-blue-200 rounded-2xl text-2xl" ></i>
                         <h1 className='font-semibold text-gray-700 text-lg'>Bill Payment</h1>
                    </div>
                    <div className="w-[40%] h-[40%] rounded-lg flex justify-evenly items-center flex-col">
                         <i class="ri-smartphone-line px-5 py-4 font-bold text-purple-600 bg-purple-200 rounded-2xl text-2xl" ></i>
                         <h1 className='font-semibold text-gray-700 text-lg'>Mobile Recharge</h1>
                    </div>
                    <div className="w-[40%] h-[40%] rounded-lg flex justify-evenly items-center flex-col">
                         <i class="ri-money-dollar-box-line px-5 py-4 font-bold text-green-600 bg-green-200 rounded-2xl text-2xl" ></i>
                         <h1 className='font-semibold text-gray-700 text-lg'>Fixed Deposit</h1>
                    </div>
               </div>
          </div>

     )
}

export default QuickActions
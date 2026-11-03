import React from 'react'

const RecentTransaction = () => {
     return (
          <div className='p-5  h-full '>
               <h1 className='font-bold text-xl '>Recent Transaction</h1>
               <div id='transactions' className=' '>
                    <div id='person1' className=' flex justify-between mt-7 p-1 border-t-2 border-gray-200 border-b-2 '>
                         <h1 className='font-bold  flex flex-col'>Akshat Rathore<span className='font-normal text-gray-700'>24 Sept 2024</span></h1>
                         <h1>+10000</h1>
                    </div>
                    <div id='person1' className=' flex justify-between mt-10 p-1 border-t-2 border-gray-200 border-b-2 '>
                         <h1 className='font-bold  flex flex-col'>Akshat Rathore<span className='font-normal text-gray-700'>24 Sept 2024</span></h1>
                         <h1>+10000</h1>
                    </div>
                    <div id='person1' className=' flex justify-between mt-10 p-1 border-t-2 border-gray-200 border-b-2 '>
                         <h1 className='font-bold  flex flex-col'>Akshat Rathore<span className='font-normal text-gray-700'>24 Sept 2024</span></h1>
                         <h1>+10000</h1>
                    </div>
                    <div id='person1' className=' flex justify-between mt-10 p-1 border-t-2 border-gray-200 border-b-2 '>
                         <h1 className='font-bold  flex flex-col'>Akshat Rathore<span className='font-normal text-gray-700'>24 Sept 2024</span></h1>
                         <h1>+10000</h1>
                    </div>
               </div>
               <div><h1 className='text-blue-500 font-bold text-lg mt-5'>View All</h1></div>
          </div>
     )
}

export default RecentTransaction
import React from 'react'

const Categories = () => {
     return (
          <div>
               < div id='logo' className='h-50p-5 mb-5' >
                    <h1 className='font-bold text-xl'>Categories</h1>
               </ div>
               <div id='optionsContainer' className='flex flex-col h-full'>
                    <div id='options' className='flex flex-col  gap-4 px-1 py-2 w-full'>
                         <button className='px-2 py-3 rounded-xl cursor-pointer font-bold text-left  px-10 text-blue-500 bg-blue-100  w-full'>Mobile Recharges</button>
                         <button className='py-2 rounded-xl cursor-pointer font-bold text-left  px-10 text-gray-500  w-full'>Electricity</button>
                         <button className='py-2 rounded-xl cursor-pointer font-bold text-left  px-10 text-gray-500  w-full'>Water</button>
                         <button className='py-2 rounded-xl cursor-pointer font-bold text-left  px-10 text-gray-500  w-full'>DTH</button>
                         <button className='py-2 rounded-xl cursor-pointer font-bold text-left  px-10 text-gray-500  w-full'>BroadBand</button>
                         <button className='py-2 rounded-xl cursor-pointer font-bold text-left  px-10 text-gray-500  w-full'>Gas</button>
                         <button className='py-2 rounded-xl cursor-pointer font-bold text-left  px-10 text-gray-500  w-full'>LandLine</button>
                    </div>
               </div>
          </div >
     )
}

export default Categories
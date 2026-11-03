import React from 'react'

const GreetMessage = () => {
     const userName = "Akshat";
     return (
          <div className='h-full w-full bg-blue-600 py-2 px-5 gap-5 flex justify-between items-center rounded-2xl overflow-hidden'>
               <div id="text">
                    <h1 className='font-bold text-white '>Good Morning, {userName}!</h1>
                    <h3 className='text-white'>Here's your account summary for today</h3>
               </div>
               <div id="bankIcon">
                    <i class="ri-bank-fill text-white text-8xl opacity-25"></i>
               </div>
          </div>
     )
}

export default GreetMessage
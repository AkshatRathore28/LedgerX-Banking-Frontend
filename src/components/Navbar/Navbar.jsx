import React from 'react'

const Navbar = () => {
     return (
          <div id='navContainer' className='flex justify-between px-5 h-full'>
               <div className='bg-gray-100 px-5 border-[0.5] py-2 w-1/2 rounded-xl flex gap-5 items-center shadow-black'>
                    <i class="ri-search-line"></i>
                    <h2 className='text-gray-600'>Search by name, account number, or UPI ID...</h2>
               </div>
               <div className='flex gap-5 px-5 items-center'>
                    <div className=''>
                         <i class="ri-notification-3-line"></i>
                    </div>
                    <div>
                         <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHByb2ZpbGUlMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D" alt="profile img"
                              className='h-10 w-10 rounded-full'
                         />
                    </div>
                    <div className='flex gap-4'>
                         <h3 className='font-bold'>User Name</h3>
                         <i class="ri-arrow-down-wide-fill"></i>
                    </div>
               </div>
          </div>
     )
}

export default Navbar
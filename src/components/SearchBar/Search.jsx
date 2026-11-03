import React from 'react'

const Search = () => {
     return (
          <div id='navContainer' className='flex justify-between px-5 py-4 h-full relative'>
               <div className='bg-white px-5 border-[0.5] py-2 w-full rounded-xl flex gap-5 items-center shadow-lg'>
                    <i class="ri-search-line"></i>
                    <input type="text" className='text-gray-600 border-none w-full outline-0' placeholder='Search by name, account number, or UPI ID....' />
               </div>
          </div>
     )
}

export default Search
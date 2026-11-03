import React from 'react'
import JioLogo from "../../assets/MobileNetworkCompanyLogo/images.png"
import AirtelLogo from "../../assets/MobileNetworkCompanyLogo/images.jpg"
import VILogo from "../../assets/MobileNetworkCompanyLogo/images (1).png"
import BSNLlogo from "../../assets/MobileNetworkCompanyLogo/images (1).jpg"

const SelectedCategories = () => {
     return (
          <div className='flex flex-col gap-5 px-5 h-full'>
               <h1 className=' py-4 font-bold text-xl'>Mobile Recharge</h1>
               <div className='bg-white h-1/2 flex flex-col gap-5' id='inputs'>

                    {/* Mobile Number */}
                    <div>
                         <h1 className='text-lg font-semibold text-gray-600'>Mobile Number</h1>
                         <input type="number" placeholder='Enter 10 digit mobile number' className='flex items-center  justify-between w-full pr-5 border-2 border-gray-200 p-2 rounded-lg outline-none bg-gray-150' />
                    </div>

                    {/* Operators */}
                    <div id='Operators'>
                         <h1 className='text-lg font-semibold text-gray-600'>Operators</h1>
                         <div className="flex items-center bg-gray-50 justify-between w-full pr-5 border-2 border-gray-200 p-2 rounded-lg outline-none">
                              <select
                                   name="cars"
                                   id="cars"
                                   className="w-full outline-none"
                              >
                                   <option value="Airtel">Airtel</option>
                                   <option value="JIO">JIO</option>
                                   <option value="VI ">VI</option>
                                   <option value="VI ">BSNL</option>
                              </select>
                         </div>
                    </div>

                    {/* Amount */}
                    <div>
                         <h1 className='text-lg font-semibold text-gray-600'>Mobile Number</h1>
                         <input type="number" placeholder='Enter 10 digit mobile number' className='flex items-center bg-gray-50 justify-between w-full pr-5 border-2 border-gray-200 p-2 rounded-lg outline-none' />
                    </div>

                    {/* Payment */}
                    <div>
                         <button className=' text-white font-bold bg-blue-500 w-full pr-5 border-2 border-gray-200 p-2 rounded-lg outline-none'>Proceed to payment </button>
                    </div>
               </div>
               <div className='h-1/3 flex flex-col' id='popular&recent'>
                    <h1 className='font-semibold text-xl text-gray-700'>Popular & Recent</h1>
                    <div id='companyContainer' className='flex gap-3 justify-between px-5 py-4 mt-5 h-full'>
                         <div className='border-2 bg-blue-50 w-1/2 border-gray-100 rounded-lg flex justify-between items-center flex-col shadow-sm'>
                              <img src={JioLogo} alt="logo" className='rounded-full h-25 w-25' />
                              <h1 className='font-medium text-gray-600'>Jio</h1>
                         </div>
                         <div className='border-2 bg-blue-50 w-1/2 border-gray-100 rounded-lg flex justify-between items-center flex-col shadow-sm'>
                              <img src={AirtelLogo} alt="logo" className='rounded-full h-25 w-25' />
                              <h1 className='font-medium text-gray-600'>Airtel</h1>
                         </div>
                         <div className='border-2 bg-blue-50 w-1/2 border-gray-100 rounded-lg flex justify-between items-center flex-col shadow-sm'>
                              <img src={BSNLlogo} alt="logo" className='rounded-full h-25 w-25' />
                              <h1 className='font-medium text-gray-600'>BSNL</h1>
                         </div>
                         <div className='border-2 bg-blue-50 w-1/2 border-gray-100 rounded-lg flex justify-between items-center flex-col shadow-sm'>
                              <img src={VILogo} alt="logo" className='rounded-full h-25 w-25' />
                              <h1 className='font-medium text-gray-600'>BSNL</h1>
                         </div>


                    </div>
               </div>
          </div>
     )
}

export default SelectedCategories
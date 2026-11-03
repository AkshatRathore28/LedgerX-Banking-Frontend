import React from 'react'
import visaCardImg from "../../assets/VisaCardLayout/94d0dfa6-e5b5-4c8e-bdc1-e77e2b0ee488.png";
const VisaCard = () => {
     return (
          <div className='flex justify-between h-full gap-5'>
               <div
                    id="cardImage"
                    className="relative m-2 w-[50%] overflow-hidden rounded-2xl"
               >
                    {/* Card Background Image */}
                    <img
                         src={visaCardImg}
                         className="block w-full h-auto"
                         alt="LedgerXbank Card"
                    />

                    {/* Card Details */}
                    <div className="absolute bottom-[20%] left-[6%] right-[6%]
                  rounded-xl p-4 shadow-lg gap-5">

                         <p className="text-lg text-white">
                              Card Holder
                         </p>

                         <h3 className="font-bold text-xl text-white">
                              Akshat Rathore
                         </h3>

                         <div className="mt-3 flex justify-between items-end">
                              <div>
                                   <p className="font-bold text-xl text-white">
                                        •••• 9012
                                   </p>
                              </div>
                              <div>
                                   <p className="text-xs text-white">
                                        Expiry
                                   </p>
                                   <p className="font-medium text-white">
                                        12/28
                                   </p>
                              </div>

                         </div>

                    </div>

               </div>
               <div id='cardOptions' className='flex justify-between flex-col gap-3 py-5 px-5 bg-blue-50 w-[40%] rounded-xl overflow-y-scroll scrollbar-none border-2 border-gray-100 shadow-lg'>
                    <button className='bg-blue-100 py-3 px-4 rounded-xl text-lg font-semibold text-gray-600 shadow-sm border-0 border-gray-100 cursor-pointer'>Block Card</button>
                    <button className='bg-blue-100 py-3 px-4 rounded-xl text-lg font-semibold text-gray-600 shadow-sm border-0 border-gray-100 cursor-pointer'>Set Limits</button>
                    <button className='bg-blue-100 py-3 px-4 rounded-xl text-lg font-semibold text-gray-600 shadow-sm border-0 border-gray-100 cursor-pointer'>View PIN</button>
                    <button className='bg-blue-100 py-3 px-4 rounded-xl text-lg font-semibold text-gray-600 shadow-sm border-0 border-gray-100 cursor-pointer'>Card Setting</button>
               </div>
          </div>
     )
}

export default VisaCard
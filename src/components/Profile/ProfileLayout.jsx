import React from 'react'
import SideBar from "../SideBar/SideBar"
const ProfileLayout = () => {
     return (
          <div
               id="DashboardContainer"
               className="flex h-screen w-full overflow-hidden"
          >

               <div id="SideBar" className=" w-1/6 h-full shrink-0 shadow-xl">

                    <SideBar />
               </div>
               <div className=" w-full min-w-0 rounded-xl my-2 mx-5 border-2 border-gray-200 shadow-lg  flex flex-col p-2 gap-3 bg-white">
                    <h1 className=' font-bold text-2xl py-3 w-full'>Profile & Setting</h1>

                    {/* Profile Info Container */}
                    <div className='bg-red-300 p-1 h-full w-full flex gap-10'>

                         {/* Profile Card */}
                         <div className='bg-purple-100 w-1/2 h-full rounded-xl border-2 border-gray-100 shadow-lg'></div>

                         {/* Profile Information */}
                         <div className='bg-green-100 w-full h-full rounded-xl border-2 border-gray-100 shadow-lg'></div>
                    </div>

               </div>
          </div>
     )
}

export default ProfileLayout
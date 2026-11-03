import React from 'react'
import SideBar from '../SideBar/SideBar'
import Navbar from "../Navbar/Navbar"
import VisaCard from './VisaCard'
const CardsPageLayout = () => {
     return (
          <div
               id="DashboardContainer"
               className="flex h-screen w-full overflow-hidden"
          >

               <div id="SideBar" className=" w-1/6 h-full shrink-0 shadow-xl">

                    <SideBar />
               </div>
               <div className=" w-full min-w-0 rounded-xl my-2 mx-5 border-2 border-gray-200 shadow-lg  flex flex-col p-2 gap-3">
                    <h1 className=' font-bold text-2xl py-3 w-full'>My Cards</h1>
                    <div className='h-[50%]'>
                         <VisaCard />
                    </div>
               </div>
          </div>
     )
}

export default CardsPageLayout
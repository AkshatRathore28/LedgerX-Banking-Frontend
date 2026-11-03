import React from 'react'
import Search from '../SearchBar/Search'
import SideBar from '../SideBar/SideBar'
import Categories from './Categories'
import SelectedCategories from './SelectedCategories'

const BillPaymentsLayout = () => {
     return (
          <div
               id="DashboardContainer"
               className="flex h-screen w-full overflow-hidden gap-10"
          >
               <div id="SideBar" className=" w-1/6 h-full shrink-0 shadow-xl">
                    <SideBar />
               </div>
               <div id='MyCardContainer' className='bg-red-200 w-full h-full'>Hello</div>

          </div>
     )
}

export default BillPaymentsLayout
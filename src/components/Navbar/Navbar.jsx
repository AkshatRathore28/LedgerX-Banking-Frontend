
import React from "react";

const Navbar = () => {
     return (
          <div
               id="navContainer"
               className="flex items-center justify-between w-full h-full gap-4 px-3 sm:px-5"
          >
               {/* Search Bar */}
               <div className="flex items-center gap-3 w-full sm:w-1/2 min-w-0 px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-100 transition-all">
                    <i className="ri-search-line text-gray-400 text-xl shrink-0"></i>

                    <input
                         type="search"
                         placeholder="Search by name, account number, or UPI ID..."
                         className="w-full min-w-0 bg-transparent outline-none text-sm text-gray-700 placeholder:text-gray-400"
                    />
               </div>

               {/* Right Section */}
               <div className="flex items-center gap-3 sm:gap-5 shrink-0">

                    {/* Notifications */}
                    <button
                         type="button"
                         aria-label="Notifications"
                         className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
                    >
                         <i className="ri-notification-3-line text-xl text-gray-600"></i>
                         <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-red-500"></span>
                    </button>

                    {/* Profile Image */}
                    <img
                         src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=600&auto=format&fit=crop&q=60"
                         alt="User profile"
                         className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover shrink-0"
                    />

                    {/* User Details */}
                    <div className="hidden sm:flex items-center gap-3 cursor-pointer">
                         <h3 className="font-semibold text-sm text-gray-700 whitespace-nowrap">
                              User Name
                         </h3>

                         <i className="ri-arrow-down-wide-fill text-gray-500"></i>
                    </div>

               </div>
          </div>
     );
};

export default Navbar;


import React, { useState } from "react";
import LedgerXBankingLogo from "../../../../../Assets/logo2.png";
import "remixicon/fonts/remixicon.css";
import { Link } from "react-router-dom";

const SideBar = () => {
     const [activeMenu, setActiveMenu] = useState("Dashboard");
     const [isOpen, setIsOpen] = useState(false);

     const menuItems = [
          { name: "Dashboard", icon: "ri-dashboard-line", route: "/dashboard" },
          { name: "Accounts", icon: "ri-bank-line", route: "/accounts" },
          { name: "Transactions", icon: "ri-exchange-funds-line", route: "/transactions" },
          { name: "Transfer", icon: "ri-send-plane-line", route: "/transfer" },
          { name: "Cards", icon: "ri-bank-card-line", route: "/cards" },
          { name: "Bill Payments", icon: "ri-bill-line", route: "/bill-payments" },
          { name: "Settings", icon: "ri-settings-3-line", route: "/setting&profile" },
     ];

     const handleMenuClick = (name) => {
          setActiveMenu(name);
          setIsOpen(false);
     };

     return (
          <>
               {/* Mobile Menu Button */}
               <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden fixed top-4 left-4 z-50 p-2.5 bg-white shadow-md rounded-lg text-gray-700"
                    aria-label="Toggle sidebar"
               >
                    <i className={`ri-${isOpen ? "close" : "menu"}-line text-xl`}></i>
               </button>

               {/* Mobile Overlay */}
               {isOpen && (
                    <div
                         onClick={() => setIsOpen(false)}
                         className="lg:hidden fixed inset-0 bg-black/40 z-30"
                    />
               )}

               {/* Sidebar */}
               <aside
                    className={`
          fixed lg:sticky top-0 left-0 z-40
          flex flex-col w-64 h-screen
          bg-white border-r border-gray-100
          shadow-sm transition-transform duration-300
          ${isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
        `}
               >
                    {/* Logo */}
                    <div className="h-24 flex items-center justify-center px-6 border-b border-gray-100">
                         <img
                              src={LedgerXBankingLogo}
                              alt="LedgerX Banking"
                              className="max-w-full max-h-14 object-contain"
                         />
                    </div>

                    {/* Navigation */}
                    <nav className="flex-1 flex flex-col justify-between p-4 overflow-y-auto">
                         <div>
                              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider px-3 mb-4">
                                   Main Menu
                              </p>

                              <div className="flex flex-col gap-2">
                                   {menuItems.map((item, idx) => {
                                        const isActive = activeMenu === item.name;

                                        return (
                                             <Link to={item.route} key={idx}>
                                                  <button
                                                       key={item.name}
                                                       onClick={() => handleMenuClick(item.name)}
                                                       className={`
                      flex items-center gap-3 w-full px-4 py-3
                      rounded-xl text-sm font-medium
                      transition-all duration-200
                      ${isActive
                                                                 ? "bg-blue-50 text-blue-600 shadow-sm"
                                                                 : "text-gray-500 hover:bg-gray-50 hover:text-blue-600"
                                                            }
                    `}
                                                  >
                                                       <i className={`${item.icon} text-xl`}></i>
                                                       <span>{item.name}</span>

                                                       {isActive && (
                                                            <span className="ml-auto w-1.5 h-5 bg-blue-600 rounded-full"></span>
                                                       )}
                                                  </button>
                                             </Link>
                                        );
                                   })}
                              </div>
                         </div>

                         {/* Logout */}
                         <div className="pt-4 border-t border-gray-100">
                              <Link to="/login">
                                   <button
                                        onClick={() => {
                                             // Add your logout functionality here
                                        }}
                                        className="
                flex items-center gap-3 w-full px-4 py-3
                rounded-xl text-sm font-semibold
                text-red-500 hover:bg-red-50
                transition-colors duration-200
              "
                                   >
                                        <i className="ri-logout-box-r-line text-xl"></i>
                                        <span>Logout</span>
                                   </button>
                              </Link>

                              <p className="text-center text-xs text-gray-400 mt-4">
                                   LedgerX Banking © 2026
                              </p>
                         </div>
                    </nav>
               </aside>
          </>
     );
};

export default SideBar;

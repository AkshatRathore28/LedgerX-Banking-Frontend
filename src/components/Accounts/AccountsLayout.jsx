
import React from "react";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/Navbar";

const AccountsLayout = () => {
     return (
          <div
               id="AccountsContainer"
               className="flex min-h-screen w-full bg-gray-50"
          >
               {/* Sidebar */}
               <aside
                    id="SideBar"
                    className="hidden lg:block w-1/6 min-w-56 shrink-0 h-screen sticky top-0"
               >
                    <SideBar />
               </aside>

               {/* Main Container */}
               <div className="flex-1 min-w-0 flex flex-col">

                    {/* Navbar */}
                    <header className="h-20 shrink-0 bg-white border-b border-gray-100 shadow-sm flex items-center px-3 sm:px-5">
                         <Navbar />
                    </header>

                    {/* Main Content */}
                    <main
                         id="MainContent"
                         className="flex-1 min-w-0 flex flex-col gap-5 p-4 sm:p-5 lg:p-6"
                    >

                         {/* Heading Section */}
                         <section>
                              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                                   My Accounts
                              </h1>
                              <p className="text-sm text-gray-500 mt-1">
                                   Manage and monitor your banking accounts.
                              </p>
                         </section>

                         {/* Account Types */}
                         <section
                              id="accountsTypeContainer"
                              className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
                         >

                              {/* Saving Account */}
                              <div
                                   id="savingAccount"
                                   className="min-h-48 sm:min-h-52 rounded-2xl bg-white border border-gray-100 shadow-sm p-5 sm:p-6"
                              >
                                   <h2 className="text-lg font-semibold text-gray-800">
                                        Saving Account
                                   </h2>

                                   {/* Saving Account Details */}
                              </div>

                              {/* Current Account */}
                              <div
                                   id="currentAccount"
                                   className="min-h-48 sm:min-h-52 rounded-2xl bg-white border border-gray-100 shadow-sm p-5 sm:p-6"
                              >
                                   <h2 className="text-lg font-semibold text-gray-800">
                                        Current Account
                                   </h2>

                                   {/* Current Account Details */}
                              </div>

                         </section>

                         {/* Account Information */}
                         <section
                              id="accountInformation"
                              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                         >
                              <div className="px-4 sm:px-6 py-4 border-b border-gray-100">
                                   <h2 className="text-lg font-bold text-gray-800">
                                        Account Information
                                   </h2>
                              </div>

                              <div id="accountInfos" className="p-4 sm:p-6">
                                   {/* Account Information Details */}
                              </div>
                         </section>

                         {/* Recent Transactions */}
                         <section
                              id="recentTransactions"
                              className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
                         >
                              <div className="px-4 sm:px-6 py-4 border-b border-gray-100">
                                   <h2 className="text-lg font-bold text-gray-800">
                                        Recent Transactions
                                   </h2>
                              </div>

                              <div className="p-4 sm:p-6">
                                   {/* Recent Transactions Details */}
                              </div>
                         </section>

                    </main>
               </div>
          </div>
     );
};

export default AccountsLayout;


import React from "react";
import SideBar from "../SideBar/SideBar";
import Navbar from "../Navbar/Navbar";
import VisaCard from "./VisaCard";

const CardsPageLayout = () => {
     return (
          <div
               id="CardsPageContainer"
               className="flex min-h-screen w-full bg-gray-50"
          >
               {/* Sidebar */}
               <aside className="hidden lg:block w-64 shrink-0 sticky top-0 h-screen">
                    <SideBar />
               </aside>

               {/* Main Content */}
               <div className="flex-1 min-w-0 flex flex-col">

                    {/* Navbar */}
                    <header className="h-20 shrink-0 bg-white border-b border-gray-100 shadow-sm flex items-center px-3 sm:px-5">
                         <Navbar />
                    </header>

                    {/* Cards Content */}
                    <main className="flex-1 min-w-0 p-4 sm:p-6 lg:p-8">
                         <section className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 sm:p-6 lg:p-8">

                              <div className="mb-6">
                                   <h2 className="text-2xl font-bold text-gray-800">
                                        Your Debit Card
                                   </h2>

                                   <p className="text-sm text-gray-400 mt-1">
                                        View and manage your banking card.
                                   </p>
                              </div>

                              <VisaCard />

                         </section>

                    </main>
               </div>
          </div>
     );
};

export default CardsPageLayout;

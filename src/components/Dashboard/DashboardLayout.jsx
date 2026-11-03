
import React from "react";
import Navbar from "../Navbar/Navbar";
import SideBar from "../SideBar/SideBar";
import GreetMessage from "./GreetMessage";
import AccountsBalance from "./AccountsBalance";
import QuickActions from "./QuickActions";

const DashboardLayout = () => {
  return (
    <div
      id="DashboardContainer"
      className="flex min-h-screen w-full bg-gray-50"
    >
      {/* Sidebar */}
      <aside
        id="SideBar"
        className="hidden lg:block w-1/6 min-w-56 shrink-0 h-screen sticky top-0"
      >
        <SideBar />
      </aside>

      {/* Main Dashboard */}
      <div className="flex-1 min-w-0 flex flex-col">

        {/* Navbar */}
        <header className="h-20 shrink-0 bg-white border-b border-gray-100 shadow-sm flex items-center px-4 sm:px-6">
          <Navbar />
        </header>

        {/* Main Content */}
        <main
          id="MainContent"
          className="flex-1 min-w-0 p-3 sm:p-4 lg:p-5 grid grid-cols-1 xl:grid-cols-3 gap-4"
        >

          {/* Left Section */}
          <section
            id="MainContentLeft"
            className="xl:col-span-2 min-w-0 flex flex-col gap-4"
          >

            {/* Greeting */}
            <div className="min-h-28 sm:min-h-32 rounded-2xl shadow-sm bg-green-300 overflow-hidden">
              <GreetMessage />
            </div>

            {/* Accounts */}
            <div className="min-w-0">
              <AccountsBalance />
            </div>

            {/* Recent Transactions */}
            <div className="min-h-72 flex-1 rounded-2xl bg-white border border-gray-100 shadow-sm overflow-auto">
              Recent Transactions
            </div>

          </section>

          {/* Right Section */}
          <aside
            id="MainContentRight"
            className="min-w-0 flex flex-col gap-4"
          >

            {/* Quick Actions */}
            <div className="shrink-0">
              <QuickActions />
            </div>

            {/* Advertisement */}
            <div className="min-h-64 xl:flex-1 bg-white border border-gray-100 shadow-sm rounded-2xl p-4">
              Advertisement
            </div>

          </aside>

        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;

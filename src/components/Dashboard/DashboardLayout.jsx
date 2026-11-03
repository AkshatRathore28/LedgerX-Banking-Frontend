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
      className="flex h-screen w-full overflow-hidden"
    >

      <div id="SideBar" className="bg-green-300 w-1/6 h-full shrink-0 shadow-xl">

        <SideBar />
      </div>
      <div className=" w-full min-w-0 h-full flex flex-col">

        <div className="bg-white h-[10%] shrink-0 py-5 items-center border-2 border-gray-100 shadow-lg"> <Navbar /> </div>
        <div id="MainContent" className="flex flex-1 min-h-0 min-w-0 gap-3 m-3">

          <div
            id="MainContentLeft"
            className=" flex-1 min-w-0 min-h-0 flex flex-col "
          >

            <div className="bg-green-300 m-2 h-[15%] shrink-0 rounded-2xl shadow-xl">

              <GreetMessage />
            </div>
            <div className="m-2">
              <AccountsBalance />
            </div>
            <div className="min-h-0 flex-1 m-2 rounded-2xl bg-white border-2 border-gray-100 shadow-lg overflow-auto">

              Recent Transactions
            </div>
          </div>
          <div
            id="MainContentRight"
            className=" w-1/3 shrink-0 min-h-0 p-3 flex flex-col gap-4"
          >

            <div><QuickActions /></div>
            <div className="w-full flex-1 min-h-0 border-2 border-gray-100 shadow-xl rounded-lg">

              Advertisement
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;

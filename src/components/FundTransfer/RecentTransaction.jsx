
import React from "react";
import { ArrowDownLeft, ArrowUpRight, ArrowRight } from "lucide-react";

const RecentTransaction = () => {

     const transactions = [
          {
               id: 1,
               name: "Akshat Rathore",
               date: "24 Sept 2024",
               amount: 10000,
               type: "credit",
          },
          {
               id: 2,
               name: "Rahul Sharma",
               date: "23 Sept 2024",
               amount: 2500,
               type: "debit",
          },
          {
               id: 3,
               name: "Amazon Shopping",
               date: "22 Sept 2024",
               amount: 1349,
               type: "debit",
          },
          {
               id: 4,
               name: "Salary Credit",
               date: "20 Sept 2024",
               amount: 35000,
               type: "credit",
          },
     ];

     return (
          <div className="bg-white rounded-2xl border border-gray-100 p-5 h-full">

               {/* Heading */}
               <div className="flex justify-between items-center mb-5">
                    <div>
                         <h1 className="text-lg font-bold text-slate-800">
                              Recent Transactions
                         </h1>
                         <p className="text-xs text-gray-400 mt-1">
                              Your latest account activity
                         </p>
                    </div>

                    <span className="text-xs font-medium bg-blue-50 text-blue-600 px-3 py-1.5 rounded-lg">
                         Recent
                    </span>
               </div>

               {/* Transactions */}
               <div className="flex flex-col">

                    {transactions.map((transaction) => {
                         const isCredit = transaction.type === "credit";

                         return (
                              <div
                                   key={transaction.id}
                                   className="flex items-center justify-between py-4 border-b border-gray-100 last:border-0"
                              >

                                   {/* Left Section */}
                                   <div className="flex items-center gap-3 min-w-0">

                                        {/* Icon */}
                                        <div
                                             className={`w-10 h-10 shrink-0 rounded-full flex items-center justify-center ${isCredit
                                                       ? "bg-emerald-50 text-emerald-600"
                                                       : "bg-rose-50 text-rose-500"
                                                  }`}
                                        >
                                             {isCredit ? (
                                                  <ArrowDownLeft size={20} />
                                             ) : (
                                                  <ArrowUpRight size={20} />
                                             )}
                                        </div>

                                        {/* Details */}
                                        <div className="min-w-0">
                                             <h2 className="text-sm font-semibold text-slate-800 truncate">
                                                  {transaction.name}
                                             </h2>

                                             <p className="text-xs text-gray-400 mt-1">
                                                  {transaction.date}
                                             </p>
                                        </div>
                                   </div>

                                   {/* Amount */}
                                   <div className="text-right shrink-0 ml-2">
                                        <h2
                                             className={`text-sm font-bold ${isCredit
                                                       ? "text-emerald-600"
                                                       : "text-slate-800"
                                                  }`}
                                        >
                                             {isCredit ? "+" : "-"} ₹
                                             {transaction.amount.toLocaleString("en-IN")}
                                        </h2>

                                        <p className="text-[11px] text-gray-400 mt-1 capitalize">
                                             {transaction.type}
                                        </p>
                                   </div>

                              </div>
                         );
                    })}

               </div>

               {/* View All */}
               <button className="w-full flex items-center justify-center gap-2 mt-4 py-2.5 rounded-xl text-sm font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 transition">
                    View All Transactions
                    <ArrowRight size={16} />
               </button>

          </div>
     );
};

export default RecentTransaction;

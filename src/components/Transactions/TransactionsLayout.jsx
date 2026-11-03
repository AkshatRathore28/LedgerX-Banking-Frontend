
import { Sidebar } from "lucide-react";
import React, { useMemo, useState } from "react";
import "remixicon/fonts/remixicon.css";
import SideBar from "../SideBar/SideBar";

const initialTransactions = [
     {
          id: 1,
          date: "2026-09-20",
          time: "11:30 AM",
          description: "Rahul Sharma",
          type: "UPI Transfer",
          amount: 2500,
          direction: "debit",
          status: "Completed",
     },
     {
          id: 2,
          date: "2026-09-26",
          time: "02:10 PM",
          description: "Amazon Shopping",
          type: "Card Payment",
          amount: 1349,
          direction: "debit",
          status: "Completed",
     },
     {
          id: 3,
          date: "2026-09-25",
          time: "09:30 AM",
          description: "Salary Credit",
          type: "Credit",
          amount: 35000,
          direction: "credit",
          status: "Completed",
     },
     {
          id: 4,
          date: "2026-09-24",
          time: "05:10 PM",
          description: "Electricity Bill",
          type: "Bill Payment",
          amount: 1150,
          direction: "debit",
          status: "Completed",
     },
     {
          id: 5,
          date: "2026-09-22",
          time: "07:45 PM",
          description: "Airtel Recharge",
          type: "Mobile Recharge",
          amount: 299,
          direction: "debit",
          status: "Completed",
     },
];

const formatDate = (date) => {
     return new Date(date + "T00:00:00").toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
     });
};

// Page Heading
function TransactionHeading() {
     return (
          <div className="mb-6">
               <h1 className="text-2xl font-bold text-slate-800">
                    Transaction History
               </h1>
               <p className="text-sm text-gray-500 mt-1">
                    View and manage all your banking transactions.
               </p>
          </div>
     );
}

// Filters
function TransactionFilters({
     fromDate,
     setFromDate,
     toDate,
     setToDate,
     type,
     setType,
     status,
     setStatus,
     search,
     setSearch,
}) {
     return (
          <div className="flex flex-col xl:flex-row gap-3 mb-5">

               {/* Date Range */}
               <div className="flex flex-col sm:flex-row gap-2">
                    <input
                         type="date"
                         value={fromDate}
                         onChange={(e) => setFromDate(e.target.value)}
                         className="w-full sm:w-auto border border-gray-200 bg-white rounded-xl px-3 py-3 text-sm text-gray-600 outline-none focus:border-blue-500"
                    />

                    <input
                         type="date"
                         value={toDate}
                         onChange={(e) => setToDate(e.target.value)}
                         className="w-full sm:w-auto border border-gray-200 bg-white rounded-xl px-3 py-3 text-sm text-gray-600 outline-none focus:border-blue-500"
                    />
               </div>

               {/* Transaction Type */}
               <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-blue-500"
               >
                    <option value="All Types">All Types</option>
                    <option value="UPI Transfer">UPI Transfer</option>
                    <option value="Card Payment">Card Payment</option>
                    <option value="Credit">Credit</option>
                    <option value="Bill Payment">Bill Payment</option>
                    <option value="Mobile Recharge">Mobile Recharge</option>
               </select>

               {/* Status */}
               <select
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="border border-gray-200 bg-white rounded-xl px-4 py-3 text-sm text-gray-600 outline-none focus:border-blue-500"
               >
                    <option value="All Statuses">All Statuses</option>
                    <option value="Completed">Completed</option>
                    <option value="Pending">Pending</option>
                    <option value="Failed">Failed</option>
               </select>

               {/* Search */}
               <div className="relative flex-1 xl:ml-auto xl:max-w-xs">
                    <i className="ri-search-line absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>

                    <input
                         type="text"
                         value={search}
                         onChange={(e) => setSearch(e.target.value)}
                         placeholder="Search transactions..."
                         className="w-full border border-gray-200 bg-white rounded-xl pl-11 pr-4 py-3 text-sm outline-none focus:border-blue-500"
                    />
               </div>
          </div>
     );
}

// Transaction Type Badge
function TypeBadge({ type }) {
     const styles = {
          "UPI Transfer": "bg-blue-50 text-blue-600",
          "Card Payment": "bg-rose-50 text-rose-500",
          Credit: "bg-blue-50 text-blue-600",
          "Bill Payment": "bg-purple-50 text-purple-600",
          "Mobile Recharge": "bg-purple-50 text-purple-600",
     };

     return (
          <span
               className={`inline-block px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap ${styles[type] || "bg-gray-100 text-gray-600"
                    }`}
          >
               {type}
          </span>
     );
}

// Status Badge
function StatusBadge({ status }) {
     const styles = {
          Completed: "bg-emerald-100 text-emerald-600",
          Pending: "bg-amber-100 text-amber-600",
          Failed: "bg-rose-100 text-rose-600",
     };

     return (
          <span
               className={`inline-block px-3 py-1.5 rounded-lg text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-600"
                    }`}
          >
               {status}
          </span>
     );
}

// Transaction Table
function TransactionTable({ transactions }) {
     return (
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden">

               <div className="overflow-x-auto">
                    <table className="w-full min-w-[750px] text-left">

                         <thead className="bg-slate-50 border-b border-gray-100">
                              <tr>
                                   {[
                                        "Date & Time",
                                        "Description",
                                        "Type",
                                        "Amount",
                                        "Status",
                                   ].map((heading) => (
                                        <th
                                             key={heading}
                                             className="px-5 py-4 text-xs font-semibold text-gray-500 whitespace-nowrap"
                                        >
                                             {heading}
                                        </th>
                                   ))}
                              </tr>
                         </thead>

                         <tbody className="divide-y divide-gray-100">
                              {transactions.length > 0 ? (
                                   transactions.map((transaction) => (
                                        <tr
                                             key={transaction.id}
                                             className="hover:bg-slate-50/70 transition"
                                        >
                                             {/* Date */}
                                             <td className="px-5 py-5 whitespace-nowrap">
                                                  <p className="text-sm font-semibold text-slate-700">
                                                       {formatDate(transaction.date)}
                                                  </p>
                                                  <p className="text-xs text-gray-400 mt-1">
                                                       {transaction.time}
                                                  </p>
                                             </td>

                                             {/* Description */}
                                             <td className="px-5 py-5">
                                                  <p className="text-sm font-semibold text-slate-700">
                                                       {transaction.description}
                                                  </p>
                                             </td>

                                             {/* Type */}
                                             <td className="px-5 py-5">
                                                  <TypeBadge type={transaction.type} />
                                             </td>

                                             {/* Amount */}
                                             <td className="px-5 py-5 whitespace-nowrap">
                                                  <p
                                                       className={`text-sm font-bold ${transaction.direction === "credit"
                                                            ? "text-emerald-600"
                                                            : "text-slate-800"
                                                            }`}
                                                  >
                                                       {transaction.direction === "credit" ? "+" : "-"} ₹{" "}
                                                       {transaction.amount.toLocaleString("en-IN", {
                                                            minimumFractionDigits: 2,
                                                       })}
                                                  </p>
                                             </td>

                                             {/* Status */}
                                             <td className="px-5 py-5">
                                                  <StatusBadge status={transaction.status} />
                                             </td>
                                        </tr>
                                   ))
                              ) : (
                                   <tr>
                                        <td colSpan="5" className="text-center py-12">
                                             <i className="ri-inbox-line text-4xl text-gray-300"></i>
                                             <p className="text-sm text-gray-500 mt-2">
                                                  No transactions found.
                                             </p>
                                        </td>
                                   </tr>
                              )}
                         </tbody>

                    </table>
               </div>

               <div className="px-5 py-4 border-t border-gray-100">
                    <p className="text-xs text-gray-500">
                         Showing {transactions.length} transactions
                    </p>
               </div>
          </div>
     );
}

// Main Transaction Page
const TransactionsLayout = () => {
     const [transactions] = useState(initialTransactions);

     const [fromDate, setFromDate] = useState("2026-09-20");
     const [toDate, setToDate] = useState("2026-09-30");
     const [type, setType] = useState("All Types");
     const [status, setStatus] = useState("All Statuses");
     const [search, setSearch] = useState("");

     const filteredTransactions = useMemo(() => {
          return transactions.filter((transaction) => {
               const matchesDate =
                    transaction.date >= fromDate &&
                    transaction.date <= toDate;

               const matchesType =
                    type === "All Types" || transaction.type === type;

               const matchesStatus =
                    status === "All Statuses" ||
                    transaction.status === status;

               const searchText = search.toLowerCase();

               const matchesSearch =
                    transaction.description.toLowerCase().includes(searchText) ||
                    transaction.type.toLowerCase().includes(searchText) ||
                    transaction.status.toLowerCase().includes(searchText);

               return (
                    matchesDate &&
                    matchesType &&
                    matchesStatus &&
                    matchesSearch
               );
          });
     }, [transactions, fromDate, toDate, type, status, search]);

     return (
          <div className="min-h-screen bg-slate-50 flex">

               {/* Sidebar */}
               <SideBar />

               {/* Main Content */}
               <div className="flex-1 min-w-0 min-h-screen p-4 md:p-6 lg:p-8">

                    <TransactionHeading />

                    <TransactionFilters
                         fromDate={fromDate}
                         setFromDate={setFromDate}
                         toDate={toDate}
                         setToDate={setToDate}
                         type={type}
                         setType={setType}
                         status={status}
                         setStatus={setStatus}
                         search={search}
                         setSearch={setSearch}
                    />

                    <TransactionTable transactions={filteredTransactions} />

               </div>
          </div>
     );
};

export default TransactionsLayout;

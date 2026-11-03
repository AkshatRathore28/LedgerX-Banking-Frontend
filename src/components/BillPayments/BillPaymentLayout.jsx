
import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import {
     LayoutDashboard,
     ArrowLeftRight,
     Send,
     Ticket,
     HandCoins,
     ChartNoAxesCombined,
     ReceiptText,
     Settings,
     Wallet,
     Smartphone,
     Lightbulb,
     Droplet,
     Tv,
     Wifi,
     Flame,
     Phone,
     ShieldCheck,
     Search,
     ChevronDown,
     History,
     UserRound,
     Zap,
     CheckCircle,
} from "lucide-react";

// All bill payment categories
const categories = [
     { name: "Mobile Recharge", icon: Smartphone },
     { name: "Electricity", icon: Lightbulb },
     { name: "Water", icon: Droplet },
     { name: "DTH", icon: Tv },
     { name: "Broadband", icon: Wifi },
     { name: "Gas", icon: Flame },
     { name: "Landline", icon: Phone },
     { name: "Insurance", icon: ShieldCheck },
];

// Popular and recent providers
const providers = [
     { name: "Jio", logo: "Jio", color: "bg-blue-600" },
     { name: "Airtel", logo: "A", color: "bg-red-500" },
     { name: "VI", logo: "VI", color: "bg-red-600" },
     { name: "BSNL", logo: "B", color: "bg-sky-600" },
     { name: "Tata Play", logo: "T", color: "bg-purple-600" },
];


// Category component
function CategoryList({ selectedCategory, setSelectedCategory }) {
     return (
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
               <h2 className="text-lg font-bold text-slate-800 mb-4">
                    Categories
               </h2>

               <div className="space-y-2">
                    {categories.map((category) => {
                         const Icon = category.icon;
                         const active = selectedCategory === category.name;

                         return (
                              <button
                                   key={category.name}
                                   onClick={() => setSelectedCategory(category.name)}
                                   className={`w-full flex items-center gap-3 px-3 py-3 rounded-xl text-sm font-medium transition
                ${active
                                             ? "bg-blue-50 text-blue-600"
                                             : "text-slate-600 hover:bg-gray-50"
                                        }`}
                              >
                                   <Icon size={19} />
                                   {category.name}
                              </button>
                         );
                    })}
               </div>
          </div>
     );
}

// Payment form component
function PaymentForm({
     selectedCategory,
     mobileNumber,
     setMobileNumber,
     operator,
     setOperator,
     amount,
     setAmount,
     handlePayment,
}) {
     const isMobile = selectedCategory === "Mobile Recharge";

     const fieldLabels = {
          "Mobile Recharge": "Mobile Number",
          Electricity: "Consumer Number",
          Water: "Consumer Number",
          DTH: "Subscriber ID",
          Broadband: "Customer ID",
          Gas: "Consumer Number",
          Landline: "Landline Number",
          Insurance: "Policy Number",
     };

     const placeholders = {
          "Mobile Recharge": "Enter 10 digit mobile number",
          Electricity: "Enter consumer number",
          Water: "Enter consumer number",
          DTH: "Enter subscriber ID",
          Broadband: "Enter customer ID",
          Gas: "Enter consumer number",
          Landline: "Enter landline number",
          Insurance: "Enter policy number",
     };

     const label = fieldLabels[selectedCategory];

     return (
          <div className="bg-white border border-gray-200 rounded-2xl p-5">
               <h2 className="text-lg font-bold text-slate-800 mb-5">
                    {selectedCategory}
               </h2>

               <form onSubmit={handlePayment} className="space-y-4">
                    {/* Customer Number */}
                    <div>
                         <label className="block text-sm text-slate-600 mb-2">
                              {label}
                         </label>

                         <input
                              type="text"
                              value={mobileNumber}
                              onChange={(e) => setMobileNumber(e.target.value)}
                              placeholder={placeholders[selectedCategory]}
                              required
                              className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                         />
                    </div>

                    {/* Operator */}
                    <div>
                         <label className="block text-sm text-slate-600 mb-2">
                              {isMobile ? "Operator" : "Provider"}
                         </label>

                         <div className="relative">
                              <select
                                   value={operator}
                                   onChange={(e) => setOperator(e.target.value)}
                                   required
                                   className="w-full appearance-none border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none focus:border-blue-500 bg-white"
                              >
                                   <option value="">Select operator</option>

                                   {(isMobile
                                        ? ["Jio", "Airtel", "VI", "BSNL"]
                                        : ["Provider 1", "Provider 2", "Provider 3"]
                                   ).map((item) => (
                                        <option key={item} value={item}>
                                             {item}
                                        </option>
                                   ))}
                              </select>

                              <ChevronDown
                                   size={18}
                                   className="absolute right-3 top-3 pointer-events-none text-slate-500"
                              />
                         </div>
                    </div>

                    {/* Amount */}
                    <div>
                         <label className="block text-sm text-slate-600 mb-2">
                              Amount
                         </label>

                         <input
                              type="number"
                              min="1"
                              value={amount}
                              onChange={(e) => setAmount(e.target.value)}
                              placeholder="Enter amount"
                              required
                              className="w-full border border-gray-200 rounded-lg px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                         />
                    </div>

                    {/* Payment Button */}
                    <button
                         type="submit"
                         className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg transition"
                    >
                         Proceed to Pay
                    </button>
               </form>
          </div>
     );
}

// Popular providers component
function PopularProviders({ setOperator }) {
     return (
          <div className="bg-white border border-gray-200 rounded-2xl p-4">
               <h2 className="text-lg font-bold text-slate-800 mb-4">
                    Popular & Recent
               </h2>

               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
                    {providers.map((provider) => (
                         <button
                              key={provider.name}
                              onClick={() => setOperator(provider.name)}
                              className="flex flex-col items-center justify-center gap-2 bg-slate-50 hover:bg-blue-50 border border-transparent hover:border-blue-200 rounded-xl py-4 transition"
                         >
                              <div
                                   className={`${provider.color} w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm`}
                              >
                                   {provider.logo}
                              </div>

                              <span className="text-sm font-medium text-slate-700">
                                   {provider.name}
                              </span>
                         </button>
                    ))}
               </div>
          </div>
     );
}

// Main Bill Payment Page
export default function BillPayment() {
     const [selectedCategory, setSelectedCategory] = useState("Mobile Recharge");
     const [search, setSearch] = useState("");
     const [mobileNumber, setMobileNumber] = useState("");
     const [operator, setOperator] = useState("");
     const [amount, setAmount] = useState("");

     const filteredCategories = categories.filter((category) =>
          category.name.toLowerCase().includes(search.toLowerCase())
     );

     const handlePayment = (e) => {
          e.preventDefault();

          alert(
               `Payment Details\nCategory: ${selectedCategory}\nCustomer Number: ${mobileNumber}\nOperator: ${operator}\nAmount: ₹${amount}`
          );
     };

     const handleCategoryChange = (category) => {
          setSelectedCategory(category);
          setMobileNumber("");
          setOperator("");
          setAmount("");
     };

     return (
          <div className="min-h-screen bg-slate-50 flex">
               {/* Sidebar */}
               <SideBar />

               {/* Main Content */}
               <main className="flex-1 min-w-0 p-4 md:p-6 lg:p-8">

                    {/* Navbar / Heading */}
                    <div className="flex items-center gap-3 mb-6">
                         <History size={20} className="text-slate-600" />
                         <h1 className="text-lg font-bold text-slate-800">
                              Transaction History
                         </h1>
                    </div>

                    {/* Search */}
                    <div className="relative mb-6">
                         <Search
                              size={19}
                              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
                         />

                         <input
                              type="text"
                              value={search}
                              onChange={(e) => setSearch(e.target.value)}
                              placeholder="Search bills..."
                              className="w-full bg-white border border-gray-200 rounded-xl py-3 pl-11 pr-4 text-sm outline-none focus:border-blue-500"
                         />
                    </div>

                    {/* Main Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.8fr] gap-5">

                         {/* Categories */}
                         <CategoryList
                              selectedCategory={selectedCategory}
                              setSelectedCategory={handleCategoryChange}
                              categories={filteredCategories}
                         />

                         {/* Right Section */}
                         <div className="space-y-5">

                              {/* Payment Form */}
                              <PaymentForm
                                   selectedCategory={selectedCategory}
                                   mobileNumber={mobileNumber}
                                   setMobileNumber={setMobileNumber}
                                   operator={operator}
                                   setOperator={setOperator}
                                   amount={amount}
                                   setAmount={setAmount}
                                   handlePayment={handlePayment}
                              />

                              {/* Popular Providers */}
                              <PopularProviders setOperator={setOperator} />

                         </div>
                    </div>
               </main>
          </div>
     );
}

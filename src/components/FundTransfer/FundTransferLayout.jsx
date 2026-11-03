
import React, { useState } from "react";
import SideBar from "../SideBar/SideBar";
import RecentTransaction from "./RecentTransaction";

// Transfer Options
const transferOptions = [
     { id: "account", label: "To Account", icon: "ri-bank-line" },
     { id: "upi", label: "To UPI", icon: "ri-smartphone-line" },
     { id: "beneficiary", label: "To Beneficiary", icon: "ri-user-received-line" },
];

// Reusable Input Field
const InputField = ({
     label,
     placeholder,
     type = "text",
     icon,
     required = true,
     inputMode,
}) => (
     <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">
               {label} {required && <span className="text-red-500">*</span>}
          </label>

          <div className="relative flex items-center">
               {icon && (
                    <i className={`${icon} absolute left-3 text-gray-400 text-lg`}></i>
               )}

               <input
                    type={type}
                    inputMode={inputMode}
                    placeholder={placeholder}
                    required={required}
                    min={type === "number" ? "0.01" : undefined}
                    step={type === "number" ? "0.01" : undefined}
                    className={`w-full border border-gray-200 rounded-xl py-3 pr-4
        ${icon ? "pl-10" : "pl-4"}
        text-sm text-gray-700 outline-none bg-white
        placeholder:text-gray-400
        focus:border-blue-500 focus:ring-2 focus:ring-blue-100
        transition-all`}
               />
          </div>
     </div>
);

// Reusable From Account Field
const FromAccountField = () => (
     <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-gray-700">
               From Account <span className="text-red-500">*</span>
          </label>

          <div className="relative">
               <i className="ri-bank-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>

               <select
                    required
                    defaultValue="saving"
                    className="w-full appearance-none border border-gray-200 rounded-xl
        py-3 pl-10 pr-10 text-sm text-gray-700 bg-white outline-none
        focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
               >
                    <option value="saving">
                         Saving Account - **** **** 4568
                    </option>
                    <option value="current">
                         Current Account - **** **** 6523
                    </option>
               </select>

               <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
          </div>
     </div>
);

// Reusable Amount and Remarks
const PaymentDetails = () => (
     <>
          <InputField
               label="Amount"
               placeholder="Enter amount"
               type="number"
               icon="ri-money-rupee-circle-line"
               inputMode="decimal"
          />

          <InputField
               label="Remarks (Optional)"
               placeholder="e.g. Rent, Bill, Shopping..."
               required={false}
               icon="ri-sticky-note-line"
          />
     </>
);

// To Account Form
const ToAccountForm = () => (
     <>
          <InputField
               label="To Account Number"
               placeholder="Enter account number"
               icon="ri-bank-card-line"
               inputMode="numeric"
          />

          <InputField
               label="IFSC Code"
               placeholder="Enter IFSC code"
               icon="ri-building-line"
          />

          <PaymentDetails />
     </>
);

// To UPI Form
const ToUPIForm = () => (
     <>
          <InputField
               label="UPI ID"
               placeholder="example@upi"
               icon="ri-at-line"
          />

          <PaymentDetails />
     </>
);

// To Beneficiary Form
const ToBeneficiaryForm = () => (
     <>
          <div className="flex flex-col gap-2">
               <label className="text-sm font-semibold text-gray-700">
                    Select Beneficiary <span className="text-red-500">*</span>
               </label>

               <div className="relative">
                    <i className="ri-user-line absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-lg"></i>

                    <select
                         required
                         defaultValue=""
                         className="w-full appearance-none border border-gray-200
          rounded-xl py-3 pl-10 pr-10 text-sm text-gray-600
          bg-white outline-none focus:border-blue-500
          focus:ring-2 focus:ring-blue-100"
                    >
                         <option value="" disabled>
                              Select a saved beneficiary
                         </option>
                         {/* Populate these options using your beneficiaries API */}
                    </select>

                    <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"></i>
               </div>

               <p className="text-xs text-gray-400">
                    Choose a beneficiary from your saved beneficiary list.
               </p>
          </div>

          <PaymentDetails />
     </>
);

// Dynamic Transfer Form
const TransferForm = ({ activeTab }) => {
     const renderForm = () => {
          switch (activeTab) {
               case "account":
                    return <ToAccountForm />;

               case "upi":
                    return <ToUPIForm />;

               case "beneficiary":
                    return <ToBeneficiaryForm />;

               default:
                    return <ToAccountForm />;
          }
     };

     return (
          <form
               onSubmit={(e) => e.preventDefault()}
               className="flex flex-col gap-5"
          >
               <FromAccountField />

               {renderForm()}

               <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2
        bg-blue-600 hover:bg-blue-700 active:scale-[0.99]
        text-white font-semibold py-3 rounded-xl
        transition-all shadow-sm"
               >
                    Continue
                    <i className="ri-arrow-right-line text-lg"></i>
               </button>

               <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                    <i className="ri-shield-check-line text-green-500 text-base"></i>
                    Secure and encrypted transaction
               </div>
          </form>
     );
};

// Main Component
const FundTransferLayout = () => {
     const [activeTab, setActiveTab] = useState("account");

     return (
          <div
               id="FundTransferContainer"
               className="flex min-h-screen w-full bg-gray-50"
          >
               {/* Sidebar */}
               <aside className="hidden lg:block w-64 shrink-0 sticky top-0 h-screen">
                    <SideBar />
               </aside>

               {/* Main Content */}
               <div className="flex-1 min-w-0 flex flex-col">

                    <main className="flex-1 min-w-0 p-3 sm:p-5 lg:p-6">

                         {/* Page Heading */}
                         <div className="mb-5">
                              <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
                                   Transfer Money
                              </h1>

                              <p className="text-sm text-gray-500 mt-1">
                                   Send money securely and conveniently.
                              </p>
                         </div>

                         {/* Transfer Container */}
                         <div
                              id="transferMoneyContainer"
                              className="grid grid-cols-1 xl:grid-cols-5 gap-5 items-start"
                         >

                              {/* Left Section - Transfer Form */}
                              <section
                                   id="transferMoneyLeft"
                                   className="xl:col-span-3 min-w-0 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
                              >

                                   {/* Transfer Tabs */}
                                   <div className="grid grid-cols-3 border-b border-gray-100 p-2 sm:p-3 gap-2">
                                        {transferOptions.map((option) => {
                                             const isActive = activeTab === option.id;

                                             return (
                                                  <button
                                                       key={option.id}
                                                       type="button"
                                                       onClick={() => setActiveTab(option.id)}
                                                       className={`
                        flex flex-col sm:flex-row items-center justify-center
                        gap-1.5 sm:gap-2 px-2 py-3 rounded-xl
                        text-xs sm:text-sm font-semibold transition-all
                        ${isActive
                                                                 ? "bg-blue-600 text-white shadow-md"
                                                                 : "bg-gray-50 text-gray-500 hover:bg-blue-50 hover:text-blue-600"
                                                            }
                      `}
                                                  >
                                                       <i className={`${option.icon} text-lg sm:text-xl`}></i>
                                                       <span>{option.label}</span>
                                                  </button>
                                             );
                                        })}
                                   </div>

                                   {/* Form Section */}
                                   <div className="p-4 sm:p-6 lg:p-7">

                                        <div className="mb-6">
                                             <h2 className="text-lg font-bold text-gray-800">
                                                  {transferOptions.find(
                                                       (option) => option.id === activeTab
                                                  )?.label}
                                             </h2>

                                             <p className="text-sm text-gray-400 mt-1">
                                                  Enter the details to proceed with your transfer.
                                             </p>
                                        </div>

                                        <TransferForm activeTab={activeTab} />

                                   </div>
                              </section>

                              {/* Right Section - Recent Transactions */}
                              <aside
                                   id="transferMoneyRight"
                                   className="xl:col-span-2 min-w-0 bg-white border border-gray-100 rounded-2xl shadow-sm overflow-hidden"
                              >
                                   <RecentTransaction />
                              </aside>

                         </div>
                    </main>
               </div>
          </div>
     );
};

export default FundTransferLayout;

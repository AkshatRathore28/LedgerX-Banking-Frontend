
import React from "react";
import visaCardImg from "../../assets/VisaCardLayout/94d0dfa6-e5b5-4c8e-bdc1-e77e2b0ee488.png";

const VisaCard = () => {

     const cardActions = [
          {
               title: "Block Card",
               description: "Temporarily block your card",
               icon: "ri-lock-line",
               color: "text-red-500",
               bg: "bg-red-50",
          },
          {
               title: "Set Limits",
               description: "Manage your spending limits",
               icon: "ri-settings-4-line",
               color: "text-blue-600",
               bg: "bg-blue-50",
          },
          {
               title: "View PIN",
               description: "Securely view your card PIN",
               icon: "ri-eye-line",
               color: "text-purple-600",
               bg: "bg-purple-50",
          },
          {
               title: "Card Settings",
               description: "Manage card preferences",
               icon: "ri-bank-card-line",
               color: "text-orange-500",
               bg: "bg-orange-50",
          },
     ];

     return (
          <div className="grid grid-cols-1 xl:grid-cols-5 gap-6 items-start">

               {/* Left: Card Preview */}
               <div
                    id="cardPreview"
                    className="xl:col-span-3 min-w-0 flex flex-col gap-4"
               >

                    <div className="flex items-center justify-between">
                         <h3 className="font-semibold text-gray-700">
                              Card Preview
                         </h3>

                         <span className="text-xs text-gray-400">
                              Visa Debit Card
                         </span>
                    </div>

                    {/* Card Image */}
                    <div className="relative w-full max-w-xl mx-auto overflow-hidden rounded-2xl shadow-xl aspect-[1.586/1] select-none">

                         <img
                              src={visaCardImg}
                              alt="LedgerX Visa Card"
                              className="absolute inset-0 w-full h-full object-fit select-none"
                         />

                         {/* Card Details */}
                         <div className="absolute bottom-[9%] left-[6%] right-[6%]">

                              <p className="text-white/80 text-xs sm:text-sm font-medium">
                                   Card Holder
                              </p>

                              <h3 className="text-white text-base sm:text-xl font-bold tracking-wide mt-1">
                                   Akshat Rathore
                              </h3>

                              <div className="flex justify-between items-end mt-3 sm:mt-5">

                                   <div>
                                        <p className="text-white text-sm sm:text-lg font-semibold tracking-widest">
                                             •••• •••• •••• 9012
                                        </p>
                                   </div>

                                   <div>
                                        <p className="text-white/70 text-[10px] sm:text-xs">
                                             Expires
                                        </p>

                                        <p className="text-white text-xs sm:text-sm font-semibold">
                                             12/28
                                        </p>
                                   </div>

                              </div>
                         </div>
                    </div>

                    {/* Card Information */}
                    <div className="grid grid-cols-2 gap-3">

                         <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                              <p className="text-xs text-gray-400">
                                   Card Type
                              </p>
                              <p className="text-sm font-semibold text-gray-700 mt-1">
                                   Debit Card
                              </p>
                         </div>

                         <div className="bg-gray-50 rounded-xl p-4 border border-gray-100">
                              <p className="text-xs text-gray-400">
                                   Card Number
                              </p>
                              <p className="text-sm font-semibold text-gray-700 mt-1">
                                   **** 9012
                              </p>
                         </div>

                    </div>
               </div>

               {/* Right: Card Actions */}
               <div
                    id="cardOptions"
                    className="xl:col-span-2 min-w-0 flex flex-col gap-4"
               >

                    <div>
                         <h3 className="font-semibold text-gray-800">
                              Manage Your Card
                         </h3>

                         <p className="text-sm text-gray-400 mt-1">
                              Quick access to card controls.
                         </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">

                         {cardActions.map((action) => (
                              <button
                                   key={action.title}
                                   type="button"
                                   className="group flex items-center gap-4 w-full p-4
              bg-white border border-gray-100 rounded-xl
              shadow-sm hover:shadow-md hover:border-blue-200
              transition-all duration-200 text-left"
                              >

                                   {/* Icon */}
                                   <div className={`${action.bg} ${action.color}
                w-12 h-12 shrink-0 rounded-xl
                flex items-center justify-center`}
                                   >
                                        <i className={`${action.icon} text-2xl`}></i>
                                   </div>

                                   {/* Text */}
                                   <div className="flex-1 min-w-0">
                                        <h4 className="text-sm font-semibold text-gray-800">
                                             {action.title}
                                        </h4>

                                        <p className="text-xs text-gray-400 mt-1">
                                             {action.description}
                                        </p>
                                   </div>

                                   {/* Arrow */}
                                   <i className="ri-arrow-right-line text-gray-400
                group-hover:text-blue-600 group-hover:translate-x-1
                transition-all"
                                   ></i>

                              </button>
                         ))}

                    </div>

                    {/* Security Information */}
                    <div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-100 rounded-xl">

                         <i className="ri-shield-check-line text-blue-600 text-xl"></i>

                         <div>
                              <h4 className="text-sm font-semibold text-blue-800">
                                   Your Card, Your Control
                              </h4>

                              <p className="text-xs text-blue-600 mt-1 leading-relaxed">
                                   Manage your card securely with LedgerX Banking.
                                   Keep your card details private.
                              </p>
                         </div>

                    </div>

               </div>
          </div>
     );
};

export default VisaCard;

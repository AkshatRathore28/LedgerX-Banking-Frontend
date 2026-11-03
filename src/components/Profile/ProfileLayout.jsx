
import React, { useEffect, useState } from "react";
import SideBar from "../SideBar/SideBar";

import {
     UserRound,
     ShieldCheck,
     Bell,
     LockKeyhole,
     Languages,
     Camera,
     Save,
     Eye,
     EyeOff,
     CheckCircle2,
} from "lucide-react";


// ==========================================
// INITIAL USER DATA
// ==========================================

const initialUser = {
     fullName: "Akshat Rathore",
     email: "akshat1@gmail.com",
     phone: "+91 98765 43210",
     dateOfBirth: "2002-01-13",
     address: "Indore, Madhya Pradesh",
};


// ==========================================
// MAIN PROFILE SETTINGS PAGE
// ==========================================

const ProfileSettingsPage = () => {

     const [activeTab, setActiveTab] = useState("personal");

     const [userData, setUserData] = useState(initialUser);

     const [profileImage, setProfileImage] = useState(null);

     const [successMessage, setSuccessMessage] = useState("");

     // Profile image preview cleanup
     useEffect(() => {
          return () => {
               if (profileImage) {
                    URL.revokeObjectURL(profileImage);
               }
          };
     }, [profileImage]);


     // Handle profile photo
     const handlePhotoChange = (file) => {

          if (!file) return;

          if (!file.type.startsWith("image/")) {
               setSuccessMessage("Please select a valid image.");
               return;
          }

          if (file.size > 5 * 1024 * 1024) {
               setSuccessMessage("Image must be smaller than 5 MB.");
               return;
          }

          const imageURL = URL.createObjectURL(file);

          setProfileImage(imageURL);
          setSuccessMessage("");
     };


     // Handle profile information update
     const handleUpdateProfile = (event) => {

          event.preventDefault();

          // Backend API integration will be added here.
          // Example:
          // await axios.put("/api/profile/update", userData);

          console.log("Updated User Data:", userData);

          setSuccessMessage("Profile updated successfully!");
     };


     // Dynamic settings content
     const renderSettingsContent = () => {

          switch (activeTab) {

               case "personal":
                    return (
                         <PersonalInformation
                              userData={userData}
                              setUserData={setUserData}
                              onSubmit={handleUpdateProfile}
                         />
                    );

               case "security":
                    return <SecuritySettings />;

               case "notifications":
                    return <NotificationSettings />;

               case "privacy":
                    return <PrivacySettings />;

               case "language":
                    return <LanguageSettings />;

               default:
                    return null;
          }
     };


     return (
          <div className="flex min-h-screen w-full bg-gray-50">
               <aside className="hidden lg:block w-64 shrink-0 sticky top-0 h-screen">
                    <SideBar />
               </aside>
               <div className="min-h-full w-full bg-slate-50 p-4 sm:p-6 lg:p-8">
                    {/* Sidebar */}

                    <div className="mx-auto max-w-[1500px]">

                         {/* Page Heading */}

                         <div className="mb-6">

                              <h1 className="text-2xl font-bold text-slate-800 sm:text-3xl">
                                   Profile & Settings
                              </h1>

                              <p className="mt-2 text-sm text-slate-500">
                                   Manage your personal information and account preferences.
                              </p>

                         </div>


                         {/* Main Layout */}

                         <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[0.85fr_1.4fr]">


                              {/* LEFT PANEL */}

                              <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">


                                   {/* Profile Card */}

                                   <ProfileCard
                                        userData={userData}
                                        profileImage={profileImage}
                                        onPhotoChange={handlePhotoChange}
                                   />


                                   <div className="my-7 border-t border-slate-100" />


                                   {/* Settings Navigation */}

                                   <SettingsTabs
                                        activeTab={activeTab}
                                        setActiveTab={(tab) => {
                                             setActiveTab(tab);
                                             setSuccessMessage("");
                                        }}
                                   />

                              </div>


                              {/* RIGHT PANEL */}

                              <div className="min-w-0 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">

                                   {successMessage && (
                                        <div
                                             role="status"
                                             className="mb-5 flex items-center gap-2 rounded-lg bg-green-50 p-3 text-sm text-green-700"
                                        >
                                             <CheckCircle2 size={18} />
                                             {successMessage}
                                        </div>
                                   )}

                                   {renderSettingsContent()}

                              </div>

                         </div>

                    </div>

               </div>
          </div>

     );

};


// ==========================================
// PROFILE CARD COMPONENT
// ==========================================

function ProfileCard({ userData, profileImage, onPhotoChange }) {

     const fileInputRef = React.useRef(null);

     const handleFileChange = (event) => {

          const file = event.target.files?.[0];

          if (file) {
               onPhotoChange(file);
          }

          event.target.value = "";
     };


     return (

          <div className="flex flex-col items-center gap-4 sm:flex-row">

               {/* Profile Image */}

               <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-full border-4 border-blue-50 bg-blue-100">

                    {profileImage ? (

                         <img
                              src={profileImage}
                              alt="Profile"
                              className="h-full w-full object-cover"
                         />

                    ) : (

                         <UserRound size={42} className="text-blue-600" />

                    )}

               </div>


               {/* Profile Details */}

               <div className="flex flex-col items-center gap-2 sm:items-start">

                    <div className="text-center sm:text-left">

                         <h2 className="text-lg font-bold text-slate-800">
                              {userData.fullName}
                         </h2>

                         <p className="text-sm text-slate-500">
                              {userData.email}
                         </p>

                    </div>


                    <input
                         ref={fileInputRef}
                         type="file"
                         accept="image/*"
                         className="hidden"
                         onChange={handleFileChange}
                    />


                    <button
                         type="button"
                         onClick={() => fileInputRef.current.click()}
                         className="flex items-center gap-2 rounded-lg border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-100"
                    >
                         <Camera size={16} />
                         Change Photo
                    </button>

               </div>

          </div>

     );

}


// ==========================================
// SETTINGS TABS COMPONENT
// ==========================================

function SettingsTabs({ activeTab, setActiveTab }) {

     const settingsOptions = [

          {
               id: "personal",
               label: "Personal Information",
               icon: UserRound,
          },

          {
               id: "security",
               label: "Security",
               icon: ShieldCheck,
          },

          {
               id: "notifications",
               label: "Notifications",
               icon: Bell,
          },

          {
               id: "privacy",
               label: "Privacy",
               icon: LockKeyhole,
          },

          {
               id: "language",
               label: "Language",
               icon: Languages,
          },

     ];


     return (

          <div className="flex flex-col gap-2">

               {settingsOptions.map((item) => {

                    const Icon = item.icon;

                    const isActive = activeTab === item.id;


                    return (

                         <button
                              key={item.id}
                              type="button"
                              onClick={() => setActiveTab(item.id)}
                              aria-current={isActive ? "page" : undefined}
                              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-200
              
              ${isActive
                                        ? "bg-blue-50 text-blue-600"
                                        : "text-slate-600 hover:bg-slate-50 hover:text-blue-600"
                                   }
            `}
                         >

                              <Icon size={20} />

                              {item.label}

                         </button>

                    );

               })}

          </div>

     );

}


// ==========================================
// REUSABLE INPUT FIELD
// ==========================================

function SettingsField({
     label,
     name,
     type = "text",
     value,
     onChange,
     placeholder,
     required = false,
}) {

     return (

          <div className="flex flex-col gap-2">

               <label
                    htmlFor={name}
                    className="text-sm font-medium text-slate-600"
               >
                    {label}
               </label>


               <input
                    id={name}
                    name={name}
                    type={type}
                    value={value ?? ""}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
               />

          </div>

     );

}


// ==========================================
// PERSONAL INFORMATION COMPONENT
// ==========================================

function PersonalInformation({ userData, setUserData, onSubmit }) {

     const handleChange = (event) => {

          const { name, value } = event.target;

          setUserData((previous) => ({
               ...previous,
               [name]: value,
          }));

     };


     return (

          <form onSubmit={onSubmit} className="space-y-5">

               <h2 className="mb-6 text-lg font-bold text-slate-800">
                    Personal Information
               </h2>


               <SettingsField
                    label="Full Name"
                    name="fullName"
                    value={userData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    required
               />


               <SettingsField
                    label="Email Address"
                    name="email"
                    type="email"
                    value={userData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
               />


               <SettingsField
                    label="Phone Number"
                    name="phone"
                    type="tel"
                    value={userData.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
               />


               <SettingsField
                    label="Date of Birth"
                    name="dateOfBirth"
                    type="date"
                    value={userData.dateOfBirth}
                    onChange={handleChange}
               />


               <SettingsField
                    label="Address"
                    name="address"
                    value={userData.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
               />


               <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
               >

                    <Save size={18} />

                    Update Profile

               </button>

          </form>

     );

}


// ==========================================
// SECURITY SETTINGS COMPONENT
// ==========================================

function SecuritySettings() {

     const [showPassword, setShowPassword] = useState(false);

     const [passwordData, setPasswordData] = useState({
          currentPassword: "",
          newPassword: "",
          confirmPassword: "",
     });

     const [message, setMessage] = useState("");


     const handleChange = (event) => {

          const { name, value } = event.target;

          setPasswordData((previous) => ({
               ...previous,
               [name]: value,
          }));

     };


     const handleSubmit = (event) => {

          event.preventDefault();

          if (passwordData.newPassword !== passwordData.confirmPassword) {
               setMessage("Passwords do not match.");
               return;
          }

          if (passwordData.newPassword.length < 8) {
               setMessage("Password must contain at least 8 characters.");
               return;
          }

          // Password API integration will be added here.
          console.log("Password update requested.");

          setMessage("Connect your password update API to save changes.");

     };


     return (

          <form onSubmit={handleSubmit} className="space-y-5">

               <h2 className="text-lg font-bold text-slate-800">
                    Security Settings
               </h2>

               <p className="text-sm text-slate-500">
                    Manage your password and account security.
               </p>


               {[
                    ["currentPassword", "Current Password"],
                    ["newPassword", "New Password"],
                    ["confirmPassword", "Confirm New Password"],
               ].map(([name, label]) => (

                    <div key={name} className="flex flex-col gap-2">

                         <label className="text-sm font-medium text-slate-600" htmlFor={name}>
                              {label}
                         </label>

                         <div className="relative">

                              <input
                                   id={name}
                                   name={name}
                                   type={showPassword ? "text" : "password"}
                                   value={passwordData[name]}
                                   onChange={handleChange}
                                   required
                                   minLength={name === "currentPassword" ? undefined : 8}
                                   autoComplete={
                                        name === "currentPassword"
                                             ? "current-password"
                                             : "new-password"
                                   }
                                   className="w-full rounded-xl border border-slate-200 px-4 py-3 pr-12 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                              />

                              <button
                                   type="button"
                                   onClick={() => setShowPassword((previous) => !previous)}
                                   className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400"
                                   aria-label={showPassword ? "Hide passwords" : "Show passwords"}
                              >
                                   {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                              </button>

                         </div>

                    </div>

               ))}


               {message && (
                    <p role="status" className="text-sm text-blue-600">
                         {message}
                    </p>
               )}


               <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
               >
                    <Save size={18} />
                    Update Password
               </button>

          </form>

     );

}


// ==========================================
// NOTIFICATION SETTINGS COMPONENT
// ==========================================

function NotificationSettings() {

     const [notifications, setNotifications] = useState({
          email: true,
          sms: true,
          transactions: true,
          promotional: false,
     });


     const notificationOptions = [

          {
               id: "email",
               title: "Email Notifications",
               description: "Receive account updates through email.",
          },

          {
               id: "sms",
               title: "SMS Notifications",
               description: "Receive important updates through SMS.",
          },

          {
               id: "transactions",
               title: "Transaction Alerts",
               description: "Get notified whenever a transaction occurs.",
          },

          {
               id: "promotional",
               title: "Promotional Updates",
               description: "Receive offers and product announcements.",
          },

     ];


     const handleToggle = (id) => {

          setNotifications((previous) => ({
               ...previous,
               [id]: !previous[id],
          }));

     };


     return (

          <div>

               <h2 className="text-lg font-bold text-slate-800">
                    Notification Settings
               </h2>

               <p className="mt-1 text-sm text-slate-500">
                    Manage how you receive banking notifications.
               </p>


               <div className="mt-6">

                    {notificationOptions.map((item) => (

                         <div
                              key={item.id}
                              className="flex items-center justify-between gap-4 border-b border-slate-100 py-5 last:border-0"
                         >

                              <div>

                                   <h3 className="text-sm font-semibold text-slate-700">
                                        {item.title}
                                   </h3>

                                   <p className="mt-1 text-sm text-slate-500">
                                        {item.description}
                                   </p>

                              </div>


                              <button
                                   type="button"
                                   role="switch"
                                   aria-checked={notifications[item.id]}
                                   aria-label={item.title}
                                   onClick={() => handleToggle(item.id)}
                                   className={`relative h-6 w-11 shrink-0 rounded-full transition ${notifications[item.id]
                                        ? "bg-blue-600"
                                        : "bg-slate-300"
                                        }`}
                              >

                                   <span
                                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${notifications[item.id]
                                             ? "left-6"
                                             : "left-1"
                                             }`}
                                   />

                              </button>

                         </div>

                    ))}

               </div>

          </div>

     );

}


// ==========================================
// PRIVACY SETTINGS COMPONENT
// ==========================================

function PrivacySettings() {

     const [privacy, setPrivacy] = useState({
          loginAlerts: true,
          trustedDevice: false,
          profileVisibility: false,
     });


     const privacyOptions = [

          {
               id: "loginAlerts",
               title: "Login Activity Alerts",
               description: "Get notified about new account logins.",
          },

          {
               id: "trustedDevice",
               title: "Remember This Device",
               description: "Allow this device to remain trusted.",
          },

          {
               id: "profileVisibility",
               title: "Profile Information Visibility",
               description: "Manage visibility of your profile information.",
          },

     ];


     return (

          <div>

               <h2 className="text-lg font-bold text-slate-800">
                    Privacy Settings
               </h2>

               <p className="mt-1 text-sm text-slate-500">
                    Manage your account privacy preferences.
               </p>


               <div className="mt-6">

                    {privacyOptions.map((item) => (

                         <div
                              key={item.id}
                              className="flex items-center justify-between gap-4 border-b border-slate-100 py-5 last:border-0"
                         >

                              <div>

                                   <h3 className="text-sm font-semibold text-slate-700">
                                        {item.title}
                                   </h3>

                                   <p className="mt-1 text-sm text-slate-500">
                                        {item.description}
                                   </p>

                              </div>


                              <button
                                   type="button"
                                   role="switch"
                                   aria-checked={privacy[item.id]}
                                   aria-label={item.title}
                                   onClick={() => {
                                        setPrivacy((previous) => ({
                                             ...previous,
                                             [item.id]: !previous[item.id],
                                        }));
                                   }}
                                   className={`relative h-6 w-11 shrink-0 rounded-full transition ${privacy[item.id] ? "bg-blue-600" : "bg-slate-300"
                                        }`}
                              >

                                   <span
                                        className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${privacy[item.id] ? "left-6" : "left-1"
                                             }`}
                                   />

                              </button>

                         </div>

                    ))}

               </div>

          </div>

     );

}


// ==========================================
// LANGUAGE SETTINGS COMPONENT
// ==========================================

function LanguageSettings() {

     const [language, setLanguage] = useState("en");

     const [saved, setSaved] = useState(false);


     const handleLanguageChange = (event) => {
          setLanguage(event.target.value);
          setSaved(false);
     };


     return (

          <div>

               <h2 className="text-lg font-bold text-slate-800">
                    Language Settings
               </h2>

               <p className="mt-1 text-sm text-slate-500">
                    Select your preferred application language.
               </p>


               <div className="mt-6 flex flex-col gap-3">

                    <label
                         htmlFor="language"
                         className="text-sm font-medium text-slate-600"
                    >
                         Select Language
                    </label>


                    <select
                         id="language"
                         value={language}
                         onChange={handleLanguageChange}
                         className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                    >

                         <option value="en">English</option>
                         <option value="hi">Hindi</option>
                         <option value="mr">Marathi</option>

                    </select>


                    <button
                         type="button"
                         onClick={() => {
                              // Language preference API integration here.
                              setSaved(true);
                         }}
                         className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700"
                    >

                         <Save size={18} />

                         Save Language

                    </button>


                    {saved && (
                         <p role="status" className="text-sm text-green-600">
                              Language preference saved locally.
                         </p>
                    )}

               </div>

          </div>

     );

}


export default ProfileSettingsPage;

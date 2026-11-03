
import React, { useState } from "react";
import LoginPageImg from "../../assets/LoginAssets/LoginPageImg.png";
import "remixicon/fonts/remixicon.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="h-dvh w-full overflow-hidden bg-[#f4f7fc] flex items-center justify-center p-3 sm:p-5">

      {/* Main Login Card */}
      <div className="w-full max-w-[1150px] h-full max-h-[760px] min-h-0 bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row">

        {/* LEFT IMAGE */}
        <div className="relative w-full h-[125px] sm:h-[180px] lg:h-full lg:w-[46%] shrink-0 overflow-hidden">

          <img
            src={LoginPageImg}
            alt="LedgerX Bank"
            className="absolute inset-0 w-full h-full  object-center"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#081d42]/90 via-[#102752]/20 to-transparent" />
        </div>

        {/* RIGHT LOGIN SECTION */}
        <div className="flex-1 min-h-0 w-full lg:w-[54%] flex items-center justify-center px-5 py-4 sm:px-10 sm:py-6 lg:px-12 xl:px-16">

          <div className="w-full max-w-[440px]">

            {/* Heading */}
            <div className="mb-5 sm:mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-semibold mb-3">
                <i className="ri-shield-check-line"></i>
                Secure Banking Login
              </div>

              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#102752] tracking-tight">
                Welcome Back!
              </h1>

              <p className="text-gray-500 mt-2 text-sm">
                Sign in to continue to your LedgerX account.
              </p>
            </div>

            {/* Form */}
            <form className="space-y-4">

              {/* Email */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Email or Mobile Number
                </label>

                <div className="relative group">
                  <i className="ri-user-line absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-blue-600"></i>

                  <input
                    type="text"
                    placeholder="Enter email or mobile number"
                    className="w-full h-12 pl-12 pr-4 rounded-xl border border-gray-200 bg-[#f9fbff] text-sm outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                  Password
                </label>

                <div className="relative group">
                  <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 group-focus-within:text-blue-600"></i>

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full h-12 pl-12 pr-12 rounded-xl border border-gray-200 bg-[#f9fbff] text-sm outline-none transition focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 hover:text-blue-600"
                  >
                    <i className={showPassword ? "ri-eye-off-line" : "ri-eye-line"} />
                  </button>
                </div>
              </div>

              {/* Remember + Forgot */}
              <div className="flex items-center justify-between gap-2">

                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600"
                  />

                  <span className="text-xs sm:text-sm text-gray-500">
                    Remember me
                  </span>
                </label>

                <button
                  type="button"
                  className="text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-700"
                >
                  Forgot Password?
                </button>
              </div>

              {/* Sign In */}
              <button
                type="submit"
                className="w-full h-12 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold shadow-lg shadow-blue-200 transition flex items-center justify-center gap-2"
              >
                Sign In
                <i className="ri-arrow-right-line"></i>
              </button>

              {/* Divider */}
              <div className="flex items-center gap-3 py-1">
                <div className="flex-1 h-px bg-gray-200"></div>
                <span className="text-[11px] text-gray-400 font-medium whitespace-nowrap">
                  OR CONTINUE WITH
                </span>
                <div className="flex-1 h-px bg-gray-200"></div>
              </div>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">

                <button
                  type="button"
                  className="h-11 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-2 transition"
                >
                  <i className="ri-google-fill text-xl text-[#4285F4]"></i>
                  <span className="text-sm font-semibold text-slate-600">
                    Google
                  </span>
                </button>

                <button
                  type="button"
                  className="h-11 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-2 transition"
                >
                  <i className="ri-microsoft-fill text-xl text-[#0078D4]"></i>
                  <span className="text-sm font-semibold text-slate-600">
                    Microsoft
                  </span>
                </button>

              </div>

              {/* Sign Up */}
              <p className="text-center text-xs sm:text-sm text-gray-500 pt-1">
                Don't have an account?

                <button
                  type="button"
                  className="ml-1.5 font-bold text-blue-600 hover:text-blue-700"
                >
                  Create Account
                </button>
              </p>

              {/* Footer */}
              <div className="flex items-center justify-center gap-2 text-[10px] sm:text-xs text-gray-400 pt-1">
                <i className="ri-shield-check-line text-emerald-500 text-base"></i>
                Your information is protected with secure encryption.
              </div>

            </form>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Login;

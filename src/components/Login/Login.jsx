import { useState } from "react";
import LoginPageImg from "../../assets/LoginAssets/LoginPageImg.png";
import "remixicon/fonts/remixicon.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#f4f7fc] flex items-center justify-center p-6">

      {/* Main Login Card */}
      <div className="w-full max-w-[1200px] min-h-[700px] bg-white rounded-3xl overflow-hidden shadow-[0_15px_50px_rgba(0,0,0,0.08)] flex flex-col lg:flex-row">

        {/* ================= LEFT IMAGE ================= */}
        <div className="w-full lg:w-[48%] h-[300px] lg:h-auto">
          <img
            src={LoginPageImg}
            alt="LedgerX Bank"
            className="w-full h-full object-cover"
          />
        </div>


        {/* ================= RIGHT LOGIN ================= */}
        <div className="w-full lg:w-[52%] px-8 py-10 sm:px-12 lg:px-16 xl:px-20 flex items-center">

          <div className="w-full max-w-[520px] mx-auto">

            {/* Heading */}
            <div className="mb-10">
              <h1 className="text-4xl sm:text-5xl font-bold text-[#102752] tracking-tight">
                Welcome Back
              </h1>

              <p className="mt-3 text-base sm:text-lg text-gray-500">
                Sign in to your LedgerX account
              </p>
            </div>


            {/* ================= FORM ================= */}
            <form>

              {/* Email / Mobile */}
              <div className="mb-6">

                <label className="block text-base font-semibold text-[#263b60] mb-2">
                  Email or Mobile Number
                </label>

                <div className="relative">
                  <i className="ri-mail-line absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />

                  <input
                    type="text"
                    placeholder="Enter your email or mobile number"
                    className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 bg-[#fafcff] text-base text-gray-700 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 placeholder:text-gray-400"
                  />
                </div>

              </div>


              {/* Password */}
              <div className="mb-5">

                <label className="block text-base font-semibold text-[#263b60] mb-2">
                  Password
                </label>

                <div className="relative">

                  <i className="ri-lock-line absolute left-4 top-1/2 -translate-y-1/2 text-xl text-gray-400" />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full h-14 pl-12 pr-12 rounded-xl border border-gray-200 bg-[#fafcff] text-base text-gray-700 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xl text-gray-400 hover:text-blue-600 transition-colors"
                  >
                    <i
                      className={
                        showPassword
                          ? "ri-eye-off-line"
                          : "ri-eye-line"
                      }
                    />
                  </button>

                </div>

              </div>


              {/* Remember + Forgot Password */}
              <div className="flex items-center justify-between mb-8">

                <label className="flex items-center gap-2 cursor-pointer">

                  <input
                    type="checkbox"
                    className="w-4 h-4 accent-blue-600 cursor-pointer"
                  />

                  <span className="text-sm text-gray-500">
                    Remember me
                  </span>

                </label>

                <button
                  type="button"
                  className="text-sm font-semibold text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Forgot Password?
                </button>

              </div>


              {/* Login Button */}
              <button
                type="submit"
                className="w-full h-14 rounded-xl bg-blue-600 hover:bg-blue-700 active:scale-[0.99] text-white text-lg font-semibold shadow-lg shadow-blue-200 transition-all duration-200"
              >
                Sign In
              </button>


              {/* Divider */}
              <div className="flex items-center gap-4 my-8">

                <div className="flex-1 h-px bg-gray-200" />

                <span className="text-sm text-gray-400">
                  Or continue with
                </span>

                <div className="flex-1 h-px bg-gray-200" />

              </div>


              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4">

                <button
                  type="button"
                  className="h-12 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-3 transition"
                >
                  <i className="ri-google-fill text-xl text-[#4285F4]" />

                  <span className="text-sm font-medium text-gray-600">
                    Google
                  </span>
                </button>


                <button
                  type="button"
                  className="h-12 rounded-xl border border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-3 transition"
                >
                  <i className="ri-microsoft-fill text-xl text-[#0078D4]" />

                  <span className="text-sm font-medium text-gray-600">
                    Microsoft
                  </span>
                </button>

              </div>


              {/* Sign Up */}
              <p className="text-center text-sm text-gray-500 mt-8">

                Don't have an account?

                <button
                  type="button"
                  className="ml-2 font-semibold text-blue-600 hover:text-blue-700"
                >
                  Sign Up
                </button>

              </p>

            </form>

          </div>
        </div>

      </div>
    </div>
  );
};

export default Login;
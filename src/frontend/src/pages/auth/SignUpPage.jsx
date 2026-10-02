import Sidebar from "../../components/common/sidebar";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-section.svg"

const SignUpPage = () => (
  <div className="flex min-h-screen w-full items-center justify-center">
    <Sidebar />
    <div className="mx-auto flex h-[100vh] w-full max-w-[880px] items-center justify-center">
      <div className="flex w-full max-w-[440px] min-h-screen flex-col items-center gap-[24px] p-[16px] md:max-h-[754px]">
        <img src={logo} className=" md:hidden block" alt="" />
        <div>
          <h1 className="font-bold text-[32px] text-black">Create Account</h1>
          <p className="text-sm ">Join thousands topping up smarter</p>
        </div>

        <div className="w-full ">
          <form className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-black"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="e.g Sarah Adebayo"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                    required
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-black"
              >
                Email Adress
              </label>
              <input
                type="email"
                id="email"
                placeholder="sarah.ade@domain.com"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                    required
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-black"
              >
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                placeholder="+234 800 000 0000"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                    required
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="At least 8 characters"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                    required
              />
            </div>
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="password"
                className="text-sm font-semibold text-black"
              >
                Comfirm Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="At least 8 characters"
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                    required
              />
            </div>
            
          </form>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white rounded-[8px] px-[12px] py-[10px] focus:outline-none"
        >
          Sign Up
        </button>
        <div className="flex items-center w-full">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink mx-4 text-xs text-gray-400 font-medium ">
            or continue with
          </span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <div className="flex gap-[16px] w-full">
          <div className="w-full border border-gray-300 rounded-[12px] px-[12px] py-[12px] focus:outline-none focus:border-blue-500 flex justify-center items-center">
            <img src="" alt="" />
            <p className="text-xs font-semibold text-black"> Google</p>
          </div>
          <div className="w-full border border-gray-300 rounded-[12px] px-[12px] py-[12px] focus:outline-none focus:border-blue-500 flex justify-center items-center">
            <img src="" alt="" />
            <p className="text-xs font-semibold text-black">Apple</p>
          </div>
        </div>
        <p className="text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 text-[14px] font-semibold">
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
);
export default SignUpPage;

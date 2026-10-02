import Sidebar from "../../components/common/sidebar";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo-section.svg"

const LoginPage = () => (
  <div className="flex w-full items-center justify-center">
    <Sidebar />
    <div className="mx-auto flex h-[100vh] w-full max-w-[880px] items-center justify-center">
      <div className="flex w-full max-w-[440px] flex-col items-center gap-[32px] p-[24px] md:max-h-[555px]">
        <img src={logo} className=" md:hidden block" alt="" />
        <div>
          <h1 className="font-bold text-[32px] text-black">Welcome Back</h1>
          <p className="text-sm ">Log in to your TopUpNG account</p>
        </div>

        <div className="w-full flex-col">
          <form className="flex flex-col gap-[16px]">
            <div className="flex flex-col gap-[6px]">
              <label
                htmlFor="email"
                className="text-sm font-semibold text-black"
              >
                Email or Phone Number
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
                htmlFor="password"
                className="text-sm font-semibold text-black"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="......."
                    className="w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-xl px-3.5 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white transition-all placeholder:text-slate-400 font-medium"
                    required
              />
            </div>
            <Link
              to="/reset-password"
              className="text-blue-500 text-right text-sm font-semibold"
            >
              Forgot your password?
            </Link>
          </form>
        </div>

       
          <Link to={"/dashboard"} className="w-full bg-blue-500 text-white rounded-[8px] px-[12px] py-[10px] focus:outline-none flex items-center justify-center">
            <button
          type="submit"
          >Login</button>
          </Link>
       
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
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 text-[14px] font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  </div>
);
export default LoginPage;

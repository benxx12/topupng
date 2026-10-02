import { Link } from "react-router-dom"

function Footer() {
  return (
    <div className="hidden w-full bg-[#fff] py-[40px] md:block">
      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-between gap-4 px-0 md:px-8 lg:px-[120px]">
        <p className="text-[14px] text-[#94A3B8]">© 2026 TopUpNG Technologies. All rights reserved.</p>
        <ul className='flex gap-[24px]'>
          <li><Link to="" className='text-[14px] text-[#94A3B8] hover:text-[#1E293B] transition-colors'>Support</Link></li>
          <li><Link to="" className='text-[14px] text-[#94A3B8] hover:text-[#1E293B] transition-colors'>Privacy Policy</Link></li>
          <li><Link to="" className='text-[14px] text-[#94A3B8] hover:text-[#1E293B] transition-colors'>Terms of Service</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
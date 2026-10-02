
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineHome, AiOutlinePhone, AiOutlineCalendar, AiOutlineUser } from 'react-icons/ai';
import '../../styles/responsive.css'

function Navigation() {
    const location = useLocation();
     const navLinks = [
    { label: 'Home', path: '/dashboard', icon: AiOutlineHome },
    { label: 'Buy', path: '/airtime', icon: AiOutlinePhone },
    { label: 'History', path: '/history', icon: AiOutlineCalendar },
    { label: 'Account', path: '/account', icon: AiOutlineUser }
  ];

  const isActive = (path) => location.pathname === path;
    return (
        <div className='w-full bg-[white] h-fit fixed bottom-0 left-0 right-0 px-[24px] py-[12px] z-50 flex items-center justify-between text-white md:hidden shadow-[0_-4px_16px_rgba(15,23,42,0.06)]'>
            {navLinks.map((link) => (
                <Link
                    key={link.path}
                    to={link.path}
                    className="flex flex-col items-center gap-[4px] group"
                >
                    <link.icon
                        className={`h-[24px] w-[24px] transition-all duration-300
            ${isActive(link.path)
                                ? 'text-[#3B82F6]'
                                : 'text-[#94A3B8] group-hover:text-[#64748B]'}`}
                    />
                    <span
                        className={`text-[10px] font-medium transition-all duration-300
            ${isActive(link.path)
                                ? 'text-[#3B82F6] translate-y-[-2px]'
                                : 'text-[#94A3B8] group-hover:translate-y-[-2px] group-hover:text-[#64748B]'}`}
                    >
                        {link.label}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Navigation
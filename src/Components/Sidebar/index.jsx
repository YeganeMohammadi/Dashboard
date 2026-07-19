import React, { useContext } from 'react';
import { FiBookOpen, FiCreditCard, FiHome, FiUser, FiUsers, FiX } from 'react-icons/fi';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthContext';
import { SideBarContext } from '../../Context/SideBarContrext';


export default function Sidebar() {
  const { user, logout } = useContext(AuthContext)
  const {isOpen,toggleOpenSideBar }=useContext(SideBarContext)
  const navigate = useNavigate()
  const handleLogout = () => {
    logout()
    navigate("/")
  }
  const menu = [
    { title: 'صفحه اصلی', To: '/dashboard', icon: <FiHome size={20} /> },
    { title: 'دوره‌ها', To: '/dashboard/courses', icon: <FiBookOpen size={20} /> },
    { title: 'اساتید', To: '/dashboard/instructors', icon: <FiUser size={20} /> },
    { title: 'دانشجویان', To: '/dashboard/students', icon: <FiUsers size={20} /> },
    { title: 'پرداخت‌ها', To: '/dashboard/payments', icon: <FiCreditCard size={20} /> }
  ]
  const linkClass = ({ isActive }) => `flex flex-row-reverse items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200
     ${isActive
      ? 'bg-blue-900 text-white shadow-md'
      : 'text-gray-200 hover:bg-gray-500 hover:text-white'
    }`
  const menuItems = menu.map(item => (<NavLink
    key={item.To}
    to={item.To}
    end={item.To === '/dashboard'}
    className={linkClass}
    onClick={toggleOpenSideBar}
  >
    <span>{item.icon}</span>
    <span>{item.title}</span>
  </NavLink>))

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={toggleOpenSideBar}
        />
      )}
      <aside className={`fixed flex flex-col top-0 right-0 h-screen w-64 bg-gray-700 p-5 z-50
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "translate-x-full"}
        md:translate-x-0 md:static md:block`}>
        <div className="mb-8 border-b border-gray-500 pb-4 text-center">
          <button
            className="text-white md:hidden"
            onClick={toggleOpenSideBar}
          >
            <FiX size={22} />
          </button>
          <h2 className="text-white text-2xl font-bold">داشبورد</h2>
          <p className="text-gray-300 text-sm mt-1">پنل مدیریت</p>
        </div>
        <div className='md:hidden flex flex-col items-center justify-center gap-2'>

          <img src={user?.avatar} alt="user-avatar" className='w-8 h-8 rounded-full object-cover' />

          <span className=' text-white text-[18px] font-bold'>{user?.username}</span>

        </div>
        <nav className="flex flex-col flex-1 overflow-y-auto gap-2">
          {menuItems}
        </nav>
        <button className='md:hidden bg-blue-900 font-bold text-white text-sm px-3 py-1 rounded-sm cursor-pointer w-full' onClick={handleLogout}>خروج</button>
      </aside>
    </>

  );
}

import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { FiMenu, FiSearch } from 'react-icons/fi';
import { SideBarContext } from '../../Context/SideBarContrext';

export default function Navbar() {
  const { logout, user } = useContext(AuthContext)
  const { toggleOpenSideBar } = useContext(SideBarContext)
  const [searchExpression, setSearchExpression] = useState('');
  const [showSearch, setShowSearch] = useState(false)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/")
  }
  const handleSearch = (inp) => {
    setSearchExpression(inp)
    if (searchExpression.length > 0) {

    }
  }

  return (

    <div className='flex justify-between items-center px-4 py-2 bg-gray-700 text-white'>

      {/* LOGO */}
      <div>
        <span className='text-white text-[22px] font-bold'>LOGO</span>
      </div>

      {/* Serach on Desktop */}
      <div>
        <input
          type="text"
          placeholder='search...'
          value={searchExpression}
          className='hidden md:block ring-1 ring-white text-white rounded-full p-2 outline-0'
          onChange={e => handleSearch(e.target.value)} />
      </div>

      {/* Serach on mobile */}

      <div className='md:hidden'>
        <FiSearch size={22} className='cursor-pointer' onClick={() => setShowSearch(!showSearch)} />
      </div>
      <button
        className="md:hidden"
        onClick={toggleOpenSideBar}
      >
        <FiMenu size={24} />
      </button>
      {showSearch && (<div className='absolute top-14 left-0 w-full bg-gray-700 p-3 md:hidden'>
        <input
          type="text"
          value={searchExpression}
          placeholder='search...'
          className='md:hidden ring-1 ring-white text-white rounded-full p-2 outline-0'
          onChange={e => handleSearch(e.target.value)} />
      </div>)}

      {/* user section */}
      <div className='hidden md:flex flex-row-reverse items-center gap-2'>

        <img src={user?.avatar} alt="user-avatar" className='w-8 h-8 rounded-full object-cover' />

        <span className='text-white text-[18px] font-bold'>{user?.username}</span>
        <button className='bg-blue-900 font-bold text-white text-sm px-3 py-1 rounded-sm cursor-pointer' onClick={handleLogout}>خروج</button>
      </div>


    </div>
  );
}



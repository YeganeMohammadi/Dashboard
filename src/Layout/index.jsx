import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Components/Navbar';
import Sidebar from '../Components/Sidebar';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import SideBarContrextProvider from '../Context/SideBarContrext';

export default function Layout() {

  const { token, isLoading } = useContext(AuthContext)

  if (isLoading) return <div>در حال بارگذاری...</div>;
  if (!token) {
    return <Navigate to={"/"} />
  }

  return (
    <>
      <SideBarContrextProvider >
        <div className='h-screen flex flex-col overflow-hidden'>
          <Navbar />
          <div className='flex flex-row-reverse justify-between flex-1 overflow-hidden'>
            <Sidebar />
            <div className='flex-1 h-full overflow-y-auto'>
              <Outlet />
            </div>

          </div>
        </div>

      </SideBarContrextProvider>

    </>
  );
}

import React from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

export default function Instructors() {
  const navigate = useNavigate()
  const location = useLocation();
  const isInList = location.pathname === "/dashboard/instructors" 
  return (
    <div className="flex-1 min-w-0 p-6">


      <div className="flex flex-row-reverse justify-between items-center mb-6">
        <button className="bg-blue-50 font-bold text-blue-950 cursor-pointer hover:text-blue-800 py-2 px-4 border-2 border-blue-900 rounded-2xl" onClick={() => navigate("/dashboard/instructors")}>
          {isInList?"لیست اساتید" : "بازگشت به لیست اساتید"}
        </button>
        <button
          onClick={() => navigate("/dashboard/instructors/create")}
          className="bg-blue-900 text-white px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-800 transition"
        >
         ایجاد استاد جدید
        </button>
      </div>


      <div className="bg-white rounded-xl shadow p-4">
        <Outlet />
      </div>

    </div>

  );
}

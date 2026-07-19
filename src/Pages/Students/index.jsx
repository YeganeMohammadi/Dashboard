import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function Course() {
  const navigate = useNavigate()
  return (
    <div className="flex-1 min-w-0 p-6">

      
      <div className="flex flex-row-reverse justify-between items-center mb-6">
        <button className="bg-blue-50 font-bold text-blue-950 cursor-pointer hover:text-blue-800 py-2 px-4 border-2 border-blue-900 rounded-2xl" onClick={() => navigate("/dashboard/students")}>
          لیست دانشجویان
        </button>

      </div>

      
      <div className="bg-white rounded-xl shadow p-4">
        <Outlet />
      </div>

    </div>
  );
}

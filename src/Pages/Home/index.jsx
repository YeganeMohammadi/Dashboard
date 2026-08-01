import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import StatCards from './StatCards';
import RegistrationTrend from './RgistrationTrend';
import CourseStatus from './CourseStatus';
import RevenueChart from './RevenueChart';
import RecentActivities from './RecentActivities';
import ProgressRadar from './ProgressRadar';
import FetchData from '../../Utils/FetchData';



export default function Home() { 
    return (
        <>
            <div className='p-4'>
                <StatCards />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mb-8">

                <div className="bg-white p-5 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        📈 روند ثبت‌نام ماهانه
                    </h3>
                    <RegistrationTrend />
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        🎯 وضعیت دوره‌ها
                    </h3>
                    <CourseStatus />
                </div>
            </div>
            <div className="bg-white p-5 rounded-xl shadow-sm mb-8">

                <h3 className="text-lg font-semibold text-gray-800 mb-4">
                    💰 درآمد و تعداد دانشجویان هر دوره
                </h3>
                <RevenueChart />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

                <div className="bg-white p-5 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        📊 مقایسه پیشرفت دانشجویان
                    </h3>
                    <ProgressRadar />
                </div>

                <div className="bg-white p-5 rounded-xl shadow-sm">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">
                        🕒 آخرین فعالیت‌ها
                    </h3>
                    <RecentActivities />
                </div>
            </div>
        </>

    );
}

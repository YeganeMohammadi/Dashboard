import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export default function RegistrationTrend() {
    const data = [
        { month: 'دی', registrations: 45, completed: 30 },
        { month: 'بهمن', registrations: 62, completed: 45 },
        { month: 'اسفند', registrations: 78, completed: 58 },
        { month: 'فروردین', registrations: 55, completed: 40 },
        { month: 'اردیبهشت', registrations: 90, completed: 72 },
        { month: 'خرداد', registrations: 110, completed: 85 },
        { month: 'تیر', registrations: 95, completed: 78 },
        { month: 'مرداد', registrations: 130, completed: 102 }
    ];
    return (
        <div className="w-full h-80">
            <ResponsiveContainer>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="month" tick={{ fill: '#6b7280' }} />
                    <YAxis tick={{ fill: '#6b7280' }} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            border: 'none',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}
                    />
                    <Legend wrapperStyle={{ paddingTop: '10px' }} />
                    <Line
                        type="monotone"
                        dataKey="registrations"
                        stroke="#8884d8"
                        strokeWidth={3}
                        name="ثبت‌نام‌ها"
                        dot={{ r: 5, fill: '#8884d8' }}
                        activeDot={{ r: 8 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="completed"
                        stroke="#82ca9d"
                        strokeWidth={3}
                        name="تکمیل‌کنندگان"
                        dot={{ r: 5, fill: '#82ca9d' }}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
}

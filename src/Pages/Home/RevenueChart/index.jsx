import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Cell, } from 'recharts';
export default function RevenueChart() {
    const data = [
        { name: 'React', revenue: 45000000, students: 120, color: '#8884d8' },
        { name: 'Python', revenue: 32000000, students: 95, color: '#82ca9d' },
        { name: 'UI/UX', revenue: 28000000, students: 78, color: '#ffc658' },
        { name: 'Node.js', revenue: 39000000, students: 110, color: '#ff7300' },
        { name: 'Docker', revenue: 19000000, students: 55, color: '#a4de6c' },
        { name: 'Vue.js', revenue: 15000000, students: 42, color: '#ff6b6b' },
    ];
    const formatCurrency = (value) => {
        return value.toLocaleString('fa-IR') + ' تومان';
    }
    return (
        <div className="w-full h-80">
            <ResponsiveContainer>
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                    <XAxis dataKey="name" tick={{ fill: '#6b7280' }} />
                    <YAxis
                        yAxisId="left"
                        orientation="left"
                        stroke="#8884d8"
                        tick={{ fill: '#6b7280' }}
                        tickFormatter={(value) => (value / 1000000).toFixed(0) + 'M'}
                    />
                    <YAxis
                        yAxisId="right"
                        orientation="right"
                        stroke="#82ca9d"
                        tick={{ fill: '#6b7280' }}
                    />
                    <Tooltip
                        formatter={(value, name) => {
                            if (name === 'درآمد') return formatCurrency(value);
                            return value + ' نفر';
                        }}
                        contentStyle={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            border: 'none',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}
                    />
                    <Legend />
                    <Bar
                        yAxisId="left"
                        dataKey="revenue"
                        fill="#8884d8"
                        name="درآمد"
                        radius={[4, 4, 0, 0]}
                        barSize={40}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Bar>
                    <Bar
                        yAxisId="right"
                        dataKey="students"
                        fill="#82ca9d"
                        name="تعداد دانشجو"
                        radius={[4, 4, 0, 0]}
                        barSize={40}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}

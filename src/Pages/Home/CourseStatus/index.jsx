import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
export default function CourseStatus() {
    const data = [
        { name: 'در حال برگزاری', value: 12, color: '#4CAF50' },
        { name: 'تکمیل شده', value: 24, color: '#2196F3' },
        { name: 'آینده', value: 8, color: '#FF9800' },
        { name: 'لغو شده', value: 3, color: '#f44336' }
    ];
    const renderCustomizedLabel = ({cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
        const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);
        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };
    return (
        <div className="w-full h-75">
            <ResponsiveContainer>
                <PieChart>

                    <Pie data={data} cx="50%" cy="50%" labelLine={true} label={renderCustomizedLabel} outerRadius={80} fill="#8884d8" dataKey="value" >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                    </Pie>

                    <Tooltip formatter={(value) => `${value} دوره`} 
                    contentStyle={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            border: 'none',
                            boxShadow: '0 2px 8px rgba(0,0,0,0.15)'
                        }}
                    />

                    <Legend verticalAlign="bottom" height={36} wrapperStyle={{ paddingTop: '10px' }} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

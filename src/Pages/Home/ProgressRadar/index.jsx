import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend, Tooltip } from 'recharts';
export default function ProgressRadar() {
    const data = [
        { subject: 'React', current: 120, average: 110 },
        { subject: 'Python', current: 98, average: 130 },
        { subject: 'JavaScript', current: 86, average: 130 },
        { subject: 'CSS', current: 99, average: 100 },
        { subject: 'Node.js', current: 85, average: 90 },
        { subject: 'Docker', current: 65, average: 75 },
        { subject: 'TypeScript', current: 70, average: 85 },
    ];
    return (
        <div className="w-full h-80">
            <ResponsiveContainer>
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                    <PolarGrid stroke="#e5e7eb" />
                    <PolarAngleAxis dataKey="subject" tick={{ fill: '#6b7280', fontSize: 12 }} />
                    <PolarRadiusAxis angle={30} domain={[0, 150]} tick={{ fill: '#6b7280' }} />
                    <Radar
                        name="دانشجویان فعلی"
                        dataKey="current"
                        stroke="#8884d8"
                        fill="#8884d8"
                        fillOpacity={0.6}
                    />
                    <Radar
                        name="میانگین دوره‌ها"
                        dataKey="average"
                        stroke="#82ca9d"
                        fill="#82ca9d"
                        fillOpacity={0.4}
                    />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            borderRadius: '8px',
                            border: 'none',
                            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                        }}
                    />
                    <Legend verticalAlign="bottom" height={36} wrapperStyle={{ paddingTop: '10px' }} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    );
}

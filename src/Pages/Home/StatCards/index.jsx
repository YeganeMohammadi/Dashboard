import React from 'react';

export default function StatCards() {
    const stats = [
        { id: 1, title: 'کل دانشجویان', value: '۱,۲۴۷', icon: '👥', change: '+۱۲٪', color: 'green', bgColor: 'bg-green-50' },
        {
            id: 2,
            title: 'دوره‌های فعال',
            value: '۱۲',
            icon: '📚',
            change: '+۳',
            color: 'blue',
            bgColor: 'bg-blue-50'
        },
        {
            id: 3,
            title: 'درآمد ماهانه',
            value: '۴۵,۲۰۰,۰۰۰',
            icon: '💰',
            change: '+۱۸٪',
            color: 'orange',
            bgColor: 'bg-orange-50'
        },
        {
            id: 4,
            title: 'نرخ تکمیل',
            value: '۷۸٪',
            icon: '✅',
            change: '+۵٪',
            color: 'purple',
            bgColor: 'bg-purple-50'
        },
    ];

    const colorMap = {
        green: 'text-green-500 border-green-500',
        blue: 'text-blue-500 border-blue-500',
        orange: 'text-orange-500 border-orange-500',
        purple: 'text-purple-500 border-purple-500',
    };

    const bgColorMap = {
        green: 'bg-green-50',
        blue: 'bg-blue-50',
        orange: 'bg-orange-50',
        purple: 'bg-purple-50',
    };
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">

            {stats.map((stat) => (
                <div
                    key={stat.id} className={`bg-white p-5 rounded-xl shadow-md border-b-4 ${colorMap[stat.color]} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}>
                        
                    <div className="flex justify-between items-center">

                        <span className="text-3xl">{stat.icon}</span>

                        <span className={`${bgColorMap[stat.color]} text-${stat.color}-600 font-bold text-sm px-3 py-1 rounded-full`}>
                            {stat.change}
                        </span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-800 mt-2.5 mb-1">
                        {stat.value}
                    </h3>

                    <p className="text-sm text-gray-500 m-0">
                        {stat.title}
                    </p>
                </div>
            ))}
        </div>
    );
}

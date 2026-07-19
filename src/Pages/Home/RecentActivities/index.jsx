import React from 'react';

export default function RecentActivities() {
    const activities = [
        {
            id: 1,
            user: 'علی محمدی',
            action: 'ثبت‌نام در دوره React پیشرفته',
            time: '۵ دقیقه پیش',
            avatar: '👨‍🎓',
            color: 'bg-green-500'
        },
        {
            id: 2,
            user: 'سارا احمدی',
            action: 'تکمیل دوره Python مقدماتی',
            time: '۲۰ دقیقه پیش',
            avatar: '👩‍🎓',
            color: 'bg-blue-500'
        },
        {
            id: 3,
            user: 'رضا کریمی',
            action: 'خرید دوره UI/UX Design',
            time: '۱ ساعت پیش',
            avatar: '👨‍💻',
            color: 'bg-orange-500'
        },
        {
            id: 4,
            user: 'مریم حسینی',
            action: 'ارسال تیکت پشتیبانی فنی',
            time: '۲ ساعت پیش',
            avatar: '👩‍💻',
            color: 'bg-purple-500'
        },
        {
            id: 5,
            user: 'امیر قاسمی',
            action: 'ارسال پروژه نهایی دوره Node.js',
            time: '۳ ساعت پیش',
            avatar: '👨‍💼',
            color: 'bg-red-500'
        },
    ];
    return (
        <div className="bg-white rounded-xl py-1">
            <ul className="list-none p-0 m-0">
                {activities.map((activity) => (
                    <li
                        key={activity.id}
                        className="flex items-center px-4 py-3 border-b border-gray-100 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                    >
                        <span className="text-3xl ml-3 w-10 text-center">
                            {activity.avatar}
                        </span>
                        <div className="flex-1">
                            <p className="m-0 text-gray-800 text-sm">
                                <strong className="font-semibold">{activity.user}</strong>
                                <span className="mx-1.5">•</span>
                                {activity.action}
                            </p>
                            <span className="text-xs text-gray-400">
                                {activity.time}
                            </span>
                        </div>
                        <span className={`w-2 h-2 rounded-full ${activity.color} inline-block`} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

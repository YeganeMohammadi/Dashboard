import React from 'react';

export default function CourseCards({course}) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img 
        src={course.thumbnail} 
        alt={course.title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-800 mb-2">
          {course.title}
        </h3>
        <div className="flex items-center gap-2 text-gray-600">
          <span className="text-sm">دانشجو: {course.studentsCount}</span>
        </div>
      </div>
    </div>
  );
}
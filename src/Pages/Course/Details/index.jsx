import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchData from "../../../Utils/FetchData";

export default function CourseDetails() {
  const { id } = useParams();

  const [course, setCourse] = useState(null);
  const [instructorName, setInstructorName] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);

      const courseRes = await FetchData(`/courses/${id}`, { method: "GET" });

      if (!courseRes.success) {
        alert("دوره پیدا نشد");
        setLoading(false);
        return;
      }

      const courseData = courseRes.data;
      setCourse(courseData);

      const instructorsRes = await FetchData("/instructors", { method: "GET" });

      if (instructorsRes.success) {
        const instructor = instructorsRes.data.find(
          (item) => item.id === courseData.instructorId.toString()
        );
        setInstructorName(instructor ? instructor.name : "نامشخص");
      }

      setLoading(false);
    };

    getData();
  }, [id]);

  if (loading)
    return (
      <div className="flex justify-center items-center h-40 text-gray-500">
        در حال دریافت اطلاعات...
      </div>
    );

  if (!course)
    return (
      <div className="flex justify-center items-center h-40 text-red-500">
        دوره‌ای یافت نشد
      </div>
    );

  const statusText =
    course.status === "published" ? "منتشر شده" : "پیش‌نویس";

  const formattedPrice = new Intl.NumberFormat("fa-IR").format(course.price);

  return (
    <div dir="rtl" className="max-w-6xl mx-auto p-4 md:p-8 text-right">
      <div className="bg-white rounded-2xl shadow-sm border border-b-gray-800  p-4 md:p-6 grid md:grid-cols-2 gap-6">

        
        <div className="relative">
          <img
            src={course.thumbnail || "/Images/default-course.png"}
            alt={course.title}
            className="w-full h-64 md:min-h-80 object-cover rounded-xl shadow-lg shadow-gray-400"
          />

          <span
            className={`absolute top-3 right-3 text-xs px-3 py-1 rounded-full text-white
            ${course.status === "published" ? "bg-green-500" : "bg-yellow-500"}`}
          >
            {statusText}
          </span>
        </div>

        
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-xl md:text-2xl font-bold mb-6">
              {course.title}
            </h1>

            <dl className="grid grid-cols-2 gap-y-3 text-sm md:text-base text-gray-600">

              <dt className="font-medium text-gray-800">مدرس:</dt>
              <dd>{instructorName}</dd>

              <dt className="font-medium text-gray-800">تعداد دانشجو:</dt>
              <dd>{course.studentsCount}</dd>

              <dt className="font-medium text-gray-800">تاریخ ایجاد:</dt>
              <dd>{course.createdAt}</dd>

            </dl>
          </div>

          <div className="mt-8 flex items-center justify-between">
            <button className="bg-blue-600 hover:bg-blue-700 text-white cursor-pointer px-5 py-2 rounded-lg transition">
              ثبت‌نام
            </button>

            <div className="text-lg md:text-xl font-bold text-blue-600">
              {formattedPrice} میلیون تومان
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

import React, { useState } from 'react';
import { useEffect } from 'react';
import FetchData from '../../../Utils/FetchData';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { HiEye } from 'react-icons/hi';

export default function GetAllCourses() {
  const [courses, setCourses] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const [masters, setMAsters] = useState({})
  const navigate = useNavigate()
  const handleDelete = async (id) => {
    const confirmDelete = confirm("از حذف این دوره مطمئن هستید؟")

    if (!confirmDelete) return
    const res = await FetchData(`/courses/${id}`, { method: 'DELETE' });

    if (res.success) {
      setCourses(prev => prev.filter(course => course.id !== id));
    } else {
      alert(res.error || 'خطا در حذف دوره');
    }
  };

  const handleEdit = async (id) => navigate(`/dashboard/courses/update/${id}`)

  const handleDetails = async (id) => navigate(`/dashboard/courses/details/${id}`)

  useEffect(() => {
    (async () => {
      const courseRes = await FetchData('/courses', { method: "GET" })
      const instructorRes = await FetchData('/instructors', { method: 'GET' })
      if (courseRes.success && instructorRes.success) {
        setCourses(courseRes.data)

        const instructorMap = {}
        instructorRes.data.forEach(instructor => {
          instructorMap[instructor.id] = instructor.name
        });
        setMAsters(instructorMap)
      } else {
        alert(res.error || 'failed fetch');
      }

    })()


  }, [])
  const totalPages = Math.ceil(courses.length / limit)

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  const paginatedCourses = courses.slice(startIndex, endIndex)

  const courseItems = paginatedCourses?.map((course) => <tr key={course.id} className="border-b hover:bg-gray-50 transition">
    <td className="px-3 py-3 text-center whitespace-nowrap">{course.title}</td>
    <td className="px-3 py-3 text-center whitespace-nowrap"><Link to={`/dashboard/instructors/details/${course.instructorId}`}>{masters[course.instructorId] || '...'}</Link></td>
    <td className="px-3 py-3 text-center whitespace-nowrap">{course.status}</td>
    <td className="px-3 py-3 text-center whitespace-nowrap">
      <div className="flex gap-3 justify-center">

        <button
          type='button'
          onClick={() => handleEdit(course.id)}
          className="text-blue-600 hover:text-blue-800"
        >
          <FiEdit size={18} />
        </button>

        <button
          type='button'
          onClick={() => handleDelete(course.id)}
          className="text-red-600 hover:text-red-800"
        >
          <FiTrash2 size={18} />
        </button>

        <button
          type='button'
          onClick={() => handleDetails(course.id)}
          className="text-green-600 hover:text-green-800"
        >
          <HiEye size={18} />
        </button>

      </div>
    </td>
  </tr>)
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden min-w-0">
      <div className='overflow-x-auto '>
        <table dir='rtl' className="w-full min-w-[800px] text-sm text-right ">

          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-3 py-3 text-center">نام دوره</th>
              <th className="px-3 py-3 text-center">استاد</th>
              <th className="px-3 py-3 text-center">وضعیت دوره</th>
              <th className="px-3 py-3 text-center">عملیات</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {courseItems}
          </tbody>
          <tfoot>
            <tr>
              <td colSpan="4">
                <div className="flex justify-center items-center gap-2 py-4">

                  <button
                    disabled={page === 1}
                    onClick={() => setPage(p => p - 1)}
                    className="px-3 py-1 border rounded disabled:opacity-40"
                  >
                    قبلی
                  </button>

                  {[...Array(totalPages)].map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className={`px-3 py-1 border rounded ${page === i + 1 ? "bg-blue-600 text-white" : ""
                        }`}
                    >
                      {i + 1}
                    </button>
                  ))}

                  <button
                    disabled={page === totalPages}
                    onClick={() => setPage(p => p + 1)}
                    className="px-3 py-1 border rounded disabled:opacity-40"
                  >
                    بعدی
                  </button>

                </div>
              </td>
            </tr>
          </tfoot>

        </table>
      </div>

    </div>
  );

}
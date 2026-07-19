import React, { useState } from 'react';
import { useEffect } from 'react';
import FetchData from '../../../Utils/FetchData';
import { FiEdit, FiTrash2 } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { HiEye } from 'react-icons/hi';

export default function GetAllStudents() {
  const [students, setStudents] = useState([])
  const [page, setPage] = useState(1)
  const [limit, setLimit] = useState(5)
  const navigate = useNavigate()
  // const handleDelete = async (id) => {
  //   const confirmDelete = confirm("از حذف این استاد مطمئن هستید؟")

  //   if (!confirmDelete) return
  //   const res = await FetchData(`/instructors/${id}`, { method: 'DELETE' });

  //   if (res.success) {
  //     setCourses(prev => prev.filter(instrutor => instrutor.id !== id));
  //   } else {
  //     alert(res.error || 'خطا در حذف استاد');
  //   }
  // };

  const handleEdit = async (id) => navigate(`/dashboard/students/update/${id}`)

  // const handleDetails = async (id) => navigate(`/dashboard/instructors/details/${id}`)

  useEffect(() => {
    (async () => {
      const studentsRes = await FetchData('/students', { method: "GET" })
      if (studentsRes.success) {
        setStudents(studentsRes.data)
      } else {
        alert(studentsRes.error || 'failed fetch');
      }

    })()


  }, [])
  const totalPages = Math.ceil(students.length / limit)

  const startIndex = (page - 1) * limit
  const endIndex = startIndex + limit

  const paginatedCourses = students.slice(startIndex, endIndex)

  const studentItems = paginatedCourses?.map((student) => <tr key={student.id} className="border-b hover:bg-gray-50 transition">
    <td className="px-3 py-3 text-center whitespace-nowrap"><div className='flex flex-col items-center'>
      <img src={student.avatar} alt={student.name} />
      <span>{student.name}</span>
    </div></td>
    <td className="px-3 py-3 text-center whitespace-nowrap">{student.status}</td>
    <td className="px-3 py-3 text-center whitespace-nowrap">{student.email}</td>
    <td className="px-3 py-3 text-center whitespace-nowrap">
      <div className="flex gap-3 justify-center">

        <button
          type='button'
          onClick={() => handleEdit(student.id)}
          className="text-blue-600 hover:text-blue-800"
        >
          <FiEdit size={18} />
        </button>

        {/* <button
          type='button'
          onClick={() => handleDetails(student.id)}
          className="text-green-600 hover:text-green-800"
        >
          <HiEye size={18} />
        </button> */}

      </div>
    </td>
  </tr>)
  return (
    <div className="bg-white shadow rounded-xl overflow-hidden min-w-0">
      <div className='overflow-x-auto '>
        <table dir='rtl' className="w-full min-w-[800px] text-sm text-right ">

          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-3 py-3 text-center">نام دانشجو</th>
              <th className="px-3 py-3 text-center">وضعیت</th>
              <th className="px-3 py-3 text-center"> ایمیل</th>
              <th className="px-3 py-3 text-center">عملیات</th>
            </tr>
          </thead>

          <tbody className="text-gray-700">
            {studentItems}
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
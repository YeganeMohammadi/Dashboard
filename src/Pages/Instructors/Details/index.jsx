import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import FetchData from "../../../Utils/FetchData";
import { RiFileUserLine } from "react-icons/ri";
import { BiAward, BiUser } from "react-icons/bi";
import { FiMail } from "react-icons/fi";
import { FaBookOpen } from "react-icons/fa";
import CourseCards from "../../../Components/CourseCards";

export default function InstructorDetails() {
  const { id } = useParams();
  const [instructor, setInstructor] = useState(null);
  const [courses,setCourses]=useState(null)
  useEffect(() => {
    (async () => {
      const res = await FetchData(`/instructors/${id}`, { method: "GET" });
      const courseRes = await FetchData('/courses',{method:"GET"})
      if (res.success) {
        setInstructor(res.data);
      } else {
        alert('faild to find instructor!')
      }
      if(courseRes.success){
        setCourses(courseRes.data)
      } else{
        alert('faild to find course!')
      }
    })()
  }, [id]);

  if (!instructor) return <div>loading...</div>;
  const insCourse = courses.filter((course)=>    course.instructorId == instructor.id )
  const courseCards = courses.map((course)=> <CourseCards key={course.id} course={course}/>)
  return (
    <div dir="rtl" className="flex-col w-full p-5 bg-linear-to-br from-gray-100 to-gray-50 ">
      <div className="md:flex md:gap-5">
        <div className="flex justify-center w-full md:justify-start  md:w-[35%]">
          <img src={instructor.avatar} alt={instructor.name} className="w-25 md:w-50" />
        </div>
        <div className=" w-full md:w-[55%] mt-2">
          <div className="flex gap-2 py-2 px-4 border border-green-900 bg-green-50 font-bold  text-green-900  rounded-2xl w-fit">
            <BiUser className=" size-7" />
            <span>{instructor.name}</span>
          </div>
          <div className="flex gap-2 py-2 px-4 border border-pink-900 bg-pink-50 font-bold  text-pink-900  rounded-2xl mt-2 w-fit">
            <FiMail className=" size-7" />
            <span>{instructor.email}</span>
          </div>
          <div className="flex gap-2 py-2 px-4 border border-purple-900 bg-purple-50 font-bold  text-purple-900  rounded-2xl mt-2 w-fit">
            <BiAward className=" size-7" />
            <span>{instructor.specialty}</span>
          </div>
        </div>
      </div>
      <div className="mt-6 shadow-lg">
        <div className="flex gap-3 text-blue-950 font-bold text-xl items-center w-full">
          <FaBookOpen/>
          <h2>دوره‌های این استاد</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-5">
          {courseCards}
        </div>
      </div>
    </div>
  );
}



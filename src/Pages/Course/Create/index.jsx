import React from 'react';
import CourseForm from '../../../Components/Forms/CourseForm';
import FetchData from '../../../Utils/FetchData';

export default function CreateCourse() {

  const handleAddCourse = async (data) => {
    const AllCoursesRes= await FetchData('/courses',{method:'GET'})
    let mId ='0'
    if(AllCoursesRes.success && AllCoursesRes.data.length >0){
      const Ids= AllCoursesRes.data.map((course)=>Number(course.id))
      const maxId= Math.max(...Ids)
      mId = maxId + 1

    }
    const payload = {
      id: Number(mId),
      title: data.title,
      price: Number(data.price),
      instructorId: Number(data.instructorId),
      thumbnail: data.thumbnail,
      status: data.status || "draft",
      studentsCount: 0,
      createdAt: new Date().toISOString().slice(0, 10)
    }
    const res = await FetchData('/courses', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    if(res.success){
      alert(`دوره با آیدی ${mId} ساخته شد`)
    }
    console.log(res)
  }

  return (
    <CourseForm onSubmit={handleAddCourse} />
  )
}

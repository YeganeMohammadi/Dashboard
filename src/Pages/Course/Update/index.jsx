import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchData from '../../../Utils/FetchData';
import CourseForm from '../../../Components/Forms/CourseForm';


export default function UpdateCourses() {
  const {id} = useParams()
  const [courseData,setCourseData]=useState({})
  useEffect(()=>{
    (async()=>{
      const thisCourse = await FetchData(`/courses/${id}`,{method:'GET'})
      if(thisCourse.success){
        console.log(thisCourse.data);
        setCourseData(thisCourse.data)
      }else{
        alert('something went wrong in fetch the course')
      }
    })()
  },[id])

  const handleUpdate=async(updateData)=>{
    const res = await FetchData(`/courses/${id}`,{method:'PUT',body: JSON.stringify(updateData)})
    if(res.success){
      alert('آپدیت دوره با موفقیت انجام شد:)')
    }else{
      alert('آپدیت ناموفق:((')
    }
  }
  return (
    <div>
      {courseData?(<CourseForm initialData={courseData} onSubmit={handleUpdate}/>):(<p>Loading....</p>)}
    </div>
  );
}

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FetchData from '../../../Utils/FetchData';
import InstructorForm from '../../../Components/Forms/InstructorForm';


export default function UpdateInstructor() {
  const {id} = useParams()
  const [insData,setInsData]=useState({})
  useEffect(()=>{
    (async()=>{
      const thisIns = await FetchData(`/instructors/${id}`,{method:'GET'})
      if(thisIns.success){
        setInsData(thisIns.data)
      }else{
        alert('Something went wrong in fetch the instructor')
      }
    })()
  },[id])

  const handleUpdate=async(updateData)=>{
    const res = await FetchData(`/instructors/${id}`,{method:'PUT',body: JSON.stringify(updateData)})
    if(res.success){
      alert('آپدیت دوره با موفقیت انجام شد:)')
    }else{
      alert('آپدیت ناموفق:((')
    }
  }
  return (
    <div>
      {insData?(<InstructorForm initialData={insData} onSubmit={handleUpdate}/>):(<p>Loading....</p>)}
    </div>
  );
}


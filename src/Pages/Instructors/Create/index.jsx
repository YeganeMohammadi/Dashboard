import React from 'react';
import CourseForm from '../../../Components/Forms/CourseForm';
import FetchData from '../../../Utils/FetchData';
import InstructorForm from '../../../Components/Forms/InstructorForm';

export default function CreateInstructor() {

  const handleAddIns = async (data) => {
    const AllInsesRes= await FetchData('/instructors',{method:'GET'})
    let mId ='0'
    if(AllInsesRes.success && AllInsesRes.data.length >0){
      const Ids= AllInsesRes.data.map((ins)=>Number(ins.id))
      const maxId= Math.max(...Ids)
      mId = maxId + 1
    }
    const payload = {
      id: Number(mId),
      name: data.name,
      specialty: data.specialty,
      email: data.email,
      avatar: data.avatar
    }
    const res = await FetchData('/instructors', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    if(res.success){
      alert(`استاد با آیدی ${mId} ایجاد شد`)
    }
    console.log(res)
  }

  return (
    <InstructorForm onSubmit={handleAddIns} />
  )
}

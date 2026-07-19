import React, { useState } from 'react';

export default function useFormfields(initialFields={}) {
    const [fields,setFields]=useState(initialFields)
    const handleChanges=(e)=>{
        const {target}=e;
        setFields({...fields,[target.name]:target.value})
    }
  return [fields,handleChanges,setFields]
}

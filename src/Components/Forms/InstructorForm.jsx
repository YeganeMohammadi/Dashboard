import React, { useEffect, useState } from 'react';
import FetchData from '../../Utils/FetchData';
import InputText from '../Inputs/InputText';


export default function InstructorForm({ initialData = {}, onSubmit }) {
    const [formData, setFormData] = useState({
        id: initialData.id || null,
        name: initialData.name || '',
        specialty: initialData.specialty || "",
        email: initialData.email || "",
        avatar: initialData.avatar || "",
    })
    

    useEffect(() => {
        if (initialData && Object.keys(initialData).length) {
            setFormData({
                id: initialData.id || null,
                name: initialData.name || '',
                specialty: initialData.specialty || "",
                email: initialData.email || "",
                avatar: initialData.avatar || "",
            })
        }
    }, [initialData])

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);

    }
    
    return (
        <form onSubmit={handleSubmit} dir='rtl' className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl space-y-4 mx-auto">
            <h2 className="text-lg font-bold text-gray-700">
                {initialData?.id ? "ویرایش مشخصات استاد" : "افزودن استاد"}
            </h2>
            <InputText
                label={'نام و نام خانوادگی'}
                name={"name"}
                onChange={handleChange}
                placeholder={"نام و نام خانوادگی"}
                value={formData.name} />

            <InputText
                label={'تخصص'}
                name="specialty"
                value={formData.specialty}
                onChange={handleChange}
                placeholder="تخصص"
            />
            <InputText
                label={'تصویر'}
                name={"avatar"}
                onChange={handleChange}
                placeholder={"لینک تصویر استاد"}
                value={formData.avatar} />

        

            <InputText
                label={"ایمیل"}
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={"SampleEmail@gmail.com"}
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                {initialData?.id ? "اعمال تغییرات" : "افزودن"}
            </button>

        </form>
    );
}

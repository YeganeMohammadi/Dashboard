import React, { useEffect, useState } from 'react';
import FetchData from '../../Utils/FetchData';
import InputText from '../Inputs/InputText';


export default function CourseForm({ initialData = {}, onSubmit }) {
    const [masters, setMasters] = useState([])
    const [formData, setFormData] = useState({
        id: initialData.id || null,
        title: initialData.title || '',
        price: initialData.price || "",
        instructorId: initialData.instructorId || "",
        thumbnail: initialData.thumbnail || "",
        status: initialData.status || "draft",
        studentsCount: initialData.studentsCount || 0,
        createdAt: initialData.createdAt || "",
    })
    useEffect(() => {
        (async () => {
            const masterRes = await FetchData('/instructors', { method: 'GET' })
            if (masterRes.success) {
                setMasters(masterRes.data)
            } else {
                alert(masterRes.error || 'failed fetch')
            }

        })()
    }, [])

    useEffect(() => {
        if (initialData && Object.keys(initialData).length) {
            setFormData({
                id: initialData.id || null,
                title: initialData.title || '',
                price: initialData.price || '',
                instructorId: initialData.instructorId || '',
                thumbnail: initialData.thumbnail || '',
                status: initialData.status || 'draft',
                studentsCount: initialData.studentsCount || 0,
                createdAt: initialData.createdAt || ""
            })
        }
    }, [initialData])

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData(prev => ({
            ...prev,
            [name]: (name === "studentsCount" || name === "instructorId" )? Number(value) : value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);

    }
    const selectItems = masters.map(mas => (<option key={mas.id} value={mas.id}>{mas.name}</option>))
    return (
        <form onSubmit={handleSubmit} dir='rtl' className="bg-white p-6 rounded-xl shadow-md w-full max-w-xl space-y-4 mx-auto">
            <h2 className="text-lg font-bold text-gray-700">
                {initialData?.id ? "ویرایش دوره" : "افزودن دوره"}
            </h2>
            <InputText
                label={'نام دوره'}
                name={"title"}
                onChange={handleChange}
                placeholder={"نام دوره"}
                value={formData.title} />

            <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                placeholder="قیمت دوره"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <InputText
                label={'تصویر'}
                name={"thumbnail"}
                onChange={handleChange}
                placeholder={"لینک تصویر دوره"}
                value={formData.thumbnail} />

            <div className="flex flex-col gap-2 w-full">
                <label className="text-sm font-medium text-gray-700">
                    استاد دوره
                </label>

                <select
                    name="instructorId"
                    value={formData.instructorId}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-lg p-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
                >
                    <option value="">انتخاب استاد</option>
                    {selectItems}
                </select>
            </div>

            <input
                type="number"
                name="studentsCount"
                value={formData.studentsCount}
                onChange={handleChange}
                placeholder="تعداد دانشجو"
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="flex items-center justify-start gap-2">
                <span className="text-gray-700 font-medium">وضعیت دوره</span>

                <label className="relative inline-flex items-center cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={formData.status === "published"}
                        onChange={(e) =>
                            setFormData(prev => ({
                                ...prev,
                                status: e.target.checked ? "published" : "draft"
                            }))
                        }
                    />

                    <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-green-500 transition"></div>

                    <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition peer-checked:translate-x-5"></div>
                </label>

                <span className="text-sm font-bold text-gray-600">
                    {formData.status === "published" ? "منتشر شده" : "پیش‌نویس"}
                </span>
            </div>

            <input
                type="date"
                name="createdAt"
                value={formData.createdAt}
                onChange={handleChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
            >
                {initialData?.id ? "ویرایش دوره" : "افزودن دوره"}
            </button>

        </form>
    );
}

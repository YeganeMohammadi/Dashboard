import React, { useContext, useState } from 'react';
import useFormfields from '../../Hooks/useFormFields';
import FetchData from '../../Utils/FetchData';
import { AuthContext } from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const { handleToken, handleUser } = useContext(AuthContext)
    const [fields, handleChanges, setFields] = useFormfields({ username: "", password: "" })
    const [loading, setLoading] = useState()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {

        e.preventDefault()
        setLoading(true)
        const res = await FetchData(
            `/admins?username=${fields.username}&password=${fields.password}`,
            { method: "GET" }
        );
        if (!res.success) {
            alert(res.error);
            setLoading(false);
            return;
        }
        if (res.data.length === 0) {
            alert("username or password incorrect");
            setFields({ username: "", password: "" });
            setLoading(false);
            return;
        }

        const data = res.data[0];

        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data));
        handleToken(data.token);
        handleUser(data);

        setFields({ username: "", password: "" });

        console.log("Login successfully");
        navigate("/dashboard");
        setLoading(false)
    }
    return (
        <form onSubmit={handleSubmit} className="w-[50%] flex flex-col gap-5 my-15 mx-auto items-center shadow-2xl shadow-blue-950 rounded-xl p-5 bg-gray-200">
            <h2 className='w-[70%] py-3 text-center text-blue-900 font-extrabold text-3xl '>فرم ورود</h2>
            <input type="text" name='username' value={fields.username} className='w-[65%] outline-none ring-2 ring-blue-600 rounded-sm p-2 ' placeholder='username' onChange={handleChanges} />
            <input type="password" name='password' value={fields.password} className='w-[65%] outline-none ring-2 ring-blue-600 rounded-sm p-2 ' placeholder='password' onChange={handleChanges} />
            <button type='submit' disabled={loading} className="bg-green-800 w-[30%] px-3 py-2 rounded-md text-white disabled:opacity-15 ">{loading ? 'در حال ورود' : 'ورود'}</button>
        </form>
    );
}

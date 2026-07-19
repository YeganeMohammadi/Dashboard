import React from 'react';

export default function InputText({ label, name, value, placeholder, onChange }) {
    return (
        <div>
            <label className="block mb-1">{label}</label>
            <input
                name={name}
                value={value}
                placeholder={placeholder}
                onChange={onChange}
                className="w-full border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>

    );
}

import React from 'react';

function StaffInfo({id, name, title, email, extension, department, supervisor, hireDate}) {
    return (
    <div className="md:flex bg-white shadow text-gray-800 my-4 py-4 px-10 rounded-md items-center justify-between hover:bg-gray-300">
        <p className="text-blue-500">{id}</p>
        <p className = 'font-bold text-md'>{name}</p>
        <p className="text-blue-500">{title}</p>
        <p className="text-blue-500">{email}</p>
        <p className="text-blue-500">{extension}</p>
        <p className="text-blue-500">{department}</p>
        <p className="text-blue-500">{supervisor}</p>
        <p className="text-blue-500">{hireDate}</p>
    </div>
    )
}

export default StaffInfo
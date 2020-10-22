import React from 'react';
import StaffInfo from './StaffInfo';
import './table.css'

function StaffInfoList ({ data }) {
    return (
        data.map(employee => (
            <StaffInfo
            key={employee.id} name={employee.name} 
            title={employee.title}
            email={employee.email}
            extension={employee.extension}
            department={employee.department}
            supervisor={employee.supervisor}
            hireDate={employee.hireDate}
            />
            ))
    )
}

export default StaffInfoList;
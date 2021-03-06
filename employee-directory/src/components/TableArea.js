import React from 'react';

const useSortableData = (employees, config = null) => {
const [sortConfig, setSortConfig] = React.useState(config);

const sortedEmployees = React.useMemo(() => {
    let sortableEmployees = [...employees];
    if (sortConfig !== null) {
        sortableEmployees.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
    }
    return sortableEmployees;
}, [employees, sortConfig]);

const requestSort = (key) => {
    let direction = 'ascending';
    if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
    ) {
        direction = 'descending';
    }
    setSortConfig({ key, direction });
};
return { employees: sortedEmployees, requestSort, sortConfig };
};

const EmployeeTable = (props) => {
const { employees, requestSort, sortConfig } = useSortableData(props.staff);
const getClassNamesFor = (name) => {
    if (!sortConfig) {
        return;
    }
    return sortConfig.key === name ? sortConfig.direction : undefined;
};
return (
  
  <table>
    <thead>
    <tr>
        <th>
            <button
            type="button"
            onClick={() => requestSort('id')}
            className={getClassNamesFor('id')}
            >
                ID
            </button>
        </th>
        <th>
            <button
            type="button"
            onClick={() => requestSort('name')}
            className={getClassNamesFor('name')}
            >
                Name
            </button>
        </th>
        <th>
            <button
            type="button"
            onClick={() => requestSort('title')}
            className={getClassNamesFor('title')}
            >
                Title
            </button>
        </th>
        <th>
            <button
            type="button"
            onClick={() => requestSort('email')}
            className={getClassNamesFor('email')}
            >
                eMail
            </button>
        </th>
        <th>
            <button
            type="button"
            onClick={() => requestSort('extension')}
            className={getClassNamesFor('extension')}
            >
                Extension
            </button>
        </th>
        <th>
            <button
            type="button"
            onClick={() => requestSort('department')}
            className={getClassNamesFor('department')}
            >
                Department
            </button>
        </th>
        <th>
            <button
            type="button"
            onClick={() => requestSort('supervisor')}
            className={getClassNamesFor('supervisor')}
            >
                Supervisor
            </button>
        </th>
        <th>
            <button
            type="button"
            onClick={() => requestSort('hireDate')}
            className={getClassNamesFor('hireDate')}
            >
                Hire Date
            </button>
        </th>
        </tr>
    </thead>
    <tbody>
        {employees.map(employee => (
            <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.title}</td>
                <td>{employee.email}</td>
                <td>{employee.extension}</td>
                <td>{employee.department}</td>
                <td>{employee.supervisor}</td>
                <td>{employee.hireDate}</td>
            </tr>
        ))}
    </tbody>
    </table>
);
};

export default function TableArea() {

  return (

    <div className="Table">
        <EmployeeTable
        staff ={
            [
                {
                  "id": 1,
                  "name": "Julie Schaub",
                  "title": "Chief Executive Officer",
                  "email": "jschaub@midtownfullstack.com",
                  "extension": "1000",
                  "department": "Executive",
                  "supervisor": "null",
                  "hireDate": "01-05-2005"
                },
                {
                    "id": 2,
                    "name": "Alex Jones",
                    "title": "Vice President - Finance",
                    "email": "ajones@midtownfullstack.com",
                    "extension": "1001",
                    "department": "Accounting",
                    "supervisor": "Aurora Brune",
                    "hireDate": "02-10-2005"
                },
                {
                    "id": 3,
                    "name": "Cameron Smith",
                    "title": "Vice President - Software",
                    "email": "csmith@midtownfullstack.com",
                    "extension": "1002",
                    "department": "Technology",
                    "supervisor": "Aurora Brune",
                    "hireDate": "02-15-2005"
                },
                {
                    "id": 4,
                    "name": "Charlie Wilson",
                    "title": "Editor",
                    "email": "cwilson@midtownfullstack.com",
                    "extension": "1003",
                    "department": "Art & Editorial",
                    "supervisor": "Jordan Larson",
                    "hireDate": "01-20-2005"
                },
                {
                    "id": 5,
                    "name": "Sam Christensen",
                    "title": "Software Developer",
                    "email": "schristensen@midtownfullstack.com",
                    "extension": "1004",
                    "department": "Technology",
                    "supervisor": "Cameron Smith",
                    "hireDate": "01-22-2007"
                },
                {
                    "id": 6,
                    "name": "Nic O'Leary",
                    "title": "Accounts Payable",
                    "email": "noleary@midtownfullstack.com",
                    "extension": "1005",
                    "department": "Accounting",
                    "supervisor": "Alex Jones",
                    "hireDate": "10-02-2006"
                },
                {
                    "id": 7,
                    "name": "Teddy Young",
                    "title": "Software Developer",
                    "email": "tyoung@midtownfullstack.com",
                    "extension": "1006",
                    "department": "Technology",
                    "supervisor": "Cameron Smith",
                    "hireDate": "03-17-2007"
                },
                {
                    "id": 8,
                    "name": "Jordan Larson",
                    "title": "Vice-President - Art & Editorial",
                    "email": "jlarson@midtownfullstack.com",
                    "extension": "1007",
                    "department": "Art & Editorial",
                    "supervisor": "Aurora Brune",
                    "hireDate": "04-30-2009"
                },
                {
                    "id": 9,
                    "name": "Hayden Fisher",
                    "title": "Staff Writer",
                    "email": "hfisher@midtownfullstack.com",
                    "extension": "1008",
                    "department": "Art & Editorial",
                    "supervisor": "Jordan Larson",
                    "hireDate": "08-20-2005"
                },
                {
                    "id": 10,
                    "name": "Mac Nelson",
                    "title": "Software Developer",
                    "email": "mnelson@midtownfullstack.com",
                    "extension": "1009",
                    "department": "Technology",
                    "supervisor": "Cameron Smith",
                    "hireDate": "11-25-2007"
                },
                {   "id": 11,
                    "name": "Morgan Anderson",
                    "title": "Product Manager",
                    "email": "manderson@midtownfullstack.com",
                    "extension": "1010",
                    "department": "Technology",
                    "supervisor": "Cameron Smith",
                    "hireDate": "06-15-2006"
                },
                {
                    "id": 12,
                    "name": "Kelly Brown",
                    "title": "IT Specialist",
                    "email": "kbrown@midtownfullstack.com",
                    "extension": "1011",
                    "department": "Technology",
                    "supervisor": "Cameron Smith",
                    "hireDate": "02-17-2009"
                },
                {
                    "id": 13,
                    "name": "Aurora Brune",
                    "title": "Chief Operating Officer",
                    "email": "abrune@midtownfullstack.com",
                    "extension": "1012",
                    "department": "Executive",
                    "supervisor": "Julie Schaub",
                    "hireDate": "01-07-2005"
                }
              ] 
              
            }
        />
    </div>
)
}
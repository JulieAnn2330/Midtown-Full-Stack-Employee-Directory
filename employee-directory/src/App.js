import React, {useState} from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Layout from './components/Layout';
import Navigation from './components/Navigation';
import StaffInfoList from './components/StaffInfoList';
import staff from './components/staff/staff.json';

function App() {

const [ searchTerm, setSearchTerm ] = useState('');
const [ sorted, setSorted ] = useState(false);
const [ data, setStaff ] = useState(staff);

function handleSearchTerm(event) {
  setSearchTerm(event.target.value)
}

function handleSortByName() {
  if (!sorted) {
    setStaff(data.sort((a, b) => (a.name > b.name) ? 1 : -1 ));
    setSorted(true);
  } else {
    setStaff(data.sort((a, b) => (a.name > b.name) ? -1 : 1 ));
    setSorted(false);
  }
}

function handleSortByDepartment() {
  if (!sorted) {
    setStaff(data.sort((a, b) => (a.department > b.department) ? 1 : -1 ));
    setSorted(true);
  } else {
    setStaff(data.sort((a, b) => (a.department > b.department) ? -1 : 1 ));
    setSorted(false);
  }
}

const filteredStaff = data.filter(employee => employee.name.toLowerCase().startsWith(searchTerm.toLowerCase()));
return (
  <div>
    <Layout>
    <Jumbotron style={{ backgroundColor: 'rgb(16, 36, 115)', color: 'white', textAlign: 'center' }}>
    <h1>Midtown Full Stack Employee Directory</h1>
    </Jumbotron>
      <p className="mb-16 text-md">Search for an employee or sort by Name or Department.</p>
      <Navigation 
        onSearch={handleSearchTerm}
        searchTerm={searchTerm}
        handleSortByName={handleSortByName}
        handleSortByDepartment={handleSortByDepartment}
    />
    <StaffInfoList data={filteredStaff}/>
    </Layout>
  </div>
)
}

export default App;

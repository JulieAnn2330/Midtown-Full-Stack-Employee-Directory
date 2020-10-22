import React, { Component } from 'react';

export default class TableArea extends Component {
    state = {
        employees: [],
        allEmployees: [],
        isLoading: true,
    };
    headings = ["name..."];

    componentDidMount() {
        fetch('/staff.json')
        .then(function (response) {
            return response.json();
        })
        .then((response) => {
            this.setState({
                employees: response,
                allEmployees: response,
                isLoading: false,
            });
        })
        .catch((error) => {
            console.log(error);
        });
    }

    handleDepartmentChange = (event) => {
        const department = event.target.value;
        if (department === "All") {
          this.setState({ employees: this.state.allEmployees });
        } else {
          this.setState({
            employees: this.state.allEmployees.filter(function (employee) {
              if (employee.department === department) {
                return true;
              }
              return false;
            }),
          });
        }
      };

    sortByDateofBirth = event => {
        const dob = event.target.value;
        if (dob === "oldest") {
            this.setState({
                employees: this.state.employees.sort(function (a, b) {
                    var dateA = new Date(a.dob).getTime();
                    var dateB = new Date(b.dob).getTime();
                    return dateA > dateB ? 1: -1;
                }),
            });
        } else if (dob === "youngest") {
            this.setState({
                employees: this.state.employees.sort(function (a, b) {
                    var dateA = new Date(a.dob).getTime();
                    var dateB = new Date(b.dob).getTime();
                    return dateA < dateB ? 1: -1
                }),
            });
        }
    };

    render() {
        if (this.state.isLoading === true) {
            return <div>Loading...</div>;
        }
        return (
            <div>
               <div>
          <label htmlFor="department">Filter by Department:</label>
          <select onChange={this.handleDepartmentChange} id="department">
            <option value="All">All</option>
            <option value="Art & Editorial">Art & Editorial</option>
            <option value="Accounting">Accounting</option>
            <option value="Executive">Executive</option>
            <option value="Technology">Technology</option>
          </select>
        </div>
                <div>
                    <label htmlFor="dob">Sort by date of birth:</label>
                    <select onChange={this.sortByDateofBirth}>
                        <option value="default">Default</option>
                        <option value="oldest">Oldest to Youngest</option>
                        <option value="youngets">Youngest to Oldest</option>
                    </select>
                </div>
                <table className="table table-striped table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Title</th>
                            <th>Email</th>
                            <th>Extension</th>
                            <th>Department</th>
                            <th>Supervisor</th>
                            <th>Date of Birth</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(function (employee) {
                            return (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.title}</td>
                                    <td>{employee.email}</td>
                                    <td>{employee.extension}</td>
                                    <td>{employee.department}</td>
                                    <td>{employee.supervisor}</td>
                                    <td>{employee.dob}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
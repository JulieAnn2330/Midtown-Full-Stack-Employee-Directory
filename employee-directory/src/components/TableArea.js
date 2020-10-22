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

      handleNameChange = (event) => {
        const name = event.target.value;
        if (name === "All") {
          this.setState({ employees: this.state.allEmployees });
        } else {
          this.setState({
            employees: this.state.allEmployees.filter(function (employee) {
              if (employee.name === name) {
                return true;
              }
              return false;
            }),
          });
        }
      };

    sortByHireDate = event => {
        const hireDate = event.target.value;
        if (hireDate === "oldest") {
            this.setState({
                employees: this.state.employees.sort(function (a, b) {
                    var dateA = new Date(a.hireDate).getTime();
                    var dateB = new Date(b.hireDate).getTime();
                    return dateA > dateB ? 1: -1;
                }),
            });
        } else if (hireDate === "newest") {
            this.setState({
                employees: this.state.employees.sort(function (a, b) {
                    var dateA = new Date(a.hireDate).getTime();
                    var dateB = new Date(b.hireDate).getTime();
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
          <label htmlFor="name">Filter by Name:</label>
          <select onChange={this.handleNameChange} id="name">
            <option value="All">All</option>
            <option value="Alex Jones">Alex Jones</option>
            <option value="Aurora Brune">Aurora Brune</option>
            <option value="Cameron Smith">Cameron Smith</option>
            <option value="Charlie Wilson">Charlie Wilson</option>
            <option value="Julie Schaub">Julie Schaub</option>
            <option value="Hayden Fisher">Hayden Fisher</option>
            <option value="Jordan Larson">Jordan Larson</option>
            <option value="Kelly Brown">Kelly Brown</option>
            <option value="Mac Nelson">Mac Nelson</option>
            <option value="Morgan Anderson">Morgan Anderson</option>
            <option value="Nic O'Leary">Nic O'Leary</option>
            <option value="Sam Christensen">Sam Christensen</option>
            <option value="Teddy Young">Teddy Young</option>
           </select>
          
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
                    <label htmlFor="hireDate">Sort by hire date:</label>
                    <select onChange={this.sortByHireDate}>
                        <option value="default">Default</option>
                        <option value="oldest">Oldest to Newest</option>
                        <option value="newest">Newest to Oldest</option>
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
                            <th>Hire Date</th>
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
                                    <td>{employee.hireDate}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}
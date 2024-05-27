import React from 'react';
import '../styles/employeeList.css';
import Image1 from '../assets/im.png';
import Image2 from '../assets/im2.png';
import Image3 from '../assets/im3.png';
import Image4 from '../assets/im4.png';


const employees = [
  {
    image: Image1,
    rank: '1',
    name: 'Anushka Singh',
    designation: 'UI/UX Designer',
    hours_worked: '7(42)',
    changes: '▲ 1.5 hrs',
    change_type: 'increase',
  },
  {
    image: Image2,
    rank: '2',
    name: 'Ankita Thakur',
    designation: 'HR Recruiter',
    hours_worked: '7(41)',
    changes: '▼ 1.5 hrs',
    change_type: 'decrease',
  },
  {
    image: Image3,
    rank: '3',
    name: 'Sarah Yadav',
    designation: 'Product Manager',
    hours_worked: '7(40)',
    changes: '▲ 1.5 hrs',
    change_type: 'increase',
  },
  {
    image: Image4,
    rank: '4',
    name: 'Harsha Shivhare',
    designation: 'Designer',
    hours_worked: '7(37)',
    changes: '▲ 1.5 hrs',
    change_type: 'increase',
  },
  {
    image: Image4,
    rank: '5',
    name: 'Vanhi Rai',
    designation: 'Video Editor',
    hours_worked: '7(37)',
    changes: '▼ 1.5 hrs',
    change_type: 'decrease',
  },
  {
    image: Image4,
    rank: '6',
    name: 'Bhanu Sharma',
    designation: 'Business Analyst',
    hours_worked: '7(32)',
    changes: '▼ 1.5 hrs',
    change_type: 'decrease',
  },
  {
    image: Image4,
    rank: '8',
    name: 'Sunil Yadav',
    designation: 'Developer',
    hours_worked: '7(24)',
    changes: '▲ 1.5 hrs',
    change_type: 'increase',
  },
  {
    image: Image4,
    rank: '9',
    name: 'Akash Roy',
    designation: 'Business Analyst',
    hours_worked: '7(21)',
    changes: '▼ 1.5 hrs',
    change_type: 'decrease',
  },
  {
    image: Image3,
    rank: '10',
    name: 'Rohit Soni',
    designation: 'Developer',
    hours_worked: '7(20)',
    changes: '▼ 1.5 hrs',
    change_type: 'decrease',
  },
  {
    image: Image3,
    rank: '11',
    name: 'Suraj Chauhan',
    designation: 'Developer',
    hours_worked: '7(18)',
    changes: '▼ 1.5 hrs',
    change_type: 'decrease',
  },
];

const EmployeeList = () => {
  return (
    <div className="employee-list">
      <div className="list-header">
        <h2>Employees</h2>
        <select>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
        </select>
      </div>
      <div className="list-container">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Designation</th>
              <th>No. of hours worked</th>
              <th>Changes</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.rank}</td>
                <td>
                  <img src={employee.image} alt={employee.name} className="employee-image" />
                  {employee.name}
                </td>
                <td>{employee.designation}</td>
                <td>{employee.hours_worked}</td>
                <td
                  className={
                    employee.change_type === 'increase' ? 'increase' : 'decrease'
                  }
                >
                  {employee.changes}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
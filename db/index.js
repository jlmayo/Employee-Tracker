const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'Add Department', 'View All Employees', 'Add Employee', 'View All Roles', 'Add Role', 'Update Employee Role'],
      name: 'menu'
    },
    {
      type: 'input',
      message: 'What is the name of the department?',
      name: 'department',
    },
    {
      type: 'input',
      message: 'What is the first name of the employee?',
      name: 'first',
    },
    {
        type: 'input',
        message: 'What is the last name of the employee?',
        name: 'last',
    },
    {
        type: 'checkbox',
        message: 'What is the role of the employee?',
        choices: ['Lead Sales', 'Sales Rep', 'Representative', 'Accountant', 'Troubleshooter', 'Expert', 'Paper Pusher'],
        name: 'roles',
    },
    {
        type: 'checkbox',
        message: 'Who is the manager of the employee?',
        choices: ['Michael Scott', 'Robert California', 'Deangelo Vickers', 'Charles Miner', 'Ed Truck'],
        name: 'managers',
    },
    {
        type: 'checkbox',
        message: "Which employee's role do you want to update?",
        choices: ['Dwight Schrute', 'Jim Halpert', 'Pam Halpert', 'Oscar Martinez', 'Angela Martin', 'Kevin Malone', 'Kelly Kapoor', 'Toby Flenderson', 'Shorts Guy', 'Nick Glasses'],
        name: 'employees',
    },
  
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });
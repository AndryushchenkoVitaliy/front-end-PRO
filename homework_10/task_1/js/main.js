'use strict';

let company = {
  sales: [
    { name: 'John', salary: 1000 },
    { name: 'Alice', salary: 600 }
  ],
  development: {
    web: [
      { name: 'Peter', salary: 2000 },
      { name: 'Alex', salary: 1800 }
    ],
    internals: [
      { name: 'Jack', salary: 1300 }
    ]
  }
};

function getTotalSalary(department) {
  let total = 0;

  if (Array.isArray(department)) {
    for (let item of department) {
      total += item.salary;
    }
  } else {
    for (let deptName in department) {
      total += getTotalSalary(department[deptName]);
    }
  }

  return total;
}

console.log(getTotalSalary(company));
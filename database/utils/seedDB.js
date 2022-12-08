const { Employee, Task } = require("../models");

const seedDB = async () => {
  const dummyEmployee = await Employee.create({
    firstname: "Melissa",
    lastname: "Lynch",
    department: "Computer Science",
  });
  const dummyEmployee2 = await Employee.create({
    firstname: "Kim",
    lastname: "Kardashian",
  });

  const dummyTask = await Task.create({
    description: "Get Pens for the Office",
    priority: 1,
    completion: "Not Complete",
  });

  await dummyTask.setEmployee(dummyEmployee);
};

module.exports = seedDB;

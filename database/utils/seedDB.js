const { Employee, Task } = require("../models");

const seedDB = async () => {
  const dummyEmployee = await Employee.create({
    firstname: "Melissa",
    lastname: "Lynch",
    department: "Computer Science",
  });
  const dummyEmployee2 = await Employee.create({
    firstname: "Michael",
    lastname: "Zamansky",
    department: "Computer Science",
  });
  const dummyEmployee3 = await Employee.create({
    firstname: "Barry",
    lastname: "Cherkas",
    department: "Mathematics",
  });

  const dummyTask = await Task.create({
    description: "Get Pens for the Office",
    priority: 1,
    completion: "Not Complete",
  });

  const dummyTask2 = await Task.create({
    description: "Grade Student's Final Exams",
    priority: 2,
    completion: "Not Complete",
  });

  const dummyTask3 = await Task.create({
    description: "Organize a Dolciani Tutoring Session",
    priority: 1,
    completion: "Not Complete",
  });

  const dummyTask4 = await Task.create({
    description: "Organize a Hackathon",
    priority: 1,
    completion: "Not Complete",
  });

  await dummyTask.setEmployee(dummyEmployee);
  await dummyTask2.setEmployee(dummyEmployee2);
  await dummyTask3.setEmployee(dummyEmployee3);
  await dummyTask4.setEmployee(dummyEmployee2);
};

module.exports = seedDB;

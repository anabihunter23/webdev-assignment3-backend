const Sequelize = require("sequelize");
const db = require("../db");

const Task = db.define("task", {
  description: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  priority: {
    type: Sequelize.INTEGER,
  },

  completion: {
    type: Sequelize.STRING,
  },
});

module.exports = Task;

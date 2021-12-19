const Sequelize = require('sequelize');
const db = require('../db');

const Student = db.define("student", {

  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Joe'
  },

  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultvalue: ' Shmo'
  },

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'johnsmith@email.com',
    validate: {
      isEmail: true
    }
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQV4Y6EDuXGzVum3fzCs_-xqcCh11DB7azm4cCahB1h-Hpd_IRBbXnZucHW-g_x-St0F0o&usqp=CAU'
  },

  gpa: {
    type: Sequelize.DECIMAL,
    defaultvalue: 4.0,
    validate: {
      min: 0.0,
      max: 4.0
    }
  }

});


module.exports = Student;
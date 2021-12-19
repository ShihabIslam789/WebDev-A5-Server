const Sequelize = require('sequelize');
const db = require('../db');

const Campus = db.define("campus", {

  name: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'Campus Name'
  },
  imageUrl: {
    type: Sequelize.STRING,
    defaultValue: 'https://techvig.net/wp-content/uploads/2020/11/Fixpii_email_35800da0131beebe44e2-Outlook-Error.png'
  },

  address: {
    type: Sequelize.STRING,
    allowNull: false,
    defaultValue: 'unknown n/a'
   },

  description: {
    type: Sequelize.TEXT('large'),
  }

});

module.exports = Campus;
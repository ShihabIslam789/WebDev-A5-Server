const Sequelize = require("sequelize");
const db = require("../db");

const Campus = db.define("campus", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  address: {
    type: Sequelize.STRING,
  },

  description: {
    type: Sequelize.STRING,
  },

  imgurl: {
    type: Sequelize.STRING,
    defaultValue:
      "https://cdn-icons-png.flaticon.com/128/2748/2748558.png",
    validate: {
      isUrl: true,
    },
  },
});

module.exports = Campus;

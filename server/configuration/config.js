const Sequelize = require("sequelize");

// database configuraton
let database = "hgknight";
let username = "root";
let password = "root";

const config = new Sequelize(database, username, password, {dialect: "mariadb"});

module.exports = config;
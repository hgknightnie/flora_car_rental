const Sequelize = require("sequelize");

let database = "hgknight";
let username = "root";
let password = "root";

const config = new Sequelize(database, username, password, {dialect: "mariadb"});

module.exports = config;
const Sequelize = require("sequelize");
const config = require("../configuration/config");

const Car = config.define("car", {
    car_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    available_time: {
        type: Sequelize.DATE,
        allowNull: true
    },
    price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    car_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    fuel_type: {
        type: Sequelize.STRING,
        allowNull: false
    },
    vendor_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    make: {
        type: Sequelize.STRING,
        allowNull: false
    },
    model: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mileage: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    candition: {
        type: Sequelize.STRING,
        allowNull: true
    }
    
}, {timestamps: false});

module.exports = Car;
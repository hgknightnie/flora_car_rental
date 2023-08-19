const Sequelize = require("sequelize");
const config = require("../configuration/config");
const Car= require("./car");
const Customer = require("./customer");

const Order = config.define("order", {
    order_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    customer_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    pickup_location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pickup_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    dropoff_location: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dropoff_date: {
        type: Sequelize.DATE,
        allowNull: true
    },
    total_price: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    mileage_limit: {
        type: Sequelize.STRING,
        allowNull: false
    },
    order_date: {
        type: Sequelize.DATE,
        allowNull: false
    }
    
}, {timestamps: false});

Order.belongsTo(Car, {
    foreignKey: 'car_id'
});

Car.hasMany(Order, {
    foreignKey: 'car_id'
});

Order.belongsTo(Customer, {
    foreignKey: 'customer_id'
});

Customer.hasMany(Order, {
    foreignKey: 'customer_id'
});

module.exports = Order;
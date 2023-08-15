const Sequelize = require("sequelize");
const config = require("../configuration/config");
const CarImage = require("./car_image");
const Vendor = require("./vendor");

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
    description: {
        type: Sequelize.STRING,
        allowNull: true
    },
    ordertimes: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    lat: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    lng: {
        type: Sequelize.FLOAT,
        allowNull: false
    }
}, {timestamps: false});

CarImage.belongsTo(Car, {
    foreignKey: 'car_id'
});

Car.hasMany(CarImage, {
    foreignKey: 'car_id'
});

Car.belongsTo(Vendor, {
    foreignKey: 'vendor_id'
});

Vendor.hasMany(Car, {
    foreignKey: 'car_id'
});

module.exports = Car;
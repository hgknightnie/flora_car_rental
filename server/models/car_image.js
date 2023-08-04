const Sequelize = require("sequelize");
const config = require("../configuration/config");

const CarImage = config.define("car_image", {
    image_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    car_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    image_name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    path: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {timestamps: false});

module.exports = CarImage;
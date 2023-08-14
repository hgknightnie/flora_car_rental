const Car = require("../models/car");
const Vendor = require("../models/vendor");
const CarImage = require("../models/car_image");
const router = require("express").Router();
const {Op} = require('sequelize');

// Get all cars
/* queryParam: 
     order: order by field
     direction: null or 'desc'
*/
router.get("/", (req, res) => {

    // relate to tables
    let options = {
        include: [Vendor, CarImage]
    };

    // order
    let queryOrder = req.query.order;
    if(queryOrder !== undefined) {
        let orderDirection = req.query.direction;
        if(orderDirection !== undefined && orderDirection.toLowerCase() === 'desc') {
            options.order = [[queryOrder, 'DESC']];
        } else {
            options.order = [[queryOrder]];
        }
    }

    // filter
    let make = req.query.make;
    options.where = {};
    if(make !== undefined) {
        // options.where = {'make' : make};
        options.where.make = make;
    }
    let carType = req.query.car_type;
    if(carType !== undefined) {
        //options.where.car_type = carType;
        const arrCarType = carType.split(',');
        options.where.car_type = {[Op.in] : arrCarType};
    }
    let fuelType = req.query.fuel_type;
    if(fuelType !== undefined) {
        const arrFuelType = fuelType.split(',');
        options.where.fuel_type = {[Op.in] : arrFuelType};
    }
    let price = req.query.price;
    if(price !== undefined) {
        let index = price.indexOf('|');
        // let lowPrice = parseInt(price.substring(0, index));
        let lowPrice = price.substring(0, index);
        let highPrice = price.substring(index + 1);
        options.where.price = {[Op.between] : [lowPrice, highPrice]};
    }
    // Car.findAll({where : {"price" : {[Op.between] : [45 , 60 ]}}}).then((results) => {

    Car.findAll(options).then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Get specific car
router.get("/:car_id", (req, res) => {
    // relate to tables
    let options = {
        include: [Vendor, CarImage]
    };

    let carId = req.params.car_id;
    Car.findByPk(carId, options).then((result) => {
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    });
});

// New car
router.post('/',function(req,res) {
    let formData = req.body;
    Car.create(formData).then((results)=>{
        res.status(200).send(results);
    }).catch((err)=>{
        res.status(500).send(err);
    });
});

// Update a car
// Param is compulsory
router.patch("/:car_id", function(req, res) {
    let carId = parseInt(req.params.car_id);

    Car.findByPk(carId).then((result) => {
        if(result) {
            if(req.body.mileage !== undefined) {
                result.mileage = req.body.mileage;
            }
            if(req.body.status !== undefined) {
                result.status = req.body.status;
            }
            if(req.body.available_time !== undefined) {
                result.available_time = req.body.available_time;
            }

            // save update
            result.save().then(() => {
                res.status(200).send(result);
            }).catch((err) => {
                res.status(500).send(err);
            });
        } else {
            res.status(404).send("Car not found");
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Delete a car
router.delete("/:car_id", function(req, res) {
    let carId = parseInt(req.params.car_id);

    Car.findByPk(carId).then((result) => {
        if(result) {
            result.destroy().then(() => {
                res.status(200).send(result);
            })
        } else {
            res.status(404).send("Car not found");
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
})

module.exports = router;
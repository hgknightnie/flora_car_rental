const Car = require("../models/car");
const router = require("express").Router();

// Get all cars
router.get("/", (req, res) => {
    Car.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Get specific car
router.get("/:car_id", (req, res) => {
    let carId = req.params.car_id;
    Car.findByPk(carId).then((result) => {
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
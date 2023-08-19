const Order = require("../models/order");
const Customer = require("../models/customer");
const Car = require("../models/car");
const router = require("express").Router();

// Get all orders
router.get("/", (req, res) => {
    // relate to tables
    let options = {
        include: [Customer, Car]
    };
    Order.findAll(options).then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Get specific order
router.get("/:order_id", (req, res) => {
    let orderId = req.params.order_id;
    Order.findByPk(orderId).then((result) => {
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    });
});

// New Order
router.post('/',function(req,res) {
    let formData = req.body;
    Order.create(formData).then((results)=>{
        res.status(200).send(results);
    }).catch((err)=>{
        res.status(500).send(err);
    });
});

module.exports = router;
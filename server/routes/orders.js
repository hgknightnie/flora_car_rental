const Order = require("../models/order");
const Customer = require("../models/customer");
const Car = require("../models/car");
const router = require("express").Router();
const sequelize = require("sequelize");

// Get all orders
router.get("/", (req, res) => {
    // relate to tables
    let options = {
        include: [Customer, Car]
    };

    // order by order_date desc
    options.order = [];
    options.order.push([sequelize.col('order.order_date'), 'DESC']);

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

// Delete a order
router.delete("/:order_id", function(req, res) {
    let orderId = parseInt(req.params.order_id);

    Order.findByPk(orderId).then((result) => {
        if(result) {
            result.destroy().then(() => {
                res.status(200).send(result);
            })
        } else {
            res.status(404).send("Order not found");
        }
    }).catch((err) => {
        res.status(500).send(err);
    });
})

module.exports = router;
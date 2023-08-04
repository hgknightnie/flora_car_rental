const Customer = require("../models/customer");
const router = require("express").Router();

// Get all customers
router.get("/", (req, res) => {
    Customer.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Get specific customer
router.get("/:customer_id", (req, res) => {
    let customerId = req.params.customer_id;
    Customer.findByPk(customerId).then((result) => {
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    });
});

module.exports = router;
const Vendor = require("../models/vendor");
const router = require("express").Router();

// Get all vendors
router.get("/", (req, res) => {
    Vendor.findAll().then((results) => {
        res.status(200).send(results);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

// Get specific vendor
router.get("/:vendor_id", (req, res) => {
    let vendorId = req.params.vendor_id;
    Vendor.findByPk(vendorId).then((result) => {
        res.status(200).send(result);
    }).catch((err)=>{
        res.status(500).send(err);
    });
});

module.exports = router;
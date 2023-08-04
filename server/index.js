const express= require("express");
const app = express();
const config = require("./configuration/config");
const cors = require("cors");
const cars_router = require('./routes/cars');
const vendors_router = require('./routes/vendors');
const customers_router = require('./routes/customers');
const orders_router = require('./routes/orders');

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());

// Router
app.use("/cars", cars_router);
app.use("/vendors", vendors_router);
app.use("/customers", customers_router);
app.use("/orders", orders_router);

// Test DB connection
config.authenticate().then(() => {
    console.log("Database is connected");
}).catch((err) => {
    console.log(err);
});

// Start Server
app.listen(3000, () => {
    console.log("Server running on port 3000...");
});

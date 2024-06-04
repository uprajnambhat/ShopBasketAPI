const express = require("express");
const router = express.Router();
const { getCartDetails } = require("../controller/shoppingCartController");
router.get("/", getCartDetails);
module.exports = router;

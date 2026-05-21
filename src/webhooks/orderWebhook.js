const express = require("express");

const router = express.Router();

router.post("/orders/create", async (req, res) => {

  console.log("New Shopify Order Webhook");

  console.log(req.body);

  res.status(200).send("Webhook received");
});

module.exports = router;
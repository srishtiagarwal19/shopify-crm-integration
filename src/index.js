require("dotenv").config();

const express = require("express");

const shopifyRoutes = require("./routes/shopifyRoutes");

const app = express();

app.use(express.json());

app.use("/shopify", shopifyRoutes);

app.get("/", (req, res) => {
  res.send("Shopify CRM Running");
});

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
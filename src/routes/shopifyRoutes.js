const express = require("express");
const crypto = require("crypto");
const axios = require("axios");

const prisma = require("../config/prisma");

const syncCustomers = require("../services/customerSync");
const syncProducts = require("../services/productSync");

const router = express.Router();

router.get("/install", async (req, res) => {
  const shop = req.query.shop;

  if (!shop) {
    return res.status(400).send("Shop parameter missing");
  }

  const state = crypto.randomBytes(16).toString("hex");

  const installUrl =
    `https://${shop}/admin/oauth/authorize` +
    `?client_id=${process.env.SHOPIFY_API_KEY}` +
    `&scope=read_orders,read_products` +
    `&redirect_uri=${process.env.SHOPIFY_REDIRECT_URI}` +
    `&state=${state}`;

  res.redirect(installUrl);
});

router.get("/callback", async (req, res) => {
  const { shop, code } = req.query;

  try {
    const response = await axios.post(
      `https://${shop}/admin/oauth/access_token.json`,
      {
        client_id: process.env.SHOPIFY_API_KEY,
        client_secret: process.env.SHOPIFY_API_SECRET,
        code,
      }
    );

    const accessToken = response.data.access_token;

    console.log("Shopify connected successfully");

    // Product Sync
    await syncProducts(shop, accessToken);

    // Customer Sync skipped temporarily
    await syncCustomers();

    // Save token in database
    await prisma.shopifyConnection.upsert({
      where: {
        shopDomain: shop,
      },

      update: {
        accessToken,
      },

      create: {
        shopDomain: shop,
        accessToken,
      },
    });

    res.send("Shopify store connected successfully!");

  } catch (error) {

    console.log(error.response?.data || error.message);

    res.status(500).send("OAuth failed");
  }
});

module.exports = router;
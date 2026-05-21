const axios = require("axios");

async function syncProducts(shop, accessToken) {
  try {
    const response = await axios.get(
      `https://${shop}/admin/api/2024-01/products.json`,
      {
        headers: {
          "X-Shopify-Access-Token": accessToken,
        },
      }
    );

    console.log("Products synced successfully");
    console.log(response.data.products);

  } catch (error) {
    console.log(error.response?.data || error.message);
  }
}

module.exports = syncProducts;
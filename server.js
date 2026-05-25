const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = "9aba1f45-be7d-40c4-814d-030967cc240f";

const WALLET_ADDRESS = "0x107c5c04eB2BCbC0C0Cf22eebDbD1c4DE7F6d68b";

app.post("/create-payment", async (req, res) => {

  const amount = req.body.amount;

  const paymentUrl =
    `https://global.transak.com/?apiKey=${API_KEY}` +
    `&productsAvailed=BUY` +
    `&defaultCryptoCurrency=ETH` +
    `&defaultNetwork=ethereum` +
    `&walletAddress=${WALLET_ADDRESS}` +
    `&fiatCurrency=EUR` +
    `&fiatAmount=${amount}` +
    `&redirectURL=https://secertlyla-builder-8qic78cvgedtnydd.hostingersite.com/success`;

  res.json({
    url: paymentUrl
  });

});

app.listen(3000, () => {
  console.log("Server started");
});

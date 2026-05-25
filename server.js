const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = process.env.TRANSAK_API_KEY;

const WALLET_ADDRESS = "TON_WALLET_USDT";

app.post("/create-payment", async (req, res) => {

  const amount = req.body.amount;

  const paymentUrl =
    `https://global.transak.com/?apiKey=${API_KEY}` +
    `&cryptoCurrencyCode=USDT` +
    `&network=ethereum` +
    `&walletAddress=${WALLET_ADDRESS}` +
    `&fiatCurrency=EUR` +
    `&fiatAmount=${amount}` +
    `&redirectURL=https://TONSITE.com/success`;

  res.json({
    url: paymentUrl
  });

});

app.listen(3000, () => {
  console.log("Server started");
});

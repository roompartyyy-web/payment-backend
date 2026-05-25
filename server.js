const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const API_KEY = "9aba1f45-be7d-40c4-814d-030967cc240f";

// REMPLACE PAR TON ADRESSE ETH
const WALLET_ADDRESS = "0xTON_WALLET_ETH";

app.post("/create-payment", async (req, res) => {

  const amount = req.body.amount;

  const paymentUrl =
    `https://global.transak.com/?apiKey=${API_KEY}` +
    `&cryptoCurrencyCode=ETH` +
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

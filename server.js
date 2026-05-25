const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.post("/create-payment", async (req, res) => {

  const amount = req.body.amount;

  let paymentUrl = "";

  if (amount == 250) {
    paymentUrl = "https://example.com/250";
  }

  if (amount == 500) {
    paymentUrl = "https://example.com/500";
  }

  if (amount == 999) {
    paymentUrl = "https://example.com/999";
  }

  res.json({
    url: paymentUrl
  });

});

app.listen(3000, () => {
  console.log("Server started");
});

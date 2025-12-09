const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/api/health" , (req , res) => {
  res.json({status: "Sponsica API running"});
});

app.post("/api/offer" , (req , res) => {
  const { brand, budget } = req.body;

  return res.json({
    message: `Offer received from ${brand} with budget ${budget}`
  });
});

app.listen(5000 , () => {
  console.log("Backend is running at http://localhost:5000");
});
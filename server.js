const express = require("express");
const app = express();
const cors = require("cors");
const shoppingCartRouter = require("./routes/shoppingCart");

app.use(cors());
app.use("/cartDetails", shoppingCartRouter);

app.listen(3001);

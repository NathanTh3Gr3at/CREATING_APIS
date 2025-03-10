const express = require("express");
const quotesRoutes = require("./routes/quotes.routes");
const db = require("./data/database");
const app = express();

app.use("/quote", quotesRoutes);
app.use(function (error, req, res, next) {
  res.status(500).json({ message: "Something went wrong" });
});
db.initDb()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Connecting to db failed");
  });

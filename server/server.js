const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
var cors = require("cors");
const loveRoutes = require("./routes/love");

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;

//express app
const app = express();
//app.use(cors());
app.use(cors({ origin: true, credentials: true }));
//middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.get("/", (req, res) => {
  res.json({ mssg: "Love Calculator" });
});
app.use("/api", loveRoutes);

//connect to db
mongoose.set("strictQuery", true);

mongoose
  .connect(URI)
  .then(() => {
    console.log("conn succeed");
  })
  .catch((error) => {
    console.log(error);
  });

//listen
app.listen(PORT, () => {
  console.log(PORT);
});

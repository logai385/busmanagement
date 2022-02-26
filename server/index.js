const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const cors = require("cors");
const transporterRouter = require("./routes/transporter");

const connectDB = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.lxuok.mongodb.net/mearn-learnit?retryWrites=true&w=majority`
    );
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRouter);
app.use("/api/posts", postRouter);
app.use("/api/qlnv", transporterRouter);
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});

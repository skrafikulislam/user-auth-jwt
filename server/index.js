import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import signUpRouter from "./routes/SignUpRoutes.js";
import LoginRouter from "./routes/LoginRoutes.js";
import ContentRouter from "./routes/ContentRoutes.js";
import { MongoDb_Connection } from "./connection/Mongo.js";
import cookieParser from "cookie-parser";

const app = express();

dotenv.config();
app.use(express.json());
app.use(cookieParser());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res
    .status(200)
    .send(
      "<h1>Hello World, Welcome To My Page Rafikul, main work url is- localhost:5000/register to see the work </h1>"
    );
});

app.use(signUpRouter);
app.use(LoginRouter);
app.use(ContentRouter);

MongoDb_Connection();

app.listen(process.env.PORT, () => {
  console.log(`Server is Running on Port ${process.env.PORT}`);
});

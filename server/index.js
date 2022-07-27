import express from "express";
import { Connection } from "./database/db";
import dotenv from "dotenv";
dotenv.config();
import Routes from "./routes/route";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Routes);

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

const port = process.env.PORT || 8001;
app.listen(port, () => console.log(`server Running on port: ${port}`));

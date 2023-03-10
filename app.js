import express from "express";
const app = express();

const PORT = process.env.PORT ?? 3010;
import morgan from "morgan";
import cors from "cors";
import {router}  from "./routes/index.js";


// Using cors to avoid localhost issue
// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());
/*  app.options('*', cors()) */
// Parse the request JSON Body - This is an example of Middleware.
app.use(express.json());

// Using Morgan
// Morgan shows a report in the console. "GET / 200 1.693 ms - 70"
app.use(morgan("dev"));


app.use("/api", router);

export default app
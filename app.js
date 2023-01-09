import express from "express";
const app = express();
const PORT = process.env.PORT ?? 3010;
import morgan from "morgan";
import cors from "cors";
import { router } from "../bc13_final-project_back-end-6-weddings-a-seamonkey";


// Using cors to avoid localhost issue
// https://expressjs.com/en/resources/middleware/cors.html
app.use(cors());
/*  app.options('*', cors()) */
// Parse the request JSON Body - This is an example of Middleware.
app.use(express.json());

// Using Morgan
// Morgan shows a report in the console. "GET / 200 1.693 ms - 70"
app.use(morgan("dev"));

//app.use("/api/foods", router);



app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
  // hello 
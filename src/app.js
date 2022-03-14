import express from "express";
import cors from "cors";
import { ENV } from "./config";
//import utils
import HttpException from "@utils/HttpException.utils";
//import error middleware
import errorMiddleware from "@middleware/errorMiddleware";

//import user router
import authRouter from "@routes/auth.route";
// ###
// Init express
const app = express();
// parse requests of content-type: application/json
// parses incoming requests with JSON payloads
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// enabling cors for all requests by using cors middleware
app.use(cors());
// Enable pre-flight
app.options("*", cors());

app.use("/auth", authRouter);

app.all("*", (req, res, next) => {
  const error = new HttpException(404, "Endpoint Not Found.");
  next(error);
});
// Error middleware
app.use(errorMiddleware);
// set port, listen for requests
app.listen(ENV.SERVERPORT, () => {
  console.log(`Server is running on port ${ENV.SERVERPORT}.`);
});
/***********************************Export*******************************************/
export default app;

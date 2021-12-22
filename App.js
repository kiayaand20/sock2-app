import express from "express";
import logger from "morgan";

import SockSquaredRoutes from "./routes/SockSquareds.js";

const app = express();

app.use(express.json());
app.use(logger("dev"));

app.use("/api", SockSquaredRoutes);

export default app;

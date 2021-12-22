import { Router } from "express";
import * as controllers from "../controllers/socks.js";

const router = Router();

router.get("/socks", controllers.getSocks);

export default router;

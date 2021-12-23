import { Router } from "express";
import * as controllers from "../controllers/socks.js";

const router = Router();

router.get("/socks", controllers.getSocks);
router.get("/socks/:id", controllers.getSock)
router.post("/socks", restrict, controllers.createSock)
router.put("/socks/:id", restrict, controllers.updateSock)
router.delete('/socks/:id', restrict, controllers.deleteSock)

export default router;

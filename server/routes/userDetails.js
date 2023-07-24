import express from "express";
import { userDetailsController } from "../controllers/userDetailsController.js";

// import paymentDetails from "../models/paymentDetails";

const router = express.Router();

// router.route("/:chatId").get(allMessages);
// router.route("/").post(sendMessage);

router.post("/userDetails" , userDetailsController)
// router.get("/getUserDetails/:id", getPaymentDetails)


export default router;

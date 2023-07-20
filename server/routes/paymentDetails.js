import express from "express";
import { getPaymentDetails, paymentDetailsController } from "../controllers/paymentDetailsController.js";
// import paymentDetails from "../models/paymentDetails";

const router = express.Router();

// router.route("/:chatId").get(allMessages);
// router.route("/").post(sendMessage);

router.post("/paymentDetails" , paymentDetailsController)
router.get("/getPaymentDetails/:id", getPaymentDetails)


export default router;

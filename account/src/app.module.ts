import express from "express";
import account from "./account/account.module";
const router = express.Router();

router.use("/", account);

export default router;

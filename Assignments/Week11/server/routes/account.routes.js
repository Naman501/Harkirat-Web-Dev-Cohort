const express = require("express");
const authMiddleware = require("../middleware/auth.middleware");
const accountController = require("../controllers/account.controller");
const router = express.Router();

router.get(
  "/account/balance",
  authMiddleware.authMiddleware,
  accountController.balance,
);

router.post(
  "/account/transfer",
  authMiddleware.authMiddleware,
  accountController.transfer,
);

router.get(
  "/account/fetch",
  authMiddleware.authMiddleware,
  accountController.fetchAccounts,
);
module.exports = router;

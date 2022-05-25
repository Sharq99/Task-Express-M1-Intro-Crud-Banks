const express = require('express');

const { createAccount, updateAccount, deleteAccount, fetchAccount } = require("./account.controllers");
const router = express.Router();

router.get('/', fetchAccount);

router.post("/", createAccount);

router.put("/:accountId", updateAccount);

router.delete("/:accountId", deleteAccount);

module.exports = router;
const express = require("express");
const { createLove } = require("../controllers/loveController");
const router = express.Router();

router.post("/love", createLove);

module.exports = router;

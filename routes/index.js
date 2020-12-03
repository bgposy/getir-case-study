const express = require("express");
const router = express.Router();
const validate = require("../helpers/validate");

const getir = require("../controllers/getir.controller.js");

router.post("/api/datas", [validate], getir.datas);

router.get("*", function (req, res) {
  res.send("Getir Bi Mutluluk :)");
});

module.exports = router;

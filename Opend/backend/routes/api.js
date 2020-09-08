const express = require("express");
const router = express.Router();

const Dashborad = require("../controllers/dashboard")

router.get('/data',Dashborad.Getname)

module.exports = router;
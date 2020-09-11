const express = require("express");
const router = express.Router();

const Dashborad = require("../controllers/dashboard")

router.get('/data',Dashborad.getEmailSentCount)
router.get('/opens',Dashborad.getOpensClicks)

module.exports = router;
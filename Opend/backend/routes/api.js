const express = require("express");
const router = express.Router();

const Dashborad = require("../controllers/dashboard")
const AuthenticationUser = require("../controllers/AuthController")



router.get('/data',Dashborad.getEmailSentCount)
router.get('/opens',Dashborad.getOpensClicks)
// router.get('/admin_login/:admin_login',AuthenticationUser.admin_login)

router.post('/main',Dashborad.getparams)

module.exports = router;
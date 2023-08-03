const express = require("express");
const recuriterProfileController = require("../controllers/recuriterProfileController");
const router = express.Router();


router.post("/companydetail",recuriterProfileController.companydetail);

router.post("/companyaddress",recuriterProfileController.companyaddress);

router.post("/basicinformation",recuriterProfileController.basicinformation);

router.post("/salarydetail",recuriterProfileController.salarydetail);




module.exports = router;
const express = require("express");
const UserResumeController = require("../controllers/userResumecontroller");
const router = express.Router();


router.post("/personalinformation",UserResumeController.personalinformation);

router.post("/educationaldetails",UserResumeController.educationaldetail);

router.post("/skills",UserResumeController.skills);

router.post("/experience",UserResumeController.experience);

router.post("/certification",UserResumeController.certification);

router.post("/patent",UserResumeController.patents);

router.post("/award",UserResumeController.awards);

module.exports = router;
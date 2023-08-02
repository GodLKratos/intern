const express = require("express");
const router = express.Router();
const UserController= require("../controllers/UserController");
const multer = require("multer");


const upload = multer({ dest: 'uploads/' });

router.post("/signup",UserController.signup);

router.post("/login",UserController.login);

router.post("/information",upload.single('photo'),UserController.userInformation);


module.exports = router;
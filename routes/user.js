const router = require("express").Router();

const userController = require("../controllers/userController");

router.post("/getUsers", userController.getUsers);

module.exports = router;

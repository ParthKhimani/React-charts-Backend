const express = require("express");

const controller = require("../controller/mainController");

const router = express();

router.post("/statusData", controller.statusData);

router.post("/signedUpData", controller.signedUpData);

router.post("/usersTable", controller.usersTable);

module.exports = router;

"use strict";
exports.__esModule = true;
var express_1 = require("express");
var utils_1 = require("../utils/utils");
var router = express_1["default"].Router();
router.get('/', function (req, res) {
    res
        .status(utils_1.ErrorStatusCode.OK)
        .send({ welcome: 'Welcome to Deliveryn open API' });
});
exports["default"] = router;

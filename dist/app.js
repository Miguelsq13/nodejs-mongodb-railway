"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _index = _interopRequireDefault(require("./routes/index.routes"));
var _cors = _interopRequireDefault(require("cors"));
var app = (0, _express["default"])();
app.use((0, _cors["default"])());
app.use(_express["default"].json());
app.get("/", function (req, res) {
  res.json({
    message: "Welcome"
  });
});
app.use("/api/productos", _index["default"]);
var _default = app;
exports["default"] = _default;
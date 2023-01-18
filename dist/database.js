"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _mongoose = require("mongoose");
(0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
  var db;
  return _regenerator["default"].wrap(function _callee$(_context) {
    while (1) switch (_context.prev = _context.next) {
      case 0:
        _context.prev = 0;
        (0, _mongoose.set)("strictQuery", false);
        _context.next = 4;
        return (0, _mongoose.connect)("mongodb+srv://admin:admin@cluster0.zkaz1ia.mongodb.net/?retryWrites=true&w=majority");
      case 4:
        db = _context.sent;
        console.log("DB CONNECTED", db.connection.name);
        _context.next = 11;
        break;
      case 8:
        _context.prev = 8;
        _context.t0 = _context["catch"](0);
        console.log(_context.t0);
      case 11:
      case "end":
        return _context.stop();
    }
  }, _callee, null, [[0, 8]]);
}))();
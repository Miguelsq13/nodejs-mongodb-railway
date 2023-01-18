"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getProductos = exports.crearProducto = exports.borrarProducto = exports.actualizarProducto = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Producto = _interopRequireDefault(require("../models/Producto"));
var getProductos = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var productos;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return _Producto["default"].find();
        case 3:
          productos = _context.sent;
          res.json(productos);
          _context.next = 10;
          break;
        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message || "Algo salio mal al obtener los productos"
          });
        case 10:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 7]]);
  }));
  return function getProductos(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
exports.getProductos = getProductos;
var crearProducto = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var nuevoProducto, productoGuardado;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          nuevoProducto = new _Producto["default"]({
            descripcion: req.body.descripcion,
            producto: req.body.producto,
            disco: req.body.disco
          });
          _context2.next = 4;
          return nuevoProducto.save();
        case 4:
          productoGuardado = _context2.sent;
          res.json(productoGuardado);
          _context2.next = 11;
          break;
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t0.message || "Algo salio mal al crear el producto"
          });
        case 11:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 8]]);
  }));
  return function crearProducto(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
exports.crearProducto = crearProducto;
var borrarProducto = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.next = 2;
          return _Producto["default"].findByIdAndDelete(req.params.id);
        case 2:
          res.json({
            message: "Producto eliminado correctamente"
          });
        case 3:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function borrarProducto(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
exports.borrarProducto = borrarProducto;
var actualizarProducto = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return _Producto["default"].findByIdAndUpdate(req.params.id, req.body);
        case 2:
          res.json({
            message: "Producto actualizado correctamente"
          });
        case 3:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function actualizarProducto(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
exports.actualizarProducto = actualizarProducto;
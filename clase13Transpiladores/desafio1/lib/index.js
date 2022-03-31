"use strict";

var _color = _interopRequireDefault(require("./classes/color.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var colorGenerator = new _color["default"]();
console.log(colorGenerator.getRandomColor());
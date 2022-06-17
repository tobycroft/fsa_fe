"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_research_h5"] = self["webpackChunkhome_research_h5"] || []).push([["src_utils_common_js"],{

/***/ "./src/utils/common.js":
/*!*****************************!*\
  !*** ./src/utils/common.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"compareDate\": function() { return /* binding */ compareDate; },\n/* harmony export */   \"handleAreaLevel\": function() { return /* binding */ handleAreaLevel; },\n/* harmony export */   \"handlePhoneHidden\": function() { return /* binding */ handlePhoneHidden; },\n/* harmony export */   \"handleSearch\": function() { return /* binding */ handleSearch; },\n/* harmony export */   \"handleSortReverse\": function() { return /* binding */ handleSortReverse; },\n/* harmony export */   \"hashDomain\": function() { return /* binding */ hashDomain; },\n/* harmony export */   \"percentage\": function() { return /* binding */ percentage; },\n/* harmony export */   \"timeConversion\": function() { return /* binding */ timeConversion; }\n/* harmony export */ });\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ \"./node_modules/core-js/modules/es.object.to-string.js\");\n/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ \"./node_modules/core-js/modules/web.dom-collections.for-each.js\");\n/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ \"./node_modules/core-js/modules/es.regexp.exec.js\");\n/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ \"./node_modules/core-js/modules/es.string.replace.js\");\n/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\n/**\r\n * 计算百分比\r\n * @param {Number} num 数量\r\n * @param {Number} total 总数\r\n * @returns {Number} 百分比\r\n */\nfunction percentage(num, total) {\n  if (num && total) {\n    return num / total * 100;\n  }\n\n  console.log(\"percentage函数参数异常: :>> \", num, total);\n  return 0;\n}\n/**\r\n * 比较两个日期大小\r\n * @param d1 {dateString} 第一个日期\r\n * @param d2 {dateString} 第二个日期\r\n *\r\n * @return Boolean\r\n * */\n\nvar compareDate = function compareDate(d1, d2) {\n  var date1 = new Date(Date.parse(d1));\n  var date2 = new Date(Date.parse(d2));\n  return date1 > date2;\n};\n/**\r\n * 时间转换工具函数\r\n * @param {Number} time 当前时间数字\r\n * @param {String} targetUnit 当前时间单位(时H&h|分M&m|S*s秒)\r\n * @param {String} resultUnit 转换结果时间单位(时H&h|分M&m|S*s秒)\r\n * @returns 返回转换时间结果\r\n */\n\nvar timeConversion = function timeConversion(time, targetUnit, resultUnit) {\n  switch (targetUnit) {\n    case \"H\":\n    case \"h\":\n      if (resultUnit === \"H\" || resultUnit === \"h\") {\n        return time;\n      }\n\n      if (resultUnit === \"M\" || resultUnit === \"m\") {\n        return time * 60;\n      }\n\n      if (resultUnit === \"S\" || resultUnit === \"s\") {\n        return time * 60 * 60;\n      }\n\n      console.log(\"日期转换函数resultUnit参数不合法 :>> \");\n      break;\n\n    case \"M\":\n    case \"m\":\n      if (resultUnit === \"H\" || resultUnit === \"h\") {\n        return time / 60;\n      }\n\n      if (resultUnit === \"M\" || resultUnit === \"m\") {\n        return time;\n      }\n\n      if (resultUnit === \"S\" || resultUnit === \"s\") {\n        return time * 60;\n      }\n\n      console.log(\"日期转换函数resultUnit参数不合法 :>> \");\n      break;\n\n    case \"S\":\n    case \"s\":\n      if (resultUnit === \"H\" || resultUnit === \"h\") {\n        return time / 60 / 60;\n      }\n\n      if (resultUnit === \"M\" || resultUnit === \"m\") {\n        return time / 60;\n      }\n\n      if (resultUnit === \"S\" || resultUnit === \"s\") {\n        return time;\n      }\n\n      console.log(\"日期转换函数resultUnit参数不合法 :>> \");\n      break;\n\n    default:\n      console.log(\"日期转换函数targetUnit参数不合法 :>>\");\n      break;\n  }\n};\n/**\r\n * 处理搜索逻辑\r\n * @param {Array,Object} list 被搜索的数据源列表\r\n * @param {String} keyword 关键字\r\n * @param {String} keyname 要搜索的关键字字段名称,默认为name\r\n * @returns 返回过滤之后的列表\r\n */\n\nvar handleSearch = function handleSearch(list, keyword) {\n  var keyname = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : \"name\";\n  var newList = [];\n  list.forEach(function (item) {\n    var hashVal = item[keyname].indexOf(keyword);\n\n    if (hashVal > -1) {\n      newList.push(item);\n    }\n  });\n  return newList;\n};\n/**\r\n * 隐藏手机号\r\n * @param {String} phone 手机号\r\n * @returns 隐藏过后的手机号\r\n */\n\nvar handlePhoneHidden = function handlePhoneHidden(phone) {\n  return phone.replace(/(\\d{3})\\d{4}(\\d{4})/, \"$1****$2\");\n};\n/**\r\n * 排序 反向排序\r\n * @param {Object} obj obj对象\r\n */\n\nvar handleSortReverse = function handleSortReverse(obj) {\n  var arr = [];\n\n  for (var key in obj) {\n    arr.push(obj[key]);\n  }\n\n  return arr.reverse();\n};\n/**\r\n * 判断当前所属平台(福建/古田)环境\r\n * @param {String} importType 源类型\r\n * @param {String} targretType 目标类型\r\n * @returns 是否是当前需要的类型\r\n */\n\nvar hashDomain = function hashDomain(importType, targretType) {\n  console.log(\"importType :>> \", importType);\n  var sourceType = \"\";\n\n  if (importType === \"default\" || importType === \"a\") {\n    sourceType = \"fj\";\n  }\n\n  if (importType === \"gt\") {\n    sourceType = \"gt\";\n  }\n\n  return sourceType === targretType;\n};\n/**\r\n * 获取显示区域等级\r\n * @param {String} modelType 当前区域等级\r\n * @returns 返回当前区域的下级区域等级\r\n */\n\nvar handleAreaLevel = function handleAreaLevel(modelType) {\n  switch (modelType) {\n    case \"province\":\n      return \"city\";\n\n    case \"city\":\n      return \"district\";\n\n    case \"district\":\n      return \"street\";\n\n    case \"street\":\n      return \"street\";\n\n    default:\n      break;\n  }\n};\n\n//# sourceURL=webpack://home_research_h5/./src/utils/common.js?");

/***/ })

}]);
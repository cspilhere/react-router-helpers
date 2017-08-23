(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './ChildRoutes', './ScrollToTop'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./ChildRoutes'), require('./ScrollToTop'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.ChildRoutes, global.ScrollToTop);
    global.index = mod.exports;
  }
})(this, function (exports, _ChildRoutes2, _ScrollToTop2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports._ScrollToTop = exports._ChildRoutes = undefined;

  var _ChildRoutes3 = _interopRequireDefault(_ChildRoutes2);

  var _ScrollToTop3 = _interopRequireDefault(_ScrollToTop2);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports._ChildRoutes = ChildRoutes;
  exports._ScrollToTop = ScrollToTop;
});
(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/core-js/object/get-prototype-of', 'babel-runtime/helpers/classCallCheck', 'babel-runtime/helpers/createClass', 'babel-runtime/helpers/possibleConstructorReturn', 'babel-runtime/helpers/inherits', 'react'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/core-js/object/get-prototype-of'), require('babel-runtime/helpers/classCallCheck'), require('babel-runtime/helpers/createClass'), require('babel-runtime/helpers/possibleConstructorReturn'), require('babel-runtime/helpers/inherits'), require('react'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.getPrototypeOf, global.classCallCheck, global.createClass, global.possibleConstructorReturn, global.inherits, global.react);
    global.ScrollToTop = mod.exports;
  }
})(this, function (exports, _getPrototypeOf, _classCallCheck2, _createClass2, _possibleConstructorReturn2, _inherits2, _react) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ScrollToTop = function (_React$Component) {
    (0, _inherits3.default)(ScrollToTop, _React$Component);

    function ScrollToTop() {
      (0, _classCallCheck3.default)(this, ScrollToTop);
      return (0, _possibleConstructorReturn3.default)(this, (ScrollToTop.__proto__ || (0, _getPrototypeOf2.default)(ScrollToTop)).apply(this, arguments));
    }

    (0, _createClass3.default)(ScrollToTop, [{
      key: 'componentDidMount',
      value: function componentDidMount(prevProps) {
        window.scrollTo(0, 0);
      }
    }, {
      key: 'componentDidUpdate',
      value: function componentDidUpdate(prevProps) {
        if (this.props.location !== prevProps.location) window.scrollTo(0, 0);
      }
    }, {
      key: 'render',
      value: function render() {
        return this.props.children;
      }
    }]);
    return ScrollToTop;
  }(_react2.default.Component);

  exports.default = ScrollToTop;
});
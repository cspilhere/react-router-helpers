'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChildRoutes = function ChildRoutes(props) {
  var routes = (props.routes || []).map(function (route, key) {
    return _react2.default.createElement(_reactRouterDom.Route, {
      key: key,
      location: props.location,
      exact: route.exact,
      path: route.path,
      render: function render(routeProps) {
        return _react2.default.createElement(route.component, _extends({}, routeProps, route));
      }
    });
  });
  return _react2.default.createElement(
    'div',
    { className: 'routes-container' },
    _react2.default.createElement(
      _reactRouterDom.Switch,
      { location: props.location },
      routes
    )
  );
};

exports.default = ChildRoutes;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollToTop = function (_React$Component) {
  _inherits(ScrollToTop, _React$Component);

  function ScrollToTop() {
    _classCallCheck(this, ScrollToTop);

    return _possibleConstructorReturn(this, (ScrollToTop.__proto__ || Object.getPrototypeOf(ScrollToTop)).apply(this, arguments));
  }

  _createClass(ScrollToTop, [{
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
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ScrollToTop = exports.ChildRoutes = undefined;

var _ChildRoutes2 = require('./ChildRoutes');

var _ChildRoutes3 = _interopRequireDefault(_ChildRoutes2);

var _ScrollToTop2 = require('./ScrollToTop');

var _ScrollToTop3 = _interopRequireDefault(_ScrollToTop2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChildRoutes = exports.ChildRoutes = _ChildRoutes3.default;

var ScrollToTop = exports.ScrollToTop = _ScrollToTop3.default;

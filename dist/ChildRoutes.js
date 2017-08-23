(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', 'babel-runtime/helpers/extends', 'react', 'react-router-dom'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('babel-runtime/helpers/extends'), require('react'), require('react-router-dom'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global._extends, global.react, global.reactRouterDom);
    global.ChildRoutes = mod.exports;
  }
})(this, function (exports, _extends2, _react, _reactRouterDom) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends3 = _interopRequireDefault(_extends2);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var ChildRoutes = function ChildRoutes(props) {
    var routes = (props.routes || []).map(function (route, key) {
      return _react2.default.createElement(_reactRouterDom.Route, {
        key: key,
        location: props.location,
        exact: route.exact,
        path: route.path,
        render: function render(routeProps) {
          return _react2.default.createElement(route.component, (0, _extends3.default)({}, routeProps, route));
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
});
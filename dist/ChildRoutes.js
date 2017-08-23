import _extends from 'babel-runtime/helpers/extends';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

var ChildRoutes = function ChildRoutes(props) {
  var routes = (props.routes || []).map(function (route, key) {
    return React.createElement(Route, {
      key: key,
      location: props.location,
      exact: route.exact,
      path: route.path,
      render: function render(routeProps) {
        return React.createElement(route.component, _extends({}, routeProps, route));
      }
    });
  });
  return React.createElement(
    'div',
    { className: 'routes-container' },
    React.createElement(
      Switch,
      { location: props.location },
      routes
    )
  );
};

export default ChildRoutes;
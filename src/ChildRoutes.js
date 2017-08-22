import React from 'react';
import { Switch, Route } from 'react-router-dom';

const ChildRoutes = (props) => {
  const routes = (props.routes || []).map((route, key) => {
    return (
      <Route
        key={key}
        location={props.location}
        exact={route.exact}
        path={route.path}
        render={(routeProps) => {
          return <route.component {...routeProps} {...route}/>;
        }}
      />
    );
  });
  return (
    <div className="routes-container">
      <Switch location={props.location}>
        {routes}
      </Switch>
    </div>
  );
};

export default ChildRoutes;

import React from 'react';
import { Route } from 'react-router-dom';
import {CFade} from '@coreui/react'

const AppRoute = ({
  component: Component,
  layout: Layout,
  ...rest
}) => {
  Layout = (Layout === undefined) ? props => (<>{props.children}</>) : Layout;
  return (
    <Route
    {...rest}
    render={props => (
      <CFade className="h-100">
        <Layout>
          <Component {...props} />
        </Layout>
      </CFade>
    )} />
  );
}

export default AppRoute;
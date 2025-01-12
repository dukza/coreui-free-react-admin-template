import React, { Suspense } from 'react'
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

import AppRoute from './../utils/AppRoute'

// routes config
import routes from '../routes'
  
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

const TheContent = () => {
  return (
    
      <Suspense fallback={loading}>
        <Switch>
          {routes.map((route, idx) => {
            return route.component && (
              <AppRoute 
                key={idx}
                path={route.path}
                exact={route.exact}
                name={route.name}   
                component={route.component}  
                layout={route.layout}          
              />
            )
          })}
          <Redirect from="/" to="/dashboard" />
        </Switch>
      </Suspense>
  )
}

export default React.memo(TheContent)

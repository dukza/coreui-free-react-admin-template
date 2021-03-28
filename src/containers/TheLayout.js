import React from 'react'
import {
  TheContent,
  TheSidebar,
  TheHeader
} from './index'

const TheLayout = () => {

  return (
    <div className="c-app c-default-layout">
      <TheHeader/>
      <TheSidebar/>
      <div className="c-wrapper">
        <div className="c-body">
          
          <TheContent/>
        </div>
      </div>
    </div>
  )
}

export default TheLayout

import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import { DocsLink } from 'src/reusable'


const ThemeView = () => {
  const [color, setColor] = useState('rgb(255, 255, 255)')
  const ref = createRef()

  useEffect(() => {
    const el = ref.current.parentNode.firstChild
    const varColor = window.getComputedStyle(el).getPropertyValue('background-color')
    setColor(varColor)
  }, [ref])

  return (
    <table className="table w-100" ref={ref}>
      <tbody>
      <tr>
        <td className="text-muted">HEX:</td>
        <td className="font-weight-bold">{ rgbToHex(color) }</td>
      </tr>
      <tr>
        <td className="text-muted">RGB:</td>
        <td className="font-weight-bold">{ color }</td>
      </tr>
      </tbody>
    </table>
  )
}

const ThemeColor = ({className, children}) => {
  const classes = classNames(className, 'theme-color w-75 rounded mb-3')
  return (
    <CCol xl="2" md="4" sm="6" xs="12" className="mb-4">
      <div className={classes} style={{paddingTop: '75%'}}></div>
      {children}
      <ThemeView/>
    </CCol>
  )
}

const Page = () => {
  const Swrap = classNames("d-flex","h-100","flex-column","no-gutters");
  return (
    <>
    <CRow className="h-100 no-gutters">
      <CCol>
        <CRow className={Swrap}>
            <CCol style={{"flexGrow":0}}>타이틀</CCol>
            <CCol style={{"flexGrow":0}}>검색바</CCol>
            <CCol style={{"flexGrow":0}}>
              필터바
            </CCol>
            <CCol style={{"flexGrow":0}}>테이블바</CCol>
            <CCol className="border" style={{"flexGrow":1}}>리스트</CCol>              
        </CRow>
      </CCol>
      <CCol>
        <CRow  className={Swrap}>
          <CCol style={{"flexGrow":0}}>타이틀</CCol>
          <CCol className="border" style={{"flexGrow":1}}>컨텐츠</CCol>
          <CCol style={{"flexGrow":0}}>버튼</CCol>
        </CRow>  
      </CCol>
    </CRow>
    </>
  )
}

export default Page;

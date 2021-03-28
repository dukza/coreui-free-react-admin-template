import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import {
  CRow,
  CCol,
  CCard,
  CCardHeader,
  CCardBody
} from '@coreui/react'
import { rgbToHex } from '@coreui/utils';
import { DocsLink } from 'src/reusable';


import page from '../page';



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

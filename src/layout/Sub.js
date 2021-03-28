import React from "react";
import classNames from "classnames";
import {useParams } from "react-router-dom";
import {CContainer, CRow, CCol, CCard, CCardBody} from '@coreui/react'

import {useData} from "./../hook/useData";

const Sub = ({ children}) => {
    const classes = classNames(
        "c-main",
        "overflow-hidden"
    );
  return(
    <>
    <main className={classes}>
        <CContainer fluid className="h-100" >
            <CCard className="h-100 overflow-auto">
                {children}   
            </CCard>            
        </CContainer>  
    </main>     
    </>
)}

export default Sub;  
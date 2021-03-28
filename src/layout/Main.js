import React from "react";
import classNames from "classnames";

import {CContainer, CRow, CCol, CCard, CCardBody} from '@coreui/react'


const Main = ({ children }) => {
    const classes = classNames(
        "c-main",
        "overflow-auto"
    );
return(
    <>
    <main className={classes}>
        <CContainer fluid >
                {children} 
        </CContainer>        
    </main>
    </>
)}

export default Main;  
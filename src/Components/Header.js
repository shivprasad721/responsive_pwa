import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import "./style.css"
import dotmenu from "../images/dots-menu.png";
import logo from "../images/logo.png";
import styled from "styled-components";

const Arrow = styled.div`

        background-color: #FFFFFF 0% 0% no-repeat padding-box;
        box-shadow: 0px 11px 24px #00000029;
        border-radius: 15px;
        opacity: 1;
        padding:17px 20px 17px 20px; 
        font-size:29px ;
    
`
    
const Header =()=> {
    return(
        <>
            <div className="ifb-nav">
                <div className="ifb-menu">
                    <div>
                        {/* <a><i className='fas fa-arrow-left arrow' ></i></a> */}
                        <a><Arrow><FontAwesomeIcon icon={faArrowLeft} /></Arrow></a>                        
                    </div>
                    <div className="dotmenu">
                        <img  src={dotmenu} />
                    </div>
                </div>
                <div className="ifb-logo">
                    <a><img src={logo}/></a>
                </div>
            </div>  
        </>
    );
}

export default Header;
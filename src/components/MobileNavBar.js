
import React, { useState, setState } from 'react'

import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const StyledMobileNavContainer = styled.div`
    position: fixed;
    width: 100vw;
    display: flex;
    top: 58px;  
    z-index: 9998;
  `;
  const StyledBackdrop = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.37);
    display: flex; 
    justify-content: flex-end; 
  `;
  const StyledNav = styled.nav`
    ul {
     list-style-type: none;
     display: flex;
     background-color: ${props => props.theme.colors.lilac};
     flex-direction: column;
     align-items: center;
     justify-content: center; 
     opacity: 100%;
     padding: 0;
 }
 li {
     color: white;
     margin: 10px;
     padding: 10px;
     font-family: ${props => props.theme.fonts.fancy};
     font-weight: 600;

     letter-spacing: 2px;
     font-size: 20px;
     border-bottom: 3px solid ${props => props.theme.colors.lilac};
     a:link {
            text-decoration: none;
            color: white;
            }
     a:visited {
            text-decoration: none;
            color: white;
        };
     :hover {
            cursor: pointer; 
            border-bottom: 3px solid white;
        };
     }
  `;

function MobileNavBar(props) {
    return (
      <StyledMobileNavContainer>
        <StyledBackdrop onClick={props.click}>
            <StyledNav>
                <ul onClick={props.doNothingClick}>     
                    <li onClick={props.click}><Link to="/">Home</Link></li>
                    <li onClick={props.click}><Link to="/menu">Menu</Link></li>
                    <li onClick={props.click}><Link to="/gallery">Gallery</Link></li>
                    <li onClick={props.click}><Link to="/testimonials">Testimonials</Link></li>
                    <li onClick={props.click}><Link to="/terms">Terms and Conditions</Link></li>
                    <li onClick={props.click}><Link to="/contact">Contact</Link></li>
                    <li onClick={props.click}><Link to="/order">Order Enquiries</Link></li>
                </ul>
            </StyledNav>
            </StyledBackdrop>
        </StyledMobileNavContainer>
    )
}

export default MobileNavBar
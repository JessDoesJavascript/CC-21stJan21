
import React, { useState, setState } from 'react'
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

  const StyledMobileNavContainer = styled(animated.div)`
    position: fixed;
    width: 100vw;
    display: flex;
    z-index: 9998;
  `;
  const StyledBackdrop = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.37);
    display: flex; 
    justify-content: flex-end; 
  `;
  const StyledNav = styled(animated.nav)`
    ul {
    text-decoration: none;
     list-style-type: none;
     display: flex;
     background-color: ${props => props.theme.colors.lilac};
     flex-direction: column;
     align-items: center;
     justify-content: center; 
     opacity: 100%;
     padding: 0;
     margin-top: 12vh;
 }
 li {
    text-decoration: none;
     color: white;
     padding: 20px;
     font-family: ${props => props.theme.fonts.fancy};
     font-weight: 600;
     letter-spacing: 2px;
     font-size: clamp(1rem, 1.5vw, 1.75rem); 
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

  const LinkStyle = {
    textDecoration: 'none'
  }

function MobileNavBar(props) {
  const navAnimation = useSpring({
          to: { 
                top: 0,
                opacity: 1 }, 
          from: {  
                top: -1000,
                opacity: 0 },
         reset: true,
         delay: 200,
  })

    return (
      <StyledMobileNavContainer style={navAnimation}>
        <StyledBackdrop onClick={props.click}>
            <StyledNav>
                <ul onClick={props.doNothingClick}>
                    <Link to="/" style={LinkStyle}><li onClick={props.click}>Home</li></Link>
                    <Link to="/menu" style={LinkStyle}><li onClick={props.click}>Menu</li></Link>
                    <Link to="/gallery" style={LinkStyle}><li onClick={props.click}>Gallery</li></Link>
                    <Link to="/testimonials" style={LinkStyle}><li onClick={props.click}>Testimonials</li></Link>
                    <Link to="/contact" style={LinkStyle}><li onClick={props.click}>Contact</li></Link>
                    <Link to="/order" style={LinkStyle}><li onClick={props.click}>Order Enquiries</li></Link>
                </ul>
            </StyledNav>
            </StyledBackdrop>
        </StyledMobileNavContainer>
    )
}

export default MobileNavBar
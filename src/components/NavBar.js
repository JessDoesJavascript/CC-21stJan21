
import React, { useState, setState } from 'react'
import Logo from './images/logo.jpeg';
import styled from 'styled-components'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";


const StyledNavContainer = styled.div`
    position: fixed;
    width: 100vw;
    height: 12vh;
    display: flex;
    flex-direction: row;
    background: ${props => props.theme.colors.lilac};
    opacity: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    `;

const StyledBurgerContainer = styled.div`
    display: flex; 
    flex-direction: column;
    justify-content: center;
    align-items: center; 
    margin-right: 10px; 
    :hover {
            cursor: pointer; 
        };
    @media (min-width: 1001px) {
        display: none; 
    }
`;

const StyledBurgerSegment = styled.div`
    width: 15px;
    height: 3px;
    margin: 1px; 
    border-radius: 10px;
    background-color: white;
    color: white;  
`;

const StyledNavBar = styled.nav`
 ul {
     list-style-type: none;
     margin: 0;
     padding: 0;
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
     text-decoration: none;
     @media (max-width: 1000px) {
        display: none;
        }
    }
 li {
     text-decoration: none;
     color: white;
     margin: 10px;
     padding: 10px;
     font-family: ${props => props.theme.fonts.fancy};
     font-weight: 500;
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

const EmptyDiv = styled.div`
    flex-grow: 1;
`;

const StyledLogo = styled.img`
    height: 200px;
    border-radius: 100%;
    margin-left: 10px;
    position: absolute;
    top: 5px;
    @media (max-width: 1230px) {
        height: 150px;
    }
    @media (max-width: 710px) {
        left: 10px;
    }
    @media (max-width: 420px) {
        
    }
`;

const EmptyNavBarDiv = styled.div`
    width: 10vw;
    `;

const LinkStyle = {
  textDecoration: 'none'
}
function NavBar(props) {
    return (
        <StyledNavContainer>
        <EmptyNavBarDiv></EmptyNavBarDiv>
        <Link to="/"><StyledLogo src={Logo} alt="Candid Cakery Logo and home link" onClick={props.homeButtonClose}></StyledLogo></Link>
        <EmptyDiv></EmptyDiv>
            <StyledBurgerContainer onClick={props.click}>
                <StyledBurgerSegment></StyledBurgerSegment>
                <StyledBurgerSegment></StyledBurgerSegment>
                <StyledBurgerSegment></StyledBurgerSegment>
            </StyledBurgerContainer>
            <StyledNavBar>
                <ul>     
                    <Link to="/menu" style={LinkStyle}><li>Menu</li></Link>
                    <Link to="/gallery" style={LinkStyle}><li>Gallery</li></Link>
                    <Link to="/testimonials" style={LinkStyle}><li>Testimonials</li></Link>
                    <Link to="/contact" style={LinkStyle}><li>Contact</li></Link>
                    <Link to="/order" style={LinkStyle}><li>Enquiries</li></Link>
                </ul>    
            </StyledNavBar>
            <EmptyNavBarDiv></EmptyNavBarDiv>
        </StyledNavContainer>
    )
}

export default NavBar
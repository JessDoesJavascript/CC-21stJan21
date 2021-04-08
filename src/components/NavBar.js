
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
    width: 100%;
    height: 78px;
    display: flex;
    flex-direction: row;
    background: ${props => props.theme.colors.lilac};
    opacity: 100%;
    justify-content: space-between;
    align-items: center;
    z-index: 9999;
    h1 {
     font-family: ${props => props.theme.fonts.fancy};
     font-weight: 300;
     font-size: 25px;
     letter-spacing: 2px;
     color: white;
     margin: 10px;
     padding: 10px;
     a:link {
            text-decoration: none;
            color: white;
            }
     a:hover {
            cursor: pointer; 
        };
     a:visited {
            text-decoration: none;
            color: white; 
        };
 }

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
    @media (min-width: 700px) {
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
     @media (max-width: 699px) {
        display: none;
     }
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


const EmptyDiv = styled.div`
    flex-grow: 1;
`;

const StyledLogo = styled.img`
    height: 60px;
    border-radius: 100%;
    margin-left: 10px;
`;


function NavBar(props) {
    return (
        <StyledNavContainer>
        
        <StyledLogo src={Logo}></StyledLogo>
        <div><h1 onClick={props.closeNav}><Link to='/'>Candid Cakery </Link></h1></div>
      
        <EmptyDiv></EmptyDiv>
            <StyledBurgerContainer onClick={props.click}>
                <StyledBurgerSegment></StyledBurgerSegment>
                <StyledBurgerSegment></StyledBurgerSegment>
                <StyledBurgerSegment></StyledBurgerSegment>
            </StyledBurgerContainer>
            <StyledNavBar>
                <ul>     
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/testimonials">Testimonials</Link></li>
                    <li><Link to="/terms">Terms and Conditions</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li><Link to="/order">Order Enquiries</Link></li>
                </ul>
            </StyledNavBar>
        </StyledNavContainer>
    )
}

export default NavBar
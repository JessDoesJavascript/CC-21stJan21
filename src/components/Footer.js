import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import facebook from './images/socialMediaIcons/facebook.png';
import instagram from './images/socialMediaIcons/instagram.png';
import {
    Link
  } from "react-router-dom";

const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.lilac};
    bottom: 0;
    display: flex; 
    height: 12vh;
    min-height: 65px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;


const StyledFooterLinksContainer = styled.div`
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center; 

`;

const StyledLogoContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    a {
        height: 2rem;
        width: 2rem;
        padding: 5px;
    }
`;

const StyledLogo = styled.img`
    height: 2rem;
    border-radius: 100%;
    
    :hover {
        cursor: pointer; 
    }
`;


const StyledLinksContainer = styled.div`
 
    font-family: ${props => props.theme.fonts.fancy};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-left: 5px; 
    a {
        border-bottom: 1px solid ${props => props.theme.colors.lilac};
        padding: 2px;
        :hover {
            border-bottom: 1px solid white;
        }
        
    }
`;

const LinkStyle = {
    textDecoration: 'none',
    color: 'white',
    fontWeight: '400',
    letterSpacing: '2px',
    fontSize: 'clamp(0.6rem, 0.8rem, 1.5rem)',
}

function Footer() {
        return (
            <StyledDiv> 
                <StyledFooterLinksContainer>   
                    <StyledLogoContainer>
                        <a href="https://www.facebook.com/CandidCakery" target="_blank"><StyledLogo src={facebook} alt="Facebook logo and link"></StyledLogo></a>
                        <a href="https://www.instagram.com/candidcakery/" target="_blank"><StyledLogo src={instagram} alt="Instagram logo and link"></StyledLogo></a> 
                    </StyledLogoContainer>
                        <StyledLinksContainer>
                            <Link to="/terms" style={LinkStyle}>Terms & Conditions</Link>
                            <Link to="/privacy" style={LinkStyle}>Privacy Policy</Link>
                        </StyledLinksContainer>
                </StyledFooterLinksContainer>    
            </StyledDiv>
        )
    }

export default Footer;

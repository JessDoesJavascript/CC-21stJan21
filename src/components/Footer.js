import { render } from '@testing-library/react';
import React from 'react';
import styled from 'styled-components';
import facebook from './images/socialMediaIcons/facebook.png';
import instagram from './images/socialMediaIcons/instagram.png';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.lilac};
    bottom: 0;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    @media (min-height: 619px) {
        position: fixed;
        width: 100%;
    }
   

`;

const StyledH3 = styled.h3`
    color: white;
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 600;
    font-size: 15px; 
    letter-spacing: 2px; 
    margin-top: 0px;
    padding: 5px; 

`;

const StyledP = styled.p`
    color: white;
    font-size: 10px; 
    margin: 5px; 

`;

const StyledLogoContainer = styled.div`
   
`;

const StyledLogo = styled.img`
    width: 36px;
    border-radius: 100%;
    margin: 15px;
    :hover {
        cursor: pointer; 
    }
`;

function Footer() {
        return (
            <StyledDiv> 
               <StyledLogoContainer>
                   <StyledLogo src={facebook} alt="Facebook logo and link"></StyledLogo>
                   <StyledLogo src={instagram} alt="Instagram logo and link"></StyledLogo>
               </StyledLogoContainer>
            </StyledDiv>
        )
    }

export default Footer;

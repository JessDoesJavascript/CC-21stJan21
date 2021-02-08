import React from 'react';
import styled from 'styled-components';
import biscoffCake from './images/biscoffCake.jpg';
import logo from './images/logo.jpeg';
import chocolateCake from './images/chocolateCake.jpg';

const StyledDiv = styled.div`
    background-color: white;
    width: 100%;
    
    display: flex;
    justify-content: space-evenly;
`;

const StyledPhotoAndTextContainer = styled.div`
 width: 100%;
 display: flex;
 flex-direction: row; 
 align-items: center; 
 justify-content: center; 
  
 
`;

const StyledImg = styled.img`
width: 200px;
`;

const StyledP = styled.p`
    font-family: ${props => props.theme.fonts.fancy};
    color: ${props => props.theme.colors.lilac};
    font-size: 25px; 
    font-weight: 600;
    letter-spacing: 2px; 
    padding: 10px; 

`;


const StyledLogo = styled.img`
    width: 300px;
    border-radius: 100%;
    padding: 30px; 
    margin: 10px; 
    
   
`;

function About() {
    return (
        <StyledDiv> 
           <StyledPhotoAndTextContainer>  
            
            <StyledLogo src={logo} alt="Candid Cakery Logo"></StyledLogo>
            <StyledP>Candid Cakery is an independent bakery based in Brighton, East Sussex. 
            Gingerbread chocolate candy. Sweet roll danish dragée chocolate. Candy chocolate bar toffee brownie.</StyledP>
              
            </StyledPhotoAndTextContainer>

        </StyledDiv>

    )
}

export default About;
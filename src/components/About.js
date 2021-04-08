import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.jpeg';

const StyledDiv = styled.div`
    background-color: white;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    @media (min-height: 619px) {
        height: 100%;
    }
`;

const StyledTaglineDiv = styled.div`
    background-color: ${props => props.theme.colors.palePink};
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;
    padding-top: 78px;
    height: 78px; 
    font-size: 10px;
    @media (min-width: 700px) {
        font-size: 12px;
        
    }

`;

const StyledTaglineContainer = styled.div`
    font-family: ${props => props.theme.fonts.fancy};
    color: ${props => props.theme.colors.darkPurple};
    display: flex;
    padding: 5px; 
    align-items: center;
    justify-content: center;
    h2 {
        letter-spacing: 1.5px;
        text-align: center;
    }

   
    
`;

const StyledPhotoAndTextContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center; 
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (min-height: 700px) {
        margin-top: 10vh;
    }
`;

const StyledP = styled.p`
    font-family: ${props => props.theme.fonts.fancy};
    color: ${props => props.theme.colors.darkPurple};
    font-weight: 600;
    letter-spacing: 2px; 
    font-size: 10px; 
    width: 80%;
    padding: 20px;
    margin-bottom: 50px;
    
    @media (min-width: 550px) {
        font-size: 15px;
    }
`;

const StyledLogo = styled.img`
    width: 250px;
    border-radius: 100%;
    padding-top: 10px; 
    margin: 0px; 
`;

function About() {
    return (
        <StyledDiv> 
        <StyledTaglineDiv> 
            <StyledTaglineContainer>
                <h2> From simple to bespoke designs, Celebration cakes for all occasions. </h2>
            </StyledTaglineContainer>
        </StyledTaglineDiv>
           <StyledPhotoAndTextContainer>  
                <StyledLogo src={logo} alt="Candid Cakery Logo"></StyledLogo>
                <StyledP>Candid Cakery is an independent bakery based in Brighton, East Sussex. 
            Gingerbread chocolate candy. Sweet roll danish dragée chocolate. Candy chocolate bar toffee brownie.</StyledP>
            </StyledPhotoAndTextContainer>
        </StyledDiv>

    )
}

export default About;
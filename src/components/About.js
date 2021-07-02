import React from 'react';
import styled from 'styled-components';
import logo from './images/logo.jpeg';
import ValentinesCupcakes from './images/valentinesCupcakes.jpg';

const StyledDiv = styled.div`
    width: 100vw;
    height: 88vh;
    min-height: 440px;
    display: flex;
    flex-direction: column;
    background-image: url(${ValentinesCupcakes});
    background-size: cover;
    background-clip: border-box;
    background-position: center;
`;

const StyledTextContainer = styled.div`
    height: 100%;
    display: flex;
    align-items: center; 
    flex-direction: column;
    padding: 5vw;
`;

const StyledP = styled.h1`
    font-family: ${props => props.theme.fonts.fancy};
    color: ${props => props.theme.colors.darkPurple};
    font-weight: 500;
    letter-spacing: 2px; 
    font-size: clamp(1rem, 1.5vw, 1.75rem); 
    padding: 5vw;
    border-radius: 10px;
    box-shadow: 0px 1px 27px 1px rgba(251, 227, 248, 0.5);
    background-color: rgba(255, 255, 255, 0.9);
    text-align: center;
`;

const EmptyDiv = styled.div`
    height: 30vh;
    @media (min-width: 1000px) {
        height: 25vh;
    }
`;
// rgba(251, 227, 248, 0.5) pink
// rgba(54,40,103,0.5) purple

function About() {
    return (
        <StyledDiv> 
           <StyledTextContainer>  
           <EmptyDiv />
                <StyledP>Candid Cakery is an independent bakery based in Brighton, East Sussex. <br/> <br/>
            From simple to bespoke designs, we can create, bake and decorate cakes for all celebrations and occasions.</StyledP>
            </StyledTextContainer>
        </StyledDiv>

    )
}

export default About;
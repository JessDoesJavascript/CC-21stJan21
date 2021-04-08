import React from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';


const StyledDiv = styled.div`
    width: 100vw;
    background-color: ${props => props.theme.colors.palePink};
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
    height: 100vh;
    

`; 

const StyledH3 = styled.h3`
    color: ${props => props.theme.colors.darkPurple};
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 600;
    font-size: 40px; 
    letter-spacing: 2px; 
    margin: 10px; 
    padding: 10px; 
`;

const StyledReviewCardsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    flex-direction: column;
    
`;


function Testimonials() {
    return (
        <StyledDiv> 
        <a id="testimonials" href="testimonials" />
            <StyledH3>testimonials</StyledH3>
            <StyledReviewCardsContainer>
                <ReviewCard content="The cake looked beautiful and tasted even better!"></ReviewCard>
                <ReviewCard content="The cake looked beautiful and tasted even better!"></ReviewCard>
                <ReviewCard content="The cake looked beautiful and tasted even better!"></ReviewCard>
            </StyledReviewCardsContainer>

        </StyledDiv>
    )
}

export default Testimonials;
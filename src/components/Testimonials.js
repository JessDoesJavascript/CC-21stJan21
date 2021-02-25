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
    display: flex;
    align-items: center;
    justify-content: center; 
`;


function Testimonials() {
    return (
        <StyledDiv> 
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
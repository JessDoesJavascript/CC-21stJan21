import React from 'react';
import styled from 'styled-components';

const StyledReviewCardContainer = styled.div`
    background-color: white; 
    margin: 10px;
`;

const StyledP = styled.p`
    padding: 10px; 
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.darkPurple};
    font-weight: 500;
    letter-spacing: 1px; 
`;


function ReviewCard(props) {
    return (
        <StyledReviewCardContainer>
            <StyledP>{props.content}</StyledP>
        </StyledReviewCardContainer>
    )
}

export default ReviewCard;
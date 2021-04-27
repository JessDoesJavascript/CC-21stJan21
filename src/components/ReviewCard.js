import React from 'react';
import styled from 'styled-components';

const StyledReviewCardContainer = styled.div`
    background-color: white; 
    margin: 10px;
    width: 70vw;
`;

const StyledP = styled.p`
    padding: 10px; 
    padding-left: 20px;
    padding-right: 20px;
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.darkPurple};
    font-weight: 500;
    letter-spacing: 1px; 
`;
const StyledAuthor = styled.p`
    padding: 10px; 
    padding-left: 20px;
    padding-right: 20px;
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.darkPurple};
    font-weight: 500;
    letter-spacing: 1px; 
`;


function ReviewCard(props) {
    return (
        <StyledReviewCardContainer>
            <StyledP>{props.content}</StyledP>
            <StyledAuthor>{props.author}</StyledAuthor>
        </StyledReviewCardContainer>
    )
}

export default ReviewCard;
import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.palePink};
    height: 100%;
    display: flex;
    justify-content: center; 
    
    
`;

const StyledH3 = styled.h3`
    
    color: ${props => props.theme.colors.darkPurple};
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 600;
    font-size: 40px; 
    letter-spacing: 2px; 
    margin-top: 0px;
    padding: 10px; 


`;

function Gallery() {
    return (
        <StyledDiv>
            <StyledH3>the gallery</StyledH3>
        </StyledDiv>
    )

}

export default Gallery;
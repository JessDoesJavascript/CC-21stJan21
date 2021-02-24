import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.palePink}; 
    
`;

const StyledImg = styled.img`
    height: 250px;
    border: solid 10px white;
    margin: 5px;

`;

const StyledCaption = styled.p`
`;

function GalleryImage(props) {
    return(
        <StyledDiv>
            <StyledImg src={props.img}></StyledImg>
            <StyledCaption>{props.caption}</StyledCaption>
        </StyledDiv>
    )
}

export default GalleryImage;
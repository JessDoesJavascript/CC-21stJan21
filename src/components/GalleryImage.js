import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    background-color: white; 
    
`;

const StyledImg = styled.img`
    height: 250px;
    border: solid 10px white;
    margin: 5px;
    :hover {
        box-shadow: 0px 1px 11px -1px rgba(0,0,0,0.5);
    }
    
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
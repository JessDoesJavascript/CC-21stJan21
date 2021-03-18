import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    background-color: white; 
    opacity: 50%;
    
    
    
`;

const StyledImg = styled.img`
    height: 100px;
    border: solid 10px white;
    margin: 5px;
    
    
`;


function GalleryImage(props) {
    return(
        <StyledDiv onClick={props.click}>
            <StyledImg src={props.img}></StyledImg>
        </StyledDiv>
    )
}

export default GalleryImage;
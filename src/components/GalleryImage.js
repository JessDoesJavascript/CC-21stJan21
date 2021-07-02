import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    background-color: white; 
`;

const StyledImg = styled.img`
    max-width: 300px;
    border: solid 10px white;
   
   
    
    
    
`;


function GalleryImage(props) {
    return(
        <StyledDiv onClick={props.click}>
            <StyledImg src={props.img} alt={props.alt}></StyledImg>
        </StyledDiv>
    )
}

export default GalleryImage;
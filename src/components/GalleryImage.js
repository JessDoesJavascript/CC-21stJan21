import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    background-color: white; 
`;

const StyledImg = styled.img`
    height: 100px;
    border: solid 10px white;
    margin: 5px;
    :hover {
        cursor: pointer;
        box-shadow: 1px 7px 0px -5px ${props => props.theme.colors.lilac};
    }
    
    
    
`;


function GalleryImage(props) {
    return(
        <StyledDiv onClick={props.click}>
            <StyledImg src={props.img} alt={props.alt}></StyledImg>
        </StyledDiv>
    )
}

export default GalleryImage;
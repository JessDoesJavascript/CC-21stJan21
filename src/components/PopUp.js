import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
    position: absolute; 
    width: 100%;
    height: 100%;
    opacity: 50%;
    background-color: red; 
`;

const StyledCard = styled.div`
    width: 70%;
    height: 70%;
    background-color: white; 
    opacity: 100%;
`;

function PopUp (props) {

    return (
        <StyledDiv>
            <StyledCard></StyledCard>
        </StyledDiv>
    )
}

export default PopUp;
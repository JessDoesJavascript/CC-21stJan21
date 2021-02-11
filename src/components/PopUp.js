import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(255,0,0, 0.5);
`;

const StyledCard = styled.div`
  position: absolute;
  left: 25%;
  right: 25%;
  top: 25%;
  bottom: 25%;
  margin: auto;
  border-radius: 20px;
  background: white;
`;

const StyledButton = styled.button`
  font-family: ${props => props.theme.fonts.sansSerif};
  font-weight: 600;
`;

function PopUp(props) {
    return (
        <StyledDiv>
            <StyledCard>
             <h1>{props.title}</h1>
             <p>{props.info}</p>
             <p>{props.image}</p>
                <StyledButton onClick={props.click}>X Close</StyledButton>
            </StyledCard>
        </StyledDiv>
    )
}

export default PopUp;
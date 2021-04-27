import React from 'react';
import styled from 'styled-components';


const StyledDiv = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`;

const StyledCard = styled.div`
  position: absolute;
  left: 10%;
  right: 10%;
  top: 35vh;
  bottom: 20vh;
  margin: auto;
  border-radius: 10px;
  box-shadow: 0px 10px 5px 0px rgba(0,0,0,0.75);
  background: white;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly; 
  align-items: center;
  height: 100%;
  `;

const StyledH1 = styled.h1`
    font-family: ${props => props.theme.fonts.fancy};
    color: ${props => props.theme.colors.lilac};
  `;

const StyledP = styled.p`
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.lilac};
    padding: 5px; 
  `;

const StyledButton = styled.button`
  bottom: 10px;
  font-family: ${props => props.theme.fonts.sansSerif};
  font-weight: 600;

`;

const StyledImage = styled.img`
  width: 50%;
`;

function MenuPopUp(props) {
    return (
        <StyledDiv onClick={props.click}>
            <StyledCard onClick={props.doNothingClick}>
              <StyledInfoContainer>
                  <StyledH1>{props.title}</StyledH1>
                  <StyledP>{props.info}</StyledP>
                  <StyledButton onClick={props.click}>X Close</StyledButton>
                </StyledInfoContainer>
            </StyledCard>
        </StyledDiv>
    )
}

export default MenuPopUp;
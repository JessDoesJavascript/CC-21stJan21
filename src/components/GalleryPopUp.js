import React from 'react';
import styled from 'styled-components';
import images from './images/images';


const StyledDiv = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  background-color: rgba(0,0,0, 0.5);
`;

const StyledCard = styled.div`
  position: absolute;
  left: 1vw;
  right: 1vw;
  top: 25vh;
  bottom: 5vh;
  margin: auto;
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  align-items: center;
  height: 100%;
  width: 85vw;
  
  `;

const StyledH4 = styled.h4`
    font-family: ${props => props.theme.fonts.fancy};
    color: ${props => props.theme.colors.lilac};
  `;

  const StyledButton = styled.button`
  font-family: ${props => props.theme.fonts.fancy};
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.1rem;
  
  color: ${props => props.theme.colors.darkPurple};

  margin-bottom: 10px;
  border: 1px solid ${props => props.theme.colors.lilac};
   :hover { 
      cursor: pointer;
  }
`;

const StyledImage = styled.img`
  max-height: 50vh;
  max-width: 75vw;
`;

const StyledScrollButton = styled.button`
  background-color: white;
  color: ${props => props.theme.colors.lilac};
  height: 100%;
  ${'' /* width: 5vw; */}
  border: none;
  font-size: 30px;
  :hover {
    cursor: pointer;
  }
`;



function GalleryPopUp(props) {
  const imageCollection = images;

  const [imageShown, dispatch] = React.useReducer((state, action) => {
   
   switch(action) {
     case 'left':
       if (state === 0) {
        return imageCollection.length - 1;
        } else 
          return state - 1;
     case 'right':
       if (state === imageCollection.length - 1) {
       return 0 
      } else 
          return state + 1;
    } 
  }, (props.id - 1))


      return (
        <StyledDiv onClick={props.click}>
            <StyledCard onClick={props.doNothing}>
            <StyledScrollButton onClick={() => dispatch('left')}>{'<'}</StyledScrollButton>
              <StyledInfoContainer>              
                    <StyledH4>{imageCollection[imageShown].title}</StyledH4>
                    <StyledImage src={imageCollection[imageShown].img} alt={imageCollection[imageShown].alt} />
                    <StyledButton onClick={props.click}> X Close </StyledButton>
              </StyledInfoContainer>
              <StyledScrollButton onClick={() => dispatch('right')}>{'>'}</StyledScrollButton>
            </StyledCard>
        </StyledDiv>
      )
            }

export default GalleryPopUp;



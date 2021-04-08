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
  left: 5%;
  right: 5%;
  top: 5%;
  bottom: 5%;
  margin: auto;
  border-radius: 10px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
`;

const StyledInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  height: 100%;
  

  `;

const StyledH4 = styled.h4`
    font-family: ${props => props.theme.fonts.fancy};
    color: ${props => props.theme.colors.lilac};
  `;

const StyledP = styled.p`

  `;

const StyledButton = styled.button`
  bottom: 10px;
  font-family: ${props => props.theme.fonts.sansSerif};
  font-weight: 600;
  

`;

const StyledImage = styled.img`
  max-width: 200px;
  @media (min-width: 321px) {
    max-height: 70vh;
    max-width: 50vw;
  }
  
  
`;

const StyledLeftButton = styled.button`
  background-color: white;
  color: ${props => props.theme.colors.lilac};
  height: 20px;
  border: none;
  
`;

const StyledRightButton = styled.button`
  background-color: white;
  color: ${props => props.theme.colors.lilac};
  height: 20px;
  border: none;
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
            <StyledLeftButton onClick={() => dispatch('left')}> {'<'} </StyledLeftButton>
              <StyledInfoContainer>              
                    <StyledH4>{imageCollection[imageShown].title}</StyledH4>
                    <StyledImage src={imageCollection[imageShown].img} alt={imageCollection[imageShown].alt} />
                    <StyledButton onClick={props.click}> X Close </StyledButton>
              </StyledInfoContainer>
              <StyledRightButton onClick={() => dispatch('right')}> {'>'} </StyledRightButton>
            </StyledCard>
        </StyledDiv>
      )
            }

export default GalleryPopUp;



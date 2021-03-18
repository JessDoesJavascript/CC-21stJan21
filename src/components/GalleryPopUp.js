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
  left: 100px;
  right: 100px;
  top: 5%;
  bottom: 5%;
  margin: auto;
  border-radius: 10px;
  background: white;
  display: flex;
  justify-content: space-between;
  
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

  `;

const StyledButton = styled.button`
  bottom: 10px;
  font-family: ${props => props.theme.fonts.sansSerif};
  font-weight: 600;

`;

const StyledImage = styled.img`
  height: 50%;
  flex-grow: 1;
  padding: 10px
  
`;

const StyledLeftButton = styled.button`
`;

const StyledRightButton = styled.button`
`;

function GalleryPopUp(props) {

  // const [imageShown, setImageShown] = React.useState(0)
 
  // let numberOfImages = imageCollection.length;

  // function goLeft() {

  // }
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
  }, 0)


      return (
        <StyledDiv onClick={props.click}>
            <StyledCard onClick={props.doNothing}>
            <StyledLeftButton onClick={() => dispatch('left')}> Left! </StyledLeftButton>
              <StyledInfoContainer>              
                    <StyledH1>{imageCollection[imageShown].title}</StyledH1>
                    <StyledP>{imageCollection[imageShown].alt}</StyledP>
                    <StyledImage src={imageCollection[imageShown].img} alt={imageCollection[imageShown].alt} />
              </StyledInfoContainer>
              <StyledRightButton onClick={() => dispatch('right')}> right </StyledRightButton>
            </StyledCard>
        </StyledDiv>
      )
            }

export default GalleryPopUp;



import React from 'react';
import styled from 'styled-components';
import images from './images/images';
import GalleryPopUp from './GalleryPopUp';
import GalleryImage from './GalleryImage';


const StyledDiv = styled.div`
    background-color: white;
    height: 100%;
    display: flex;
    justify-content: center; 
    flex-direction: column;
    align-items: center;
`;

const StyledH3 = styled.h3`   
    color: ${props => props.theme.colors.darkPurple};
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 600;
    font-size: 40px; 
    letter-spacing: 2px; 
    margin-top: 0px;
    padding: 10px; 
`;

const StyledPhotosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center; 
    justify-content: center; 
    width: 50%;
`;  

const StyledButton = styled.button`

`;

class TestGallery extends React.Component {

    state = {
        popUpShown: false,
        popUpContent: {
            title: "",
            image: "",
            description: ""
        }
    }
    
    clickHandler = () => {
        this.setState({
            popUpShown: !this.state.popUpShown,
        })
    }

    doNothing = (e) => {
        e.stopPropagation();
      }
 
    render() { 
        let imageCollection = images;
        return (
            <StyledDiv>
            <StyledH3>the gallery</StyledH3>
            <StyledButton onClick={() => {this.clickHandler()}}> Click here to open the gallery! </StyledButton>
            <StyledPhotosContainer>
                 {imageCollection.map(image => (
                        <GalleryImage img={image.img} alt={image.alt} click={this.clickHandler}></GalleryImage>
                        ))}
                    </StyledPhotosContainer>
            
            {this.state.popUpShown === false ? null : <GalleryPopUp 
                                                                        click={this.clickHandler}
                                                                        doNothing={this.doNothing}
                                                                 />
                                                                 }
                    
            </StyledDiv>
        )
    }
}

export default TestGallery;
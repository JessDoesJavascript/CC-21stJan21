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

const EmptyDiv = styled.div`
    height: 20vh; 
`;

const StyledH3 = styled.h3`   
    color: ${props => props.theme.colors.darkPurple};
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 400;
    font-size: 40px; 
    letter-spacing: 2px; 
    padding: 10px; 
`;

const StyledPhotosContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center; 
    justify-content: center; 
    width: 100vw;
    
`;  



class Gallery extends React.Component {
    state = {
        popUpShown: false,
        imgId: 0
    }
    clickHandler = () => {
        this.setState({
            popUpShown: !this.state.popUpShown,
        })
    }
    imageClick = (id) => {
        this.setState({
            popUpShown: !this.state.popUpShown,
            imgId: id
        })
    }
    doNothing = (e) => {
        e.stopPropagation();
      }
    render() { 
        let imageCollection = images;
        return (
            <StyledDiv>
            <EmptyDiv></EmptyDiv>
            <StyledH3>Gallery</StyledH3>
            
            <StyledPhotosContainer>
                 {imageCollection.map(image => (
                        <GalleryImage 
                            img={image.img} 
                            alt={image.alt} 
                            id={image.id} 
                            key={image.id} 
                            click={() => this.imageClick(image.id)}>
                        </GalleryImage>
                        ))}
            </StyledPhotosContainer>
            
            {this.state.popUpShown === false ? null : <GalleryPopUp     
                                                            id={this.state.imgId}
                                                            click={this.clickHandler}
                                                            doNothing={this.doNothing}         
                                                                 />}                          
            </StyledDiv>
        )
    }
}

export default Gallery;
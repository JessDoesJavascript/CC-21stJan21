import React from 'react';
import styled from 'styled-components';
import biscoffCake from './images/biscoffCake.jpg';
import cupcakes from './images/cupcakes.png';
import chocolateCake from './images/chocolateCake.jpg';
import GalleryImage from './GalleryImage';
import carrotCake from './images/carrotCake.jpg';
import choccyCake from './images/choccyCake.jpg';
import chocoholicCake from './images/chocoholicCake.jpg';
import cremeEggCake from './images/cremeEggCake.jpg';
import easterCake from './images/easterCake.jpg';
import easterEggCake from './images/easterEggCake.jpg';
import lotusCake from './images/lotusCake.jpg';
import marsCupcakes2 from './images/marsCupcakes2.jpg';
import outsideCake from './images/outsideCake.jpg';
import pinkCake from './images/pinkCake.jpg';
import speckledCake from './images/speckledCake.jpg';
import valentinesCupcakes from './images/valentinesCupcakes.jpg';


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
    

`;  



function Gallery() {
    let imageArray = [biscoffCake, carrotCake, choccyCake, chocoholicCake, 
                      chocolateCake, cremeEggCake, easterCake, 
                      easterEggCake, lotusCake, marsCupcakes2, outsideCake, 
                      pinkCake, speckledCake, valentinesCupcakes];

    return (
        <StyledDiv>
            <StyledH3>the gallery</StyledH3>
                <StyledPhotosContainer>
                    {imageArray.map(image => (
                        <GalleryImage img={image}></GalleryImage>
                    ))}
                </StyledPhotosContainer>
        </StyledDiv>
    )

}

export default Gallery;
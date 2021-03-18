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
import lotusCake from './images/lotusCake.jpg';
import marsCupcakes2 from './images/marsCupcakes2.jpg';
import outsideCake from './images/outsideCake.jpg';
import pastelCake from './images/pastelCake.jpg';
import pinkCake from './images/pinkCake.jpg';
import speckledCake from './images/speckledCake.jpg';
import valentinesCupcakes from './images/valentinesCupcakes.jpg';
import GalleryPopUp from './GalleryPopUp';


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

const StyledImg = styled.img`
    width: 200px;
`;



class Gallery extends React.Component {
    imageCollection = [
        {   id: 1,
            title: "Biscoff Cake",
            img: biscoffCake,
            alt: "A cake decorated with lotus biscuits."
        },
        {
            id: 2,
            title: "Halloween Cake",
            img: carrotCake,
            alt: "A cake decorated with cream frosting and small molded orange and white pumpkins."
            },
        {
            id: 3,
            title: "Chocolate orange, rolo and caramac cake.",
            img: choccyCake,
            alt: "A cake decorated with dripping chocolate, chocolate orange slices, rolos, chocolate brownie pieces and caramac bars."
            },
        {   
            id: 4,
            title: "Kinder bueno, minstrel and guylian chocolate cake.",
            img: chocoholicCake,
            alt: "A dark chocolate sponge cake decorated with white dripping chocolate, pieces of kinder bueno, seashell shaped chocolates and minstrels."
            },
        {   
            id: 5,
            title: "Chocolate malteser, galaxy and aero cake.",
            img: chocolateCake,
            alt: "A sponge cake decorated with dark dripping chocolate and pieces of aero, galaxy and maltesers."
        },
        {
            id: 6,
            title: "Creme Egg Cupcake.",
            img: cremeEggCake,
            alt: "A cupcake with lilac icing, decorated with sprinkles and two cadburys creme eggs."
        },
        {
            id: 7,
            title: "Easter Cake",
            img: easterCake,
            alt: "A large pastel coloured cake with speckles, topped with grass-like icing and lots of mini eggs and colourful sprinkles."
        },
        {
            id: 8,
            title: "Lotus biscuit cake.",
            img: lotusCake,
            alt: "A cake decorated with lotus biscuits."
        },
        {
            id: 9,
            title: "Snickers cupcakes",
            img: marsCupcakes2,
            alt: "4 cupcakes decorated with white icing, caramel and slices of snickers."
        },
        {
            id: 10,
            title: "Double layered rafaello coconut cake",
            img: outsideCake,
            alt: "A coconut sponge cake with two layers and cream icing."
        },
        {
            id: 11,
            title: "Funky pastel Easter cake",
            img: pastelCake,
            alt: "An iced cake decorated with colourful icing, sprinkles and mini eggs."
        },
        {
            id: 12,
            title: "Pink cake",
            img: pinkCake,
            alt: "A tall pink cake with white dripping icing, pink sprinkles and pink buttercream."
        },
        {
            id: 13,
            title: "Easter cake",
            img: speckledCake,
            alt: "A tall speckled cake decorated with grass-like icing and mini eggs."
        },
        {   
            id: 14,
            title: "Valentines Cupcakes",
            img: valentinesCupcakes,
            alt: "Assorted cupcakes with various combinations of cream, lilac and pink icing, and colourful sprinkles and hearts."
        },
    ]
    state = {
        popUpShown: false,
        imageShown: this.imageCollection[0],
        popUpContent: {
            title: "",
            image: "",
            description: ""
        }
    }

    clickHandler = (img) => {
        this.setState({
            popUpShown: !this.state.popUpShown,
            popUpContent: {
                title: img.title,
                image: img.img,
                description: img.alt
            }
        })
    }

    scrollClick = (str, img) => {
        this.setState({
            popUpContent: {
                title: "",
                image: "",
                description: "",
            }
        })
    }

    doNothing = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }
    render() { 


        return (
            <StyledDiv>
                <StyledH3>the gallery</StyledH3>
                {this.state.popUpShown === false ? null : <GalleryPopUp click={this.clickHandler} 
                                                                 doNothingClick={this.doNothing} 
                                                                 
                                                                 title={this.state.popUpContent.title}
                                                                 info={this.state.popUpContent.description}
                                                                 image={this.state.popUpContent.image}/>}
                    <StyledPhotosContainer>
                    
                        {this.imageCollection.map(image => (
                        <GalleryImage img={image.img} alt={image.alt} click={() => {this.clickHandler(image)}}></GalleryImage>
                        ))}
                    </StyledPhotosContainer>
            </StyledDiv>
        )
    }
    
}

export default Gallery;
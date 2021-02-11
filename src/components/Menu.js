import React from 'react';
import styled from 'styled-components';
import brownies from './images/brownies.jpg';
import chocolateCake from './images/roloCake.jpg';
import cupcakes from './images/marsCupcakes.jpg';
import tieredCake from './images/tieredCake.jpg';
import PopUp from './PopUp';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.palePink};
    width: 100%; 
    display: flex; 
    flex-direction: column; 
    align-items: center; 
`;

const StyledH3 = styled.h3`
    color: ${props => props.theme.colors.darkPurple};
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 600;
    font-size: 40px; 
    letter-spacing: 2px; 
    margin: 10px; 
    padding: 10px; 

`;

const StyledImg = styled.img`
    width: 250px; 
    margin-left: 10px;
    margin-right: 10px;
    margin-top: 10px;
    border: 10px solid white; 
`;

const StyledImagesContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;     
`;

const StyledImgCard = styled.div`
    background: white; 
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
`;

const StyledButton = styled.button`
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 600;
    background: white;
    margin: 0px; 
    margin-bottom: 10px; 
    width: 250px;
    font-size: 25px;
    letter-spacing: 2px; 
    cursor: pointer; 
    color: ${props => props.theme.colors.darkPurple};
    border: none;
    border-bottom: solid 5px ${props => props.theme.colors.palePink};
    :hover {
        border-bottom: solid 5px ${props => props.theme.colors.lilac}
    }
`;


class Menu extends React.Component {
    
    state = {
        popUpShown: false,  
        popUpContent: {
            title: "",
            info: "",
            image: ""
        }
    }

    clickHandler = (s) => {
        if (s === 'brownies') {
            this.setState({
                popUpContent: {
                    title: "Brownies",
                    info: "Info about brownies!",
                    image: "Image placeholder"
                }
            })
        } else if (s === 'cakes') {
            this.setState({
                popUpContent: {
                    title: "Cakes",
                    info: "Info about cakes",
                    image: "Image placeholder"
                }
            })
        } else if (s === 'cupcakes') {
            this.setState({
                popUpContent: {
                    title: "Cupcakes",
                    info: "Info about cupcakes",
                    image: "Image placeholder"
                }
            })
        } else if (s === 'tiered-cakes') {
            this.setState({
                popUpContent: {
                    title: "Tiered cakes",
                    info: "Info about tiered cakes",
                    image: "Image placeholder"
                }
            })
        } 
        this.setState({
            popUpShown: !this.state.popUpShown,
        })
    }


    render() {
        return (
            <StyledDiv> 
                <StyledH3> the menu </StyledH3>
                {this.state.popUpShown === false ? null : <PopUp click={this.clickHandler} 
                                                                 title={this.state.popUpContent.title} 
                                                                 info={this.state.popUpContent.info} 
                                                                 image={this.state.popUpContent.image}/>}
                <StyledImagesContainer> 
                {/* Brownies image and button */}
                    <StyledImgCard>
                        <StyledImg src={brownies} alt='Chocolate oreo brownies.'></StyledImg>
                        <StyledButton onClick={() => {this.clickHandler('brownies')}}>Brownies</StyledButton>
                    </StyledImgCard>

                {/* Cakes image and button  */}
                    <StyledImgCard>
                        <StyledImg src={chocolateCake} alt='Chocolate cake decorated with various chocolate bars and sweets'></StyledImg>
                        <StyledButton onClick={() => {this.clickHandler('cakes')}}>Cakes</StyledButton>
                    </StyledImgCard>

                {/* Cupcakes image and button  */}
                    <StyledImgCard>
                        <StyledImg src={cupcakes} alt='Cupcakes decorated with buttercream and slices of mars bar.'></StyledImg>
                        <StyledButton onClick={() => {this.clickHandler('cupcakes')}}>Cupcakes</StyledButton>
                    </StyledImgCard>
                
                {/* Tiered cakes  */}
                    <StyledImgCard>  
                        <StyledImg src={tieredCake} alt='Beautiful 3-tiered wedding cake decorated in buttercream and pale pink roses.'></StyledImg>
                        <StyledButton onClick={() => {this.clickHandler('tiered-cakes')}}>Tiered Cakes</StyledButton>
                    </StyledImgCard>
                       
                        
                        
                      
                </StyledImagesContainer>
            </StyledDiv>
        )
    }
}

export default Menu;

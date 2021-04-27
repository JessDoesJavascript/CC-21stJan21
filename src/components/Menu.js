import React from 'react';
import styled from 'styled-components';
import brownies from './images/brownies.jpg';
import chocolateCake from './images/roloCake.jpg';
import cupcakes from './images/marsCupcakes.jpg';
import tieredCake from './images/tieredCake.jpg';
import MenuPopUp from './MenuPopUp';


const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.palePink};
    width: 100%; 
    height: 100%;
    display: flex; 
    flex-direction: column; 
    align-items: center; 
    padding-bottom: 10%;
    padding-top: 5%;
    @media (min-height: 770px) {
        height: 100vh;
    }
    
`;

const TopEmptyDiv = styled.div`
    height: 25vh;
    `;

const BottomEmptyDiv = styled.div`
    height: 10vh;
    @media (min-width: 719px) {
        display: none;
    }
    `;

const StyledH3 = styled.h3`
    color: ${props => props.theme.colors.darkPurple};
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 400;
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
    flex-direction: column; 
    @media (min-width: 600px) {
        flex-direction: row; 
        flex-wrap: wrap;
        justify-content: center;
    }
`;

const StyledImgCard = styled.div`
    background: white; 
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center; 
    padding-bottom: 5px;
    border-bottom: solid 3px white;
    :hover {
        cursor: pointer;
        border-bottom: solid 3px ${props => props.theme.colors.lilac}; 
    }
`;

const StyledButton = styled.button`
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 400;
    background: white;
    margin: 0px; 
    padding: 2px;
    width: 250px;
    font-size: 25px;
    letter-spacing: 2px; 
    cursor: pointer; 
    color: ${props => props.theme.colors.darkPurple};
    border: none;
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
                    info: "Prices start at £15 a tray, flavours can include biscoff, salted caramel, hazelnut and cherry.",
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

    doNothing = (e) => {
        e.preventDefault();
        e.stopPropagation();
    }


    render() {
        return (
            <StyledDiv> 
            <TopEmptyDiv />
                <StyledH3>Menu </StyledH3>
                {this.state.popUpShown === false ? null : <MenuPopUp click={this.clickHandler} 
                                                                 doNothingClick={this.doNothing} 
                                                                 title={this.state.popUpContent.title} 
                                                                 info={this.state.popUpContent.info} 
                                                                 image={this.state.popUpContent.image}/>}
                <StyledImagesContainer> 
                {/* Cakes image and button  */}
                    <StyledImgCard>
                        <StyledImg src={chocolateCake} 
                                   alt='Chocolate cake decorated with various chocolate bars and sweets'
                                   onClick={() => {this.clickHandler('cakes')}}>
                        </StyledImg>
                        <StyledButton onClick={() => {this.clickHandler('cakes')}}>Cakes</StyledButton>
                    </StyledImgCard>

                {/* Cupcakes image and button  */}
                    <StyledImgCard>
                        <StyledImg src={cupcakes} 
                                   alt='Cupcakes decorated with buttercream and slices of mars bar.'
                                   onClick={() => {this.clickHandler('cupcakes')}}>
                        </StyledImg>
                        <StyledButton onClick={() => {this.clickHandler('cupcakes')}}>Cupcakes</StyledButton>
                    </StyledImgCard>
                
                {/* Tiered cakes  */}
                    <StyledImgCard>  
                        <StyledImg src={tieredCake} 
                                   alt='Beautiful 3-tiered wedding cake decorated in buttercream and pale pink roses.'
                                   onClick={() => {this.clickHandler('tiered-cakes')}}>
                        </StyledImg>
                        <StyledButton onClick={() => {this.clickHandler('tiered-cakes')}}>Wedding Cakes</StyledButton>
                    </StyledImgCard>

                {/* Brownies image and button */}
                <StyledImgCard>
                        <StyledImg src={brownies} 
                                   alt='Chocolate oreo brownies.'
                                   onClick={() => {this.clickHandler('brownies')}}>                         
                        </StyledImg>
                        <StyledButton onClick={() => {this.clickHandler('brownies')}}>Other Bakes</StyledButton>
                    </StyledImgCard>
                </StyledImagesContainer>
                <BottomEmptyDiv />
            </StyledDiv>
        )
    }
}

export default Menu;

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
    margin: 10px;
    border: 10px solid white; 
`;

const StyledImgContainer = styled.div`
    display: flex; 
    align-items: center;
    justify-content: space-between;     
    
`;


function Menu () {
    return (
        <StyledDiv> 
            <StyledH3> The Menu </StyledH3>
            <PopUp></PopUp>
            <StyledImgContainer> 
                <StyledImg src={brownies} alt='Chocolate oreo brownies.'></StyledImg>
                <StyledImg src={chocolateCake} alt='Chocolate cake decorated with various chocolate bars and sweets'></StyledImg>
                <StyledImg src={cupcakes} alt='Cupcakes decorated with buttercream and slices of mars bar.'></StyledImg>
                <StyledImg src={tieredCake} alt='Beautiful 3-tiered wedding cake decorated in buttercream and pale pink roses.'></StyledImg>
            </StyledImgContainer>
        </StyledDiv>
    )
}

export default Menu;

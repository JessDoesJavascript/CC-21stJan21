import React from 'react';
import styled from 'styled-components';
import placeholder from './images/placeholder.png';
import logo from './images/logo.jpeg';

const StyledDiv = styled.div`
    background-color: ${props => props.theme.colors.palePink};
    width: 100%;
    display: flex;
    justify-content: center; 
    align-items: center;
    padding-top: 78px;
`;

// const StyledLogo = styled.img`
//     width: 400px;
// `;

const StyledTaglineContainer = styled.div`
    
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.darkPurple};
    display: flex;
    justify-content: center; 
    h2 {
        letter-spacing: 2px;
    }
`;

function Home() {
    return (
        <StyledDiv> 
           
            <StyledTaglineContainer>
                <h2> From simple to bespoke designs. Celebration cakes for all occasions. </h2>
            </StyledTaglineContainer>
        </StyledDiv>
    )
}

export default Home;
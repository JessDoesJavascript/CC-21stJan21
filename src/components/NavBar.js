import React from 'react'
import styled from 'styled-components'

const StyledNavContainer = styled.div`

 display: flex;
 flex-direction: row;
 background: ${props => props.theme.colors.lilac};
 opacity: 100%;

 justify-content: space-between;
 align-items: center;
 h1 {
     font-family: ${props => props.theme.fonts.fancy};
     font-weight: 600;
     letter-spacing: 1px;
     color: white;
     margin: 10px;
     padding: 10px;
 }
`;

const StyledNavBar = styled.nav`
 ul {
     
     list-style-type: none;
     margin: 0;
     padding: 0;
     display: flex;
     flex-direction: row;
     justify-content: flex-end;
 }
 li {
     color: white;
     margin: 10px;
     padding: 10px;
     font-family: ${props => props.theme.fonts.fancy};
     font-weight: 600;
     letter-spacing: 2px;
     font-size: 20px;

 }
`;

function NavBar() {
    return (
        <StyledNavContainer>
        <div><h1> The Candid Cakery </h1></div>
        
            <StyledNavBar>
            
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Menu</li>
                    <li>Services</li>
                    <li>Gallery</li>
                    <li>Testimonials</li>
                    <li>Contact</li>
                </ul>
            </StyledNavBar>
        </StyledNavContainer>
    )
}

export default NavBar
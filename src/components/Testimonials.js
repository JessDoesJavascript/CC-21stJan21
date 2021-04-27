import React from 'react';
import styled from 'styled-components';
import ReviewCard from './ReviewCard';


const StyledDiv = styled.div`
    width: 100vw;
    background-color: ${props => props.theme.colors.palePink};
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center;
 
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

const StyledReviewCardsContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    flex-direction: column;
`;

const EmptyDiv = styled.div`
    height: 125px;
    @media (max-width: 710px) {
        height: 150px;
    }
`;

function Testimonials() {
    return (
        <StyledDiv> 
        <EmptyDiv></EmptyDiv>
            <StyledH3>Testimonials</StyledH3>
            <StyledReviewCardsContainer>
                <ReviewCard content="'Candii’s cake she made for us made our wedding day that little bit more special!! 
                                    She made us a beautiful lemon and elderflower cake similar to Harry 
                                    and Meghan’s cake. With wonderful big white roses on the top! It 
                                    looked amazing and tasted great. I would highly recommend Candii for 
                                    your wedding cake, you'll be in safe hands.'"
                            author=" - Mr & Mrs Williams"></ReviewCard>
                <ReviewCard content="'Got a lovely selection of cookies. We had double choc, red 
                                    velvet and oat and raison. All sooooo delicious, soft on 
                                    the inside and crunchy on the outside! Such a kind and generous 
                                    business owner too. Will be ordering in the future for sure!'"
                            author=" - Sian Rachel"></ReviewCard>
                <ReviewCard content="'Ordered a birthday cake and could not have been happier with the service!  
                                    The cake looked amazing and tasted just as good. Will definitely order again.'"
                            author=" - Ed Stocker"></ReviewCard>
                <ReviewCard content="'I purchased a Biscoff cake for my wife's birthday and I must 
                                    say it was absolutely delicious. I think my eldest boy and 
                                    I got the lions share. Would definitely recommend both Candid
                                     Cakery and the Biscoff cake'"
                            author=" - Simon Reilly"></ReviewCard>
            </StyledReviewCardsContainer>
        <EmptyDiv></EmptyDiv>
        </StyledDiv>
    )
}

export default Testimonials;
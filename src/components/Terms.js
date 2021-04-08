import React from 'react';
import styled from 'styled-components';

const TermsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10%;
    margin-right: 10%;
    justify-content: center;
    align-items: center;
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.darkPurple};
    letter-spacing: 1px;
`;

const StyledH2 = styled.h2`

`;

const StyledP = styled.p`

`;
const TopEmptyDiv = styled.div`
    height: 78px;
    `;


function Terms() {
    return (
        <TermsContainer>
        <TopEmptyDiv></TopEmptyDiv>
            <StyledH2> Terms and Conditions </StyledH2>
           


 <p>Please read these carefully and ensure you agree to these terms of sale before placing an order for any Product(s). </p>

<h4>WORDING OF THESE TERMS OF SALE </h4>

<p>"You" or "customer" means the customer who placed the order, "us" / "I" or "we" means Candid Cakery.</p>


<h4>RECEIPT OF ORDER </h4>
<ol>
        <li> A signature for receipt of the Product(s) is required by whomever collects or receives delivery, assuming all is correct with the Product(s) - details for that situation can be found further down. </li>
        <li> Once the signature has been given the Product(s) is then the customers responsibilty, we will provide information on how to handle and store each order.</li>
        <li> Pictures may also be taken for reference in case of any damage once responsibility has been assumed by the customer.</li>
</ol>

<h4>RETURN POLICY</h4>
<ol>
        <li>If for whatever reason you are unhappy with any part of your order 
            please let me know so I can either provide either a correction, 
            replacement, store credit, partial or full refund, dependant on 
            situation. Please note that, depending on the issue I may ask for return of the 
            item in question as proof, before I can process a replacement or any type of refund.
        </li>
        <li>We can only return the partial or full refund to the orginal debit, credit card or bank account used to pay.</li>
        <li>Since taste is a very personal matter and subjective we cannot accept the 
            return of any Product(s) merely because you do not like the taste. 
            Also please be aware we do not offer free samples.
        </li>
</ol>
<h4>OUR RIGHT TO VARY THESE TERMS & CONDITIONS</h4>
<ol>
        <li>We have the right to revise and amend these Terms and Conditions from 
        time to time, for example, to reflect changes in market conditions 
        affecting our business, changes in technology, changes in payment methods, 
        changes in relevant laws and regulatory requirements.</li>
        <li>You will be subject to the policies and Terms and Conditions 
        in force at the time that you order from us, unless any change 
        to those policies or these Terms and Conditions is required to be 
        made by law or governmental authority (in which case it will apply 
        to orders previously placed by you), or if we notify you of the 
        change to those policies or these Terms and Conditions before we 
        send you the invoice (in which case we have the right to assume that you 
        have accepted the change to the Terms and Conditions).
</li>
</ol>

<h4>DISCLAIMERS</h4>
<ol>
        <li>Orders which were due to be collected by you from my 
        bakery and which you failed to collect on the appointed 
        day, or orders which I have taken back to the bakery 
        because you were not available to receive during the delivery 
        slot agreed for you, must be placed in my fridges overnight to 
        comply with Food Safety legislation. Accordingly these Products 
        cannot be kept by us at an ambient temperature and are therefore 
        likely to deteriorate.
        </li>
        <li> We cannot accept any responsibility for deterioration of the 
        Product(s) in these circumstances. We cannot accept responsibility for 
        damage caused by You or by any person or persons engaged by You to 
        collect Product(s) from our bakery if they are damaged during transit 
        to your home, provided that You or person engaged by You has signed our 
        “receipt of order” confirming that the Product(s) were in good condition 
        and undamaged at the point of collection.
        </li>
        <li>Under no circumstances shall we be liable to you in respect of any 
        complaint concerning any aspect of any Product which is not raised by 
        you within 24 hours of delivery by us or collection by You or person(s) engaged by You.
        </li>
        <li>We will notify you of any Product containing nuts or gelatine on 
        the specific Product’s web page. However, since our kitchens do handle 
        nuts we cannot guarantee that traces of nuts will not be found in our 
        Products and therefore we do not accept any liability for any damage to
         health or any distress caused to you by the consumption of such Products.
        </li>
    </ol>

<h4>POSTCODES WE DELIVER IN</h4>

<ol>
    <li>We deliver to all postcodes within East Sussex for a delivery fee of 
    £1 per mile up to 15 miles one-way, the charge then changes to £2 per mile 
    outside of the 15 mile limit.
</li>
    <li>We only offer free delivery within BN10 postcode, this is not a 
    promotion and cannot be redeemed against any promotions that offer free delivery.
    </li>
</ol>


<h4>ROYAL MAIL EMPLOYEE OFFER</h4>

<ol>
    <li>This offer is valid until otherwise stated.</li>
    <li>Proof of employment with ROYAL MAIL must be given to qualify for this offer.</li>
    <li>You must state if you would like FREE DELIVERY (Within our delivery radius, set out in these Terms of Sale) or 10% off your order.</li>
    <li>If the order is to be delivered within the BN10 postcode or to be collected the promotion will automatically be 10% 
    of the order. You cannot carry any part of this promotion to another order.
    </li>
</ol>

<h4>
    If you have any queries about these Terms of Sale you can email me directly at 'thecandidcakery@hotmail.co.uk'. I will only respond to queries of these Terms of Sale, to place and order please use the form on the website.
</h4>


<TopEmptyDiv></TopEmptyDiv>
        </TermsContainer>
    )
}

export default Terms;
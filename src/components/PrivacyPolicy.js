
import React from 'react';
import styled from 'styled-components';

const PrivacyPolicyContainer = styled.div`
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
     font-weight: 400;
`;

const TopEmptyDiv = styled.div`
    height: 25vh;
    `;


function PrivacyPolicy() {
    return (
        <PrivacyPolicyContainer>
        <TopEmptyDiv></TopEmptyDiv>
            <StyledH2> Privacy Policy </StyledH2>
           


 <p> 
    This Privacy Policy describes how your personal information is collected, 
    used, and shared when you visit and interact with https://candidcakery.co.uk 
    (“The Site”). 
</p>
<h4>
    Personal Information We Collect
</h4>

<p>
    When you fill in the contact form or the order enquiry form, we collect your 
    name, email address, phone number and information pertaining to the order 
    you’d like to place. We refer to this as “order information”. <br/><br/>

    When we talk about “Personal Information” in this Privacy Policy, 
    we are talking both about Order Information.
</p>

<h4>
    How Do We Use Your Personal Information? 
</h4>
<p>
    We use the Order Information that we collect generally to fulfil any orders that are 
    placed, arrange delivery or collection, and provide you with invoices and/or order confirmations.<br/>
    Additionally, we use this Order Information to communicate with you, and screen our messages for potential risk or fraud.
    <br/> <br/>
    We may also share your Personal Information to comply with applicable laws and regulations, 
    to respond to a subpoena, search warrant or other lawful request for information we receive, 
    or to otherwise protect our rights.
</p>

<h4>
    Your Rights
</h4>
<p>
    If you are a European resident, you have the right to access personal information we 
    hold about you and to ask that your personal information be corrected, updated, or deleted. 
    If you would like to exercise this right, please contact us through the contact information below.
        <br/><br/>
    Additionally, if you are a European resident we note that we are processing your 
    information in order to fulfil contracts we might have with you (for example if you make an order), 
    or otherwise to pursue our legitimate business interests listed above. 
</p>
<h4>
    Data Retention
</h4>
<p>
    When you send a message through the site, we will maintain your Order Information for our records unless and until you ask us to delete this information.
</p>
<h4>
    Changes
</h4>
<p>
    We may update this privacy policy from time to time in order to reflect, for example, 
    changes to our practices or for other operational, legal or regulatory reasons.
</p>

<h4>
    Contact Us
</h4>
<p>
    For more information about our privacy practices, if you have questions, or if 
    you would like to make a complaint, please contact us by e-mail at thecandidcakery@hotmail.co.uk. 
</p>


<TopEmptyDiv></TopEmptyDiv>
        </PrivacyPolicyContainer>
    )
}

export default PrivacyPolicy;

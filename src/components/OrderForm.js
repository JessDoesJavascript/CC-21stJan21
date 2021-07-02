import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const StyledContactForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 5%;
    padding-top: 12vh;
    background-color: white; 
`;

const StyledP = styled.p`
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.darkPurple};
    letter-spacing: 1px;
    margin-left: 5vw;
    margin-right: 5vw;
`;

const StyledH3 = styled.h3`
    color: ${props => props.theme.colors.darkPurple};
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 400;
    font-size: clamp(1.75rem, 1.9rem, 2rem);
    letter-spacing: 2px; 
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 10px; 
`;


const StyledP = styled.p`
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.darkPurple};
    letter-spacing: 1px;
    text-align: center;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLabel = styled.label`
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.darkPurple};
    font-weight: 400;
    letter-spacing: 2px; 
    padding: 1rem;
`;

const StyledMessageContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90vw;
`;

const StyledButton = styled.button`
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    letter-spacing: 0.1rem;
    color: ${props => props.theme.colors.darkPurple};
    padding: 5px;
    margin: 10px;
    border: 1px solid ${props => props.theme.colors.lilac};
    box-shadow: 0px 1px 10px -6px rgba(0,0,0,0.75);
    background-color: ${props => props.theme.colors.palePink};
    :hover { 
        cursor: pointer;
    }
`;

const StyledInput = styled.input`
    width: 300px; 
    height: 20px; 
`;

const StyledTextArea = styled.textarea`
    width: 100%;
    height: 150px; 
`;

const EmptyDiv = styled.div`
    height: 78px;
`;

class OrderForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
            eventDate: '',
            dateForCake: '',
            eventType: '',
            message: '',
            send: false,
            buttonText: 'Send Message'
        }
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    resetForm = () => {
        this.setState({
            name: '',
            message: '',
            email: '',
            phoneNumber: '',
            eventDate: '',
            dateForCake: '',
            eventType: '',
            buttonText: 'Message Sent!'
        })
    }

    submitHandler = (e) => {
        e.preventDefault()
        this.setState({
            buttonText: '...sending'
        })

        const params = {
            name: this.state.name,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            eventDate: this.state.eventDate,
            dateForCake: this.state.dateForCake,
            eventType: this.state.eventType,
            message: this.state.message }
            console.log(params)    
            axios
                .post('/sendEnquiry', params)
                .then(res => {
                    this.setState({ sent: true }, this.resetForm())
                })
                .catch(() => {
                    console.log('Message not sent');
                    this.setState({ buttonText: "message not sent" });
        })
    }

    render() {
        const { name, email, phoneNumber, eventDate, dateForCake, eventType, message } = this.state
        return (
            <StyledContactForm>
            <EmptyDiv />
                <StyledH3> Order Enquiries </StyledH3>
                <StyledP> Please note that this website is currently still in development, and messages sent through this contact form go to an email inbox that is not checked regularly. </StyledP>
              
                <StyledForm onSubmit={this.submitHandler}>
                <StyledP>Please note that this website is currently still in development, and messages sent through this contact form go to an email inbox that is not checked regularly.</StyledP>

                {/* Name  */}
                    <StyledContainer> 
                        <StyledLabel htmlFor="name">Your name: </StyledLabel>
                        <StyledInput type="text"
                               name="name"
                               id="name"
                               value={name}
                               onChange={this.changeHandler}
                               required></StyledInput>
                    </StyledContainer>

                {/* Email */}
                    <StyledContainer>
                    <StyledLabel htmlFor="email">Your email address: </StyledLabel>
                        <StyledInput type="email"
                               name="email"
                               id="email"
                               value={email}
                               onChange={this.changeHandler}
                               required></StyledInput>
                    </StyledContainer>

                {/* Phone Number  */}
                    <StyledContainer>
                        <StyledLabel htmlFor="phoneNumber">Your phone number: </StyledLabel>
                        <StyledInput type="tel"
                                     name="phoneNumber"
                                     id="phoneNumber"
                                     value={phoneNumber}
                                     onChange={this.changeHandler}></StyledInput>                    
                    </StyledContainer>

                {/* Date of the event */}
                <StyledContainer> 
                        <StyledLabel htmlFor="eventDate"> The date of your event: </StyledLabel>
                        <StyledInput type="date"
                                     name="eventDate"
                                     id="eventDate"
                                     value={eventDate}
                                     onChange={this.changeHandler}
                                     required></StyledInput>
                    </StyledContainer>

                     {/* Date of delivery */}
                    <StyledContainer> 
                        <StyledLabel htmlFor="dateForCake"> The date you would like your cake: </StyledLabel>
                        <StyledInput type="date"
                                     name="dateForCake"
                                     id="dateForCake"
                                     value={dateForCake}
                                     onChange={this.changeHandler}
                                     required></StyledInput>
                    </StyledContainer>

                    {/* What type of event is it for  */}
                    <StyledContainer>
                        <StyledLabel htmlFor="eventType"> What event is the cake for? For example, birthday, wedding, funeral etc.</StyledLabel>   
                        <StyledInput type="text"
                                     name="eventType"
                                     id="eventType"
                                     value={eventType}
                                     onChange={this.changeHandler}
                                     required></StyledInput>
                    </StyledContainer>
                    
                {/* Message  */}
                    <StyledMessageContainer>
                    <StyledLabel htmlFor="message">Tell us a bit more about what you would like. <br/>
                     Flavour, budget, ideas for theme and decoration, <br/> allergen and dietary requirements are all useful. </StyledLabel>
                        <StyledTextArea type="textarea"
                               name="message"
                               id="message"
                               value={message}
                               onChange={this.changeHandler}
                               required></StyledTextArea>
                    </StyledMessageContainer>
                <StyledButton type="submit">{this.state.buttonText}</StyledButton>
                </StyledForm>
            </StyledContactForm>
        );
    }
}

export default OrderForm;
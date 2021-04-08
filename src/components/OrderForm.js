import React from 'react';
import axios from 'axios';
import styled from 'styled-components';


const StyledContactForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5%;
    padding-top: 10vh;
`;

const StyledH3 = styled.h3`
    color: ${props => props.theme.colors.darkPurple};
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 600;
    font-size: 40px; 
    letter-spacing: 2px; 
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 10px; 
`;

const StyledForm =  styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const StyledLabel = styled.label`
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.darkPurple};
    font-weight: 600;
    letter-spacing: 2px; 
    padding: 1rem;
`;

const StyledNameContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    `;

const StyledEmailContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    width: 300px;
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
                .post('http://localhost:5000/send', params)
                .then(res => {
                    this.setState({ sent: true }, this.resetForm())
                })
                .catch(() => {
                    console.log('Message not sent');
        })
    }

    render() {
        const { name, email, phoneNumber, message, eventDate, dateForCake, eventType } = this.state
        return (
            <StyledContactForm>
            <EmptyDiv />
                <StyledH3> order enquiries </StyledH3>
                <StyledForm onSubmit={this.submitHandler}>

                {/* Name  */}
                    <StyledNameContainer> 
                        <StyledLabel for="name">Your name: </StyledLabel>
                        <StyledInput type="text"
                               name="name"
                               id="name"
                               value={name}
                               onChange={this.changeHandler}></StyledInput>
                    </StyledNameContainer>

                {/* Email */}
                    <StyledEmailContainer>
                    <StyledLabel for="email">Your email address: </StyledLabel>
                        <StyledInput type="email"
                               name="email"
                               id="email"
                               value={email}
                               onChange={this.changeHandler}></StyledInput>
                    </StyledEmailContainer>

                {/* Phone Number  */}
                    <StyledContainer>
                        <StyledLabel for="phoneNumber">Your Phone Number: </StyledLabel>
                        <StyledInput type="tel"
                                     pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                     name="phoneNumber"
                                     id="phoneNumber"
                                     value={phoneNumber}
                                     onChange={this.changeHandler}></StyledInput>
                            
                    </StyledContainer>

                {/* Date of the event */}
                <StyledContainer> 
                        <StyledLabel for="eventDate"> The date of your event: </StyledLabel>
                        <StyledInput type="date"
                                     name="eventDate"
                                     id="eventDate"
                                     value={eventDate}
                                     onChange={this.changeHandler}></StyledInput>
                    </StyledContainer>

                     {/* Date of delivery */}
                    <StyledContainer> 
                        <StyledLabel for="dateForCake"> The date you would like your cake: </StyledLabel>
                        <StyledInput type="date"
                                     name="dateForCake"
                                     id="dateForCake"
                                     value={dateForCake}
                                     onChange={this.changeHandler}></StyledInput>
                    </StyledContainer>

                    {/* What type of event is it for  */}
                    <StyledContainer>
                        <StyledLabel for="eventType"> What event is the cake for? </StyledLabel>
                        <StyledInput type="text"
                                     name="eventType"
                                     id="eventType"
                                     value={eventType}
                                     onChange={this.changeHandler}></StyledInput>
                    </StyledContainer>
                    
                {/* Message  */}
                    <StyledMessageContainer>
                    <StyledLabel for="message">Tell us a bit more about what you would like. <br/>
                     Flavour, budget, ideas for theme and decoration, <br/> allergen and dietary requirements are all useful. </StyledLabel>
                        <StyledTextArea type="textarea"
                               name="message"
                               id="message"
                               value={message}
                               onChange={this.changeHandler}></StyledTextArea>
                    </StyledMessageContainer>
                <StyledButton type="submit">{this.state.buttonText}</StyledButton>
                </StyledForm>
            </StyledContactForm>
        );
    }
}

export default OrderForm;
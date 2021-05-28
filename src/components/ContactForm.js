import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const StyledContactForm = styled.div`
    display: flex;
    background-color: white; 
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5%;
    padding-top: 10vh;
`;

const StyledH3 = styled.h3`
    color: ${props => props.theme.colors.darkPurple};
    font-family: ${props => props.theme.fonts.fancy};
    font-weight: 400;
    font-size: 40px; 
    letter-spacing: 2px; 
    margin-top: 0px;
    margin-bottom: 0px;
    padding: 10px; 
`;

const StyledP = styled.p`
    font-family: ${props => props.theme.fonts.sansSerif};
    color: ${props => props.theme.colors.darkPurple};
    letter-spacing: 1px;
    margin-left: 5vw;
    margin-right: 5vw;
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
    height: 15vh;
    min-height: 100px;
`;

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            phoneNumber: '',
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
            message: this.state.message }
            console.log(params)    
            axios
                .post('/send', params)
                .then(res => {
                    this.setState({ sent: true }, this.resetForm())
                })
                .catch(() => {
                    console.log('Message not sent');
                    this.setState({ buttonText: "message not sent" });
        })
    }

    render() {
        const { name, email, message } = this.state
        return (
            <StyledContactForm>
            <EmptyDiv />
                <StyledH3> Get In Touch </StyledH3>
                <StyledP> If you would like to enquire about placing an order, please visit our <Link to="/order">order enquiries page</Link> and fill in the form there. </StyledP>
                <StyledP> Please note that this website is currently still in development, and messages sent through this contact form go to an email inbox that is not checked regularly. </StyledP>
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

                {/* Message  */}
                    <StyledMessageContainer>
                    <StyledLabel for="message">Your message: </StyledLabel>
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

export default ContactForm;
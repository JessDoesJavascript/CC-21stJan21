import React from 'react';
import styled from 'styled-components';

function ContactForm() {
    return (
      <div className="Form">
          <h1> Contact form test</h1>
          <form>
          <label for="name">*Your Name:</label> <input id="name" type="text" name="name"></input>
          <label for="email">*Your email:</label> <input id="email" type="email" name="email"></input>
          <label for="phone">*Your contact number:</label> <input id="phone" type="tel" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"></input>
          <label for="message">*Your message:</label> <input id="message" type="text" name="message"></input>
          </form>
      </div>
    );
  }
  
  export default ContactForm;
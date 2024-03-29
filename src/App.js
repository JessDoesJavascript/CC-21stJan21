import React from 'react';
import Theme from './components/Theme';
import NavBar from './components/NavBar';
import MobileNavBar from './components/MobileNavBar'
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import OrderForm from './components/OrderForm';
import Terms from './components/Terms';
import PrivacyPolicy from './components/PrivacyPolicy';
import Footer from './components/Footer';
import styled from 'styled-components';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



const StyledDiv = styled.div`
    margin: 0;
    padding: 0;    
`;

class App extends React.Component {
constructor(props) {
  super(props);
  this.state = {
    navBarOpen: false
  }
}

clickHandler = (e) => {
  
  this.setState({
    navBarOpen: !this.state.navBarOpen
  })
}

doNothing = (e) => {
  e.preventDefault();
  e.stopPropagation();
}

closeNav = (e) => {
  e.preventDefault();
  this.setState({
    navBarOpen: false
  })
}
homeButtonClose = (e) => {
  this.setState({
    navBarOpen: false
  })
}

  render() {

  return (
    <Theme>
    <StyledDiv>

    <NavBar click={this.clickHandler} 
            closeNav={this.closeNav} 
            homeButton={this.homeButtonClose}/>
        
    {this.state.navBarOpen === true && <MobileNavBar 
                                        click={this.clickHandler} 
                                        doNothingClick={this.doNothing} /> || null }
                                        
    <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/menu"> 
            <Menu /> 
          </Route>
          <Route exact path="/gallery">
              <Gallery />
          </Route>
          <Route exact path="/testimonials">
            <Testimonials />
          </Route>
          <Route exact path="/contact">
            <ContactForm />
          </Route>
          <Route exact path="/order">
            <OrderForm />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
          <Route exact path="/privacy">
            <PrivacyPolicy />
          </Route>
    </Switch>
    <Footer />
    </StyledDiv>
    </Theme>
  );
}
}

export default App;

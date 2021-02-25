import Theme from './components/Theme';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import ContactForm from './components/ContactForm';
import styled from 'styled-components';


const StyledDiv = styled.div`
    opacity: 100%;
`;

function App() {
  return (
    <Theme>
    <StyledDiv>
    <NavBar />
    <Home />
    <About />
    <Menu /> 
    <Gallery />
    <Testimonials />
    <ContactForm />
    </StyledDiv>
    </Theme>
  );
}

export default App;

import Theme from './components/Theme';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Menu from './components/Menu';
import Gallery from './components/Gallery';
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
    </StyledDiv>
    </Theme>
  );
}

export default App;

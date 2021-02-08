import Theme from './components/Theme';
import Home from './components/Home';
import NavBar from './components/NavBar';
import About from './components/About';
import Menu from './components/Menu';
import PopUp from './components/PopUp';


function App() {
  return (
    <Theme>
    <div className="App">
    <NavBar />
    <Home />
    
    <About />
    <Menu /> 
      
    </div>
    </Theme>
  );
}

export default App;

import {Routes, Route, useLocation} from 'react-router-dom';
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Home from "./pages/Home/Home";
import ParticlesComponent from './utils.js/particles';
import Header from './components/Header/Header';
import './App.css';

function App() {
  const location = useLocation();
  const renderParticlejsToHomePage = location.pathname === "/";
  
  
  return (
    <div className='App'>
      {
        renderParticlejsToHomePage && <ParticlesComponent id = "particles"/>
      }
      
      <Header/>
      <div className='app-content'>
        <Routes>
          <Route path="/" element = {<Home/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/projects" element = {<Projects/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;

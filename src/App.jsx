import React from 'react';
import './App.css';
import { HashRouter , Route} from 'react-router-dom'
import About from './pages/about/About'
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills'
import Contact from './pages/contact/Contact'
import Home from './pages/Home/Home';
import NavBar from './components/navbar/NavBar';
import GoHome from './pages/gohome/GoHome';
import Navbar2 from './components/navbar2/Navbar2';
const App = ()  =>{
  return (
    <div className="App">
    
    <HashRouter>
     <div> 
       {/* <NavBar /> */}
         <Navbar2 />
       <Route path = "/"  exact component = {Home} />
       <Route path = "/about"  component = {About} />
       <Route path = "/projects"  component = {Projects} />
       <Route path = "/links"  component = {Skills} />
       <Route path = "/contact"  component = {Contact} />

     </div>
     
     </HashRouter>

    </div>
  );
}

export default App;
            
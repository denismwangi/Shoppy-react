import logo from './logo.svg';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import MainContent from './components/MainContent';

import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Products from './components/pages/Products'


function App() {
  
  return (
    <Router>
    <div className="container">
      <Header/>
      <Route  exact path="/" component={MainContent} />
      
      <Route path="/products" component={Products}/>
      <Route path="/About-us" component={About}/>
      <Route path="/Contact" component={Contact}/>
      <Footer/>
      
     
     
    </div>

    </Router>
  );

  
}

export default App;

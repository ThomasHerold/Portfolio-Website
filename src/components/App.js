import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Header from './Header';
import Landing from './Landing';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import { HashRouter, Route } from 'react-router-dom';
import "../styles/App.css";


const App = () => {
  
    return (
    <>
     <CssBaseline />
      <HashRouter basename="/">
        <Header />
        <Route exact path="/" component={Landing} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
      </HashRouter>
    </>
    );
}

export default App;
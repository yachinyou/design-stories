import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import './App.css';
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import CaseStudyTemplate from "./Components/CaseStudyTemplate";
import ProcessGraphic from './Components/ProcessGraphic';
import Footer from "./Components/Footer";


import ReactGA from 'react-ga';
ReactGA.initialize('UA-648673-24');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends Component {

  render() {

    return (
      <BrowserRouter>
        <div className="App">
          <NavBar />
          <Route path="/" exact render={props => <Hero header="Home" subheader="home of my projects, coming soon..." {...props} />} />
          <Route path="/ux-case-study-template" exact render={props => <Hero header="UX Case Study Template" subheader="Create a story of strategy, discovery and user delight, fast." {...props} />} />
          <Route path="/ux-case-study-template" exact component={CaseStudyTemplate} />
          <Route path="/design-process-visualization" exact render={props => <Hero header="Design Process Visualization" subheader="Enlighten your audience with effective graphs." {...props} />} />
          <Route path="/design-process-visualization" exact component={ProcessGraphic} />
          <Route path="/" component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Solutions from './pages/Solutions';

import './assets/styles/app.css';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/solutions" component={Solutions} />
        <Route path="/">
          <section className="error">
            page not found
          </section>
        </Route>
      </Switch>
    </>
  );
}

export default App;

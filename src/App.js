import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Knowledges from './pages/Knowledges'
import NotFound from './pages/NotFound'
import Portfolio from './pages/Portfolio'

const App = () => {
  return (
      <>
        <BrowserRouter>
          <Route path="/" component={Home}/>
          <Route path="/competances" component={Knowledges}/>
          <Route path="/contact" component={Contact}/>
          <Route path="/portfolio" component={Portfolio}/>
          <Route  component={NotFound}/>
        </BrowserRouter>
      </>
  );
};

export default App;

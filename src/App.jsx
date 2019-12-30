import React from 'react';
import './App.scss';
import splash from './splash.jpg';

import Footer from './Footer';

const App = () => (
  <div className="main__container">
    <div>
      <h1 className="main__title">React Webpack Boilerplate</h1>
      <p>
        This is one of many React Webpack boilerplates out there on the web.
      </p>
      <img src={splash} alt="splash to demonstrate file loading via webpack" style={{ width: '1024px', height: '768px' }} />
    </div>
    <Footer />
  </div>
);

export default App;

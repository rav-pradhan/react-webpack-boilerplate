import React from 'react';
import './App.scss';

import Footer from './Footer';

const App = () => (
  <div className="main__container">
    <div className="main__content">
      <h1 className="main__title">React Webpack Boilerplate</h1>
      <p>
        This is one of many React Webpack boilerplates out there on the web.
      </p>
    </div>
    <Footer />
  </div>
);

export default App;

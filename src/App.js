import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header';
import Root from '../src/Root';

const App = () => (
  <div>
    <Header />
    <div className="container" style={{ marginTop: 50}}>
      <Root />
    </div>
  </div>
);

export default App;

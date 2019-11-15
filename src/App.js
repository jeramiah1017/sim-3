import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './components/Auth/Auth'
import routes from './routes';

function App() {
  return (
    <div className="App">
      {routes}
      {/* {this.props.Nav === false && this.props.location.pathname.Auth} */}
  
    </div>
  );
}

export default App;

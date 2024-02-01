import React from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './App.css';

const App = () => {
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary">按钮</Button>
      </header>
    </div>
    </>
  );
}

export default App;

import React from "react";
import { BrowserRouter } from "react-router-dom";
import Login from './container/LoginWrapper';
import ProductList from './container/ProductList';
import RouteConfig from "./config/routes";
import Header from "./components/Header";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <RouteConfig />
    </BrowserRouter>
  )
  return <ProductList />
  return <Login />
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

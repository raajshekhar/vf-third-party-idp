import logo from './logo.svg';
import './App.css';
import Login from './container/LoginWrapper';
import ProductList from './container/ProductList';
import { BrowserRouter } from "react-router-dom";
import RouteConfig from "./config/routes";

function App() {
  return (
    <BrowserRouter>
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

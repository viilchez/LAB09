import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';
import React, { StrictMode } from "react";
import { createRoot } from "react-dom";
import Header from "./layout/header";
import Main from './main';
import Footer from "./layout/footer"; 
import Aside from './aside';

const App = () => {
  return (
    <StrictMode>
      <Header />
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '20px' }}>
          <Main /> 
        </div>
        <div>
          <Aside />
        </div>
      </div>
      <Footer /> 
    </StrictMode>
  );
};

const root = createRoot(document.getElementById("root"));
root.render(<App />);

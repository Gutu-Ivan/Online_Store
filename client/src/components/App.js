import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';


const App  = () => (
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
    // <div className="App">
    //   <p>App Component</p>
    // </div>
);

export default App;

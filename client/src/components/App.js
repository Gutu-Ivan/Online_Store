import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Signup from "./Signup";
import Signin from "./Signin";
import NotFound from "./NotFound";

const App  = () => (
    <BrowserRouter>
        <Header/>
        <main>
            <Routes>
                <Route exact path={'/'} component={Home} />
                <Route exact path={'/signup'} component={Signup} />
                <Route exact path={'/sign'} component={Signin} />
                <Route component={NotFound} />
            </Routes>
        </main>
    </BrowserRouter>
    // <div className="App">
    //   <p>App Component</p>
    // </div>
);

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Signup from "./Signup";
import Signin from "./Signin";
import Reset from "./Reset";
import Forgot from "./Forgot";
import NotFound from "./NotFound";

const App  = () => (
    <BrowserRouter>
        <Header/>
        <main>
            <Routes>
                <Route exact path={'/'} element={<Home/>} />
                <Route exact path={'/signup'} element={<Signup/>} />
                <Route exact path={'/signin'} element={<Signin/>} />
                <Route exact path={'/reset-password'} element={<Reset/>} />
                <Route exact path={'/forgot-password'} element={<Forgot/>} />
                <Route path={'*'} element={<NotFound/>} />
            </Routes>
        </main>
    </BrowserRouter>
    // <div className="App">
    //   <p>App Component</p>
    // </div>
);

export default App;
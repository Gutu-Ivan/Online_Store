import React                            from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header                           from './Header';
import Home                             from './Home';
import Signup                           from "./Signup";
import Signin                           from "./Signin";
import Reset                            from "./Reset";
import Forgot                           from "./Forgot";
import NotFound                         from "./NotFound";
import './App.css';

const App = () => (
    <BrowserRouter>
        <Header/>
        <main>
            <Routes>
                <Route exact path={'/'} element={<Home/>}/>
                <Route exact path={'/signup'} element={<Signup/>}/>
                <Route exact path={'/signin'} element={<Signin/>}/>
                <Route exact path={'/reset-password'} element={<Reset/>}/>
                <Route exact path={'/forgot-password'} element={<Forgot/>}/>
                <Route path={'*'} element={<NotFound/>}/>
            </Routes>
        </main>
    </BrowserRouter>
);

export default App;
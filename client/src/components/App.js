import React                            from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header                           from './Header';
import Home                             from './Home';
import Signup                           from "./Signup";
import Signin                           from "./Signin";
import Reset                            from "./Reset";
import Forgot                           from "./Forgot";
import UserDashboard                    from "./UserDashboard";
import AdminDashboard                   from "./AdminDashboard";
import NotFound                         from "./NotFound";
import './App.css';

const App = () => (
    <BrowserRouter>
        <Header/>
        <main>
            <Switch>
                <Route exact path={"/"} component={Home}/>
                <Route exact path={"/signup"} component={Signup}/>
                <Route exact path={"/signin"} component={Signin}/>
                <Route exact path={ '/reset-password' } element={Reset}/>
                <Route exact path={ '/forgot-password' } element={Forgot}/>
                <Route exact path={"/user/dashboard"} component={UserDashboard}/>
                <Route exact path={"/admin/dashboard"} component={AdminDashboard}/>
                <Route path={ '*' } component={NotFound}/>
            </Switch>
        </main>
    </BrowserRouter>
);

export default App;
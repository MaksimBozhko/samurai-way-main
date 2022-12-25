import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";
import {StateProps} from "./redux/state";

type AppProps = {
    state: StateProps
}

function App({state}: AppProps) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile profilePage={state.profilePage} />} />
                    <Route exact path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage} />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

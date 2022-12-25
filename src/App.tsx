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
    addUser: (message: string) => void
}

function App({state, addUser}: AppProps) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Route path='/profile' render={() => <Profile profilePage={state.profilePage} addUser={addUser} />} />
                    <Route exact path='/dialogs' render={() => <Dialogs dialogsPage={state.dialogsPage} />} />
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

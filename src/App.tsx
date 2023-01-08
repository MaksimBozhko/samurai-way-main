import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import {StateProps} from "./redux/state";

type AppProps = {
    state: StateProps
    dispatch: (action:any) => void
}

function App({state, dispatch}: AppProps) {

    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<Navigate to={'/profile'} />} />
                        <Route path='/profile' element={<Profile profilePage={state.profilePage} dispatch={dispatch} />} />
                        <Route path='/dialogs' element={<Dialogs dialogsPage={state.dialogsPage} dispatch={dispatch} />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;

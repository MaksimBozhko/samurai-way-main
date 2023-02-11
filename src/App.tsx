import React, {useEffect} from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {Navigate, Route, Routes} from "react-router-dom";
import Users from "./components/users/users";
import Login from "./components/common/login/Login";
import WithAuthNavigate from "./components/common/withAuthNavigate/WithAuthNavigate";
import {useAppDispatch, useAppSelector} from "./hooks/hooks";
import { initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

let WithNavigateProfile = WithAuthNavigate(Profile)
let WithNavigateDialogs = WithAuthNavigate(Dialogs)
let WithNavigateUsers = WithAuthNavigate(Users)

function App() {
    console.log('profile')
    const dispatch = useAppDispatch()
    const initialized = useAppSelector(state => state.app.initialized)
    useEffect(() => {
        dispatch(initializeApp())
    }, [])
    if (!initialized) return <Preloader/>
    return (
        <div className={'main'}>
            <Header/>
            <div className="app-wrapper">
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/' element={<Navigate to={'/samurai-way-main'}/>}/>
                        <Route path='/samurai-way-main/:userId?' element={<WithNavigateProfile/>}/>
                        <Route path='/dialogs' element={<WithNavigateDialogs/>}/>
                        <Route path='/users' element={<WithNavigateUsers/>}/>
                        <Route path='/login' element={<Login/>}/>
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default App;

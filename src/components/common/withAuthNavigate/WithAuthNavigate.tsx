import React from 'react';
import {useAppSelector} from "../../../hooks/hooks";
import {AuthInitialType} from "../../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const WithAuthNavigate = (Component: React.ComponentType) => {
    const RedirectComponent = () => {
        const {isAuth} = useAppSelector((state): AuthInitialType => state.auth)
        if (!isAuth) return <Navigate to='/login' />
        return <Component />
    }
    return RedirectComponent
};

export default WithAuthNavigate;
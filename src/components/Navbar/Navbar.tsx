import React, {ReactNode} from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";

type activeType = {
    isActive: ReactNode
}
const activeClass = ({isActive}: activeType) => isActive ? s.active : ''

const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <div className={s.item}>
                <NavLink to="/profile" className={activeClass} >Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/dialogs" className={activeClass} >Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="" >News</NavLink>
            </div>
            <div className={s.item}>
                <a href="" >Music</a>
            </div>
            <div className={s.item}>
                <a href="" >Settings</a>
            </div>
        </nav>
    );
};

export default Navbar;

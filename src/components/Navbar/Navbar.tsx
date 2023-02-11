import React, {ReactNode} from 'react';
import s from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import cn from 'classnames'

type activeType = {
    isActive: ReactNode
}
const linkClass = ({isActive}: activeType) => cn(s.item, {[s.active]: isActive })
const Navbar = () => {
    return (
        <nav className={s.navbar}>
            <NavLink to="/profile" className={linkClass}>
                <AccountCircleIcon />
                Profile
            </NavLink>
            <NavLink to="/dialogs" className={linkClass}>
                <MailIcon/>
                Messages
            </NavLink>
            <NavLink to="" className={linkClass}>
                <NewspaperIcon/>
                News
            </NavLink>
            <NavLink to="/users" className={linkClass}>
                <PeopleOutlineIcon/>
                Users
            </NavLink>
            <NavLink to="" className={linkClass}>
                <SettingsApplicationsIcon/>
                Settings
            </NavLink>
            <div className={s.line}></div>
        </nav>
    );
};

export default Navbar;

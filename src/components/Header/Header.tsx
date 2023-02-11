import React from 'react';
import s from './Header.module.css'
import Sign from "../common/Sign/Sign";

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.header_container}>
            <img className={s.img} src="https://static.tildacdn.com/tild3364-3938-4962-b634-303637346334/logo-big-blue.png" alt=""/>
            <Sign />
            </div>
        </div>
    );
};

export default Header;

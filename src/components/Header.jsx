import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Profile = 'Perfil';
const Account = 'Cuenta';
const SignIn = 'Iniciar Sesión';

const Header = () => (
    <header className="header">
        <Link to="/">
            <img className="header__img" src={logo} alt="Platzi Video" />
        </Link>
        <div className="header__menu">
            <div className="header__menu--profile">
                <img src={userIcon} alt="" />
                <p>{Profile}</p>
            </div>
            <ul>
                <li><a href="/">{Account}</a></li>
                <Link to="/login">
                    {SignIn}
                </Link>
            </ul>
        </div>
    </header>
);

export default Header;
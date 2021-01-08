import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { gravatar } from '../utils/gravatar';
import { logoutRequest } from '../actions';
import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Profile = 'Perfil';
const Account = 'Cuenta';
const SignOut = 'Cerrar sesión';
const SignIn = 'Iniciar Sesión';

const Header = props => {
    const { user, isLogin } = props;
    const hasUser = Object.keys(user).length > 0;

    const handleLogout = () => {
        props.logoutRequest({}) //simulation
    }
    const headerClass = classNames('header', {
        isLogin,
    });
    return(
        <header className={headerClass}>
            <Link to="/">
                <img className="header__img" src={logo} alt="Platzi Video" />
            </Link>
            <div className="header__menu">
                <div className="header__menu--profile">
                    {hasUser ? 
                        <img className="gravatar_profile" src={gravatar(user.email)} alt={user.email} />:
                        <img src={userIcon} alt="User Icon" />
                    }
                    <p>{Profile}</p>
                </div>
                <ul>
                    {hasUser ?
                        <li><a href="/">{user.name}</a></li>
                        : null
                    }
                    {hasUser ?
                        <li><a href="/Account">{Account}</a></li>
                        : null
                    }
                    {hasUser ?
                        <li><a href="/login" onClick={handleLogout}>{SignOut}</a></li>
                        :
                        <Link to="/login">
                            {SignIn}
                        </Link>
                    }
                </ul>
            </div>
        </header>
    )
};

const mapStateToProps = state => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = {
    logoutRequest,
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../assets/styles/components/NotFound.scss';

const NotFound = ( { props }) => (
    <>
    <h1 className="notFound_title">{ props }No Encontrado</h1>
    <h2 className="notFound_BackToHome">Regresa al</h2>
    <h2 className="notFound_BackToHome--Home"><Link to="/">HOME</Link></h2>
    </>
);

export default NotFound;
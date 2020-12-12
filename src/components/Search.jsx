import React from 'react';
import '../assets/styles/components/Search.scss';

const Main_Title = '¿Que quieres ver hoy?';
const Search_Text = 'Buscar...';

const Search = () => (
    <section className="main">
        <h2 className="main__title">{Main_Title}</h2>
        <input type="text" className="input" placeholder={Search_Text} /> 
    </section>
);

export default Search;
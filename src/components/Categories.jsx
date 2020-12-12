import React from 'react';
import '../assets/styles/components/Categories.scss';

const My_List = 'Mi lista';

const Categories = ({ Children }) => (
    (<div className="categories">
        <h3 className="categories__title">{My_List}</h3>
        {Children}
    </div>)
)

export default Categories;
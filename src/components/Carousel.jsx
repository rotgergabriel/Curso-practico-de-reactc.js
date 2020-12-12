import React from 'react';
import '../assets/styles/components/Carousel.scss';

const Carousel = ({Children}) => (
    <section className="carousel" >
        <div className="carousel__container">
        {Children}
        </div>
    </section>
);

export default Carousel;

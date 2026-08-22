import React from 'react';
import HeroCarousel from '../components/Banner/Banner';
import DivisionsGrid from '../components/DivisionsGrid/DivisionsGrid';
import DivisionsGrid2 from '../components/DivisionsGrid/DivisionsGrid2';
import AboutSnapshot from '../components/AboutSnapshot/AboutSnapshot';

const HomePages = () => {
    return (
        <div>
            <HeroCarousel/>
            <DivisionsGrid/>
            <DivisionsGrid2/>
            <AboutSnapshot/>
        </div>
    );
};

export default HomePages;
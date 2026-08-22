import React from 'react';
import HeroCarousel from '../components/Banner/Banner';
import DivisionsGrid from '../components/DivisionsGrid/DivisionsGrid';
import DivisionsGrid2 from '../components/DivisionsGrid/DivisionsGrid2';
import AboutSnapshot from '../components/AboutSnapshot/AboutSnapshot';
import LocationMap from '../components/InteractiveMap/InteractiveMap';
import LeadershipMessage from '../components/LeadershipMessage/LeadershipMessage';

const HomePages = () => {
    return (
        <div>
            <HeroCarousel/>
            <DivisionsGrid/>
            <DivisionsGrid2/>
            <AboutSnapshot/>
            <LocationMap/>
            <LeadershipMessage/>
        </div>
    );
};

export default HomePages;
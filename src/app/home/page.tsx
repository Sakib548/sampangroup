import React from 'react';
import HeroCarousel from '../components/Banner/Banner';
import DivisionsGrid from '../components/DivisionsGrid/DivisionsGrid';
import DivisionsGrid2 from '../components/DivisionsGrid/DivisionsGrid2';
import AboutSnapshot from '../components/AboutSnapshot/AboutSnapshot';
import LocationMap from '../components/InteractiveMap/InteractiveMap';
import LeadershipMessage from '../components/LeadershipMessage/LeadershipMessage';
import AwardsRecognition from '../components/AwardsRecognition/AwardsRecognition';
import AffiliationSection from '../components/AffiliationSection/AffiliationSection';
import InvestmentPortfolio from '../components/InvestmentPortfolio/InvestmentPortfolio';
import TrustBadges from '../components/TrustBadges/TrustBadges';
import ContactCTA from '@/components/ContactCTA';

const HomePages = () => {
    return (
        <div className='bg-white'>
            <HeroCarousel/>
            {/* <DivisionsGrid/> */}
            <DivisionsGrid2/>
            <AboutSnapshot/>
            <LocationMap/>
            <LeadershipMessage/>
            <AwardsRecognition/>
            <AffiliationSection/>
            <InvestmentPortfolio/>
            <TrustBadges/>
            <ContactCTA/>
        </div>
    );
};

export default HomePages;
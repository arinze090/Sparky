import React, { useState } from 'react';
import Footer from '../Footer';

import HeroSection from '../HeroSection';
import InfoSection from '../InfoSection';
import { homeObjFour, homeObjOne, homeObjThree, homeObjTwo } from '../InfoSection/Data';
import Navbar from '../Navbar';
import Services from '../Services';
import Sidebar from '../Sidebar';


function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <Navbar toggle={toggle} />
            <HeroSection />
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />
            <InfoSection {...homeObjThree} />
            <InfoSection {...homeObjFour} />
            <Services />
            <Footer />

        </>
    )
};

export default Home;
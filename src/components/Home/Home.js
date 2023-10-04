import React from 'react';
import Header from '../Header/Header';
import Search from '../Search/Search';
import Call from '../Call/Call';
import Treatmenttypes from '../Treatmenttypes/Treatmenttypes';
import Explore from '../Explore/Explore';

const Home = () => {
    return (
        <div>
            <Header/>
            <Search/>
            <Call/>
            <Treatmenttypes/>
            <Explore/>
            
        </div>
    );
};

export default Home;
import React from 'react';
import Call from './Call/Call';
import Header from './Header/Header';
import Search from './Search/Search';
import Treatmenttypes from './Treatmenttypes/Treatmenttypes';
import Explore from './Explore/Explore';

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
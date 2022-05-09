import React from 'react';
import Banner from '../Banner/Banner';
import Inventories from '../Inventories/Inventories';
import Mobile from '../Moblie/Mobile';
import Phone from '../Phone/Phone';



const Home = () => {
    return (
        <div >
            <Banner></Banner>
            <Inventories></Inventories>
            <Phone></Phone>
            <Mobile></Mobile>
            
        </div>
    );
};

export default Home;
import React from 'react';
import Landing from "../component/Landing"
import Highlighs from '../component/Highlighs';
import Featured from '../component/Featured';
import Discounted from '../component/Discounted';
import Explore from '../component/Explore';


function Home() {
    return (
        <>
        <Landing />
        <Highlighs />
        <Featured />
        <Discounted />
        <Explore />
        </>
    );
}

export default Home;
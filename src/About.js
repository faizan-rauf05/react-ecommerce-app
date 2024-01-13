import React from 'react'
import HeroSection from './components/HeroSection'
import { AppProductContext } from './context/ProductContext';

const About = () => {

    const { myName } = AppProductContext();

    const data = {
        name: "About Us",
    }
    return (
        <>
            <p>{myName}</p>
            <HeroSection myData={data} />
        </>
    )
}

export default About

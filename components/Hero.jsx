import Image from 'next/image'
import React, { useState, useEffect } from 'react'

const Hero = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkScreenSize = () => {
            setIsMobile(window.innerWidth < 768); // Change 768 to your breakpoint
        };

        checkScreenSize(); // Check initial size
        window.addEventListener('resize', checkScreenSize); // Add event listener
        return () => window.removeEventListener('resize', checkScreenSize); // Clean up listener on unmount
    }, []);

    return (
        <section className='hero_section'>
            <Image
                className='hero_image'
                src={isMobile ? '/images/HeroMobile.png' : '/images/HeroDesktop.png'}
                layout='fill'
                objectFit='cover'
                alt={isMobile ? 'hero mobile' : 'hero desktop'}
                quality={isMobile ? 20 : 100}
            />
            <div className='centered_container'>
                <div className='hero_text-container'>
                    <h3 className='poppins-semibold'>Quality, Durability, Security</h3>
                    <h1 className='poppins-bold'>Fenco Gates and Fencing</h1>
                    <p className='lato-regular'>Transforming properties with top-notch fencing and gate solutions. Explore our range of modular walls, automated gates, and secure fencing options.</p>
                </div>
                <div className='hero_button-container'>
                    <a href='mailto:example@example.com' className='poppins-semibold button_blue'>REQUEST A QUOTE</a>
                    <a className='poppins-semibold button_white' href="tel:+61423938595">GIVE US A CALL</a>
                </div>
            </div>
        </section>
    )
}

export default Hero

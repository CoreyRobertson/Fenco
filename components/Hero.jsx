import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <section className='hero_section'>
            <Image className='hero_image' src='/images/HeroDesktop.png' layout='fill' objectFit='cover' alt='herodesktop' />
            <div className='centered_container'>
                <div className='hero_text-container'>
                    <h3 className='poppins-semibold'>Quality, Durability, and Security</h3>
                    <h1 className='poppins-bold'>Fenco Gates and Fencing</h1>
                    <p className='lato-regular'>Transforming properties with top-notch fencing and gate solutions. Explore our range of modular walls, automated gates, and secure fencing options.</p>
                </div>
                <div className='hero_button-container'>
                    <a className='poppins-semibold button_blue'>REQUEST A QUOTE</a>
                    <a className='poppins-semibold button_white' href="tel:+61423938595">GIVE US A CALL</a>
                </div>
            </div>
        </section>
    )
}

export default Hero

import CommercialFencingContent from '@/components/CommercialFencingContent'
import Quote from '@/components/Quote'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <>        <section className='hero_section'>
            <Image className='hero_image' src='/images/CommercialFencingBG.png' layout='fill' objectFit='cover' alt='Commercial Fencing Hero' quality={100} />
            <div className='centered_container'>
                <div className='hero_text-container'>
                    <h3 className='poppins-semibold'>This is the subheading</h3>
                    <h1 className='poppins-bold'>Fenco Commercial Fencing</h1>
                </div>
                <div className='hero_button-container' style={{ paddingTop: '1rem' }}>
                    <a className='poppins-semibold button_blue'>REQUEST A QUOTE</a>
                    <a className='poppins-semibold button_white' href="tel:+61423938595">GIVE US A CALL</a>
                </div>
            </div>
        </section>
            <CommercialFencingContent />
            <Quote />
        </>

    )
}

export default Hero
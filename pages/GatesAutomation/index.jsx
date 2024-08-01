import GatesAutomationContent from '@/components/GatesAutomationContent'
import Quote from '@/components/Quote'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <>
            <Head>
                <title>Gates and Automation Services | Fenco Gates and Fencing Melbourne</title>
                <meta name="description" content="Enhance your property's security and convenience with Fenco's premium gates and automation services. We offer state-of-the-art automated gate solutions tailored to your specific needs and aesthetic preferences in metropolitan Melbourne." />
                <meta name="keywords" content="gates and automation, automated gates, gate automation, access control, security gates, Melbourne, Fenco Gates and Fencing, modern gate solutions, property security" />
                <meta property="og:title" content="Gates and Automation Services | Fenco Gates and Fencing Melbourne" />
                <meta property="og:description" content="Discover Fenco's innovative gates and automation solutions, offering seamless access control and enhanced security for your property in Melbourne. Contact us for a free consultation." />
                <meta property="og:image" content="/images/HeroDesktop.png" />
                <meta property="og:url" content="https://www.fencomelbourne.com.au/GatesAutomation" />
                <meta name="robots" content="index, follow" />
            </Head>
            <section className='hero_section'>
                <Image className='hero_image' src='/images/GatesBG.png' layout='fill' objectFit='cover' alt='Commercial Fencing Hero' quality={100} />
                <div className='centered_container'>
                    <div className='hero_text-container'>
                        <h3 className='poppins-semibold'>This is the subheading</h3>
                        <h1 className='poppins-bold'>Fenco Gates and Automation</h1>
                    </div>
                    <div className='hero_button-container' style={{ paddingTop: '1rem' }}>
                        <a className='poppins-semibold button_blue'>REQUEST A QUOTE</a>
                        <a className='poppins-semibold button_white' href="tel:+61423938595">GIVE US A CALL</a>
                    </div>
                </div>
            </section>
            <GatesAutomationContent />
            <Quote />

        </>
    )
}

export default Hero
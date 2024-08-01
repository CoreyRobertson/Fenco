import ModularContent from '@/components/ModularContent'
import Quote from '@/components/Quote'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <>
            <Head>
                <title>Modular Wall Services | Fenco Gates and Fencing Melbourne</title>
                <meta name="description" content="Transform your property with Fenco’s premium modular wall installation services. As an accredited ModularWalls® trade partner, we offer durable, noise-reducing walls that enhance privacy and curb appeal for residential, commercial, and industrial applications in Melbourne." />
                <meta name="keywords" content="modular wall services, modular walls, noise-reducing walls, privacy walls, ModularWalls®, wall installation, Melbourne, Fenco Gates and Fencing, residential walls, commercial walls, industrial walls" />
                <meta property="og:title" content="Modular Wall Services | Fenco Gates and Fencing Melbourne" />
                <meta property="og:description" content="Discover Fenco's expert modular wall solutions in Melbourne. We provide durable, aesthetically pleasing walls that enhance privacy and reduce noise for various applications. Contact us for a free site visit." />
                <meta property="og:image" content="/images/HeroDesktop.png" />
                <meta property="og:url" content="https://www.fencomelbourne.com.au/ModularWalls" />
                <meta name="robots" content="index, follow" />
            </Head>
            <section className='hero_section'>
                <Image className='hero_image' src='/images/ModularBG.png' layout='fill' objectFit='cover' alt='Commercial Fencing Hero' quality={100} />
                <div className='centered_container'>
                    <div className='hero_text-container'>
                        <h3 className='poppins-semibold'>This is the subheading</h3>
                        <h1 className='poppins-bold'>Fenco Modular Walls</h1>
                    </div>
                    <div className='hero_button-container' style={{ paddingTop: '1rem' }}>
                        <a className='poppins-semibold button_blue'>REQUEST A QUOTE</a>
                        <a className='poppins-semibold button_white' href="tel:+61423938595">GIVE US A CALL</a>
                    </div>
                </div>
            </section>
            <ModularContent />
            <Quote />
        </>
    )
}

export default Hero
import CommercialFencingContent from '@/components/CommercialFencingContent'
import Quote from '@/components/Quote'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <>
            <Head>
                <title>Commercial Fencing Services | Fenco Gates and Fencing Melbourne</title>
                <meta name="description" content="Enhance the security and professional appearance of your commercial property with Fenco’s robust fencing solutions. Our commercial fencing options, including palisade and speartop fencing, provide maximum security and durability. Servicing metropolitan Melbourne, trust Fenco for quality craftsmanship and seamless installations." />
                <meta name="keywords" content="commercial fencing, fencing solutions, palisade fencing, speartop fencing, security fencing, industrial fencing, office fencing, retail property fencing, Melbourne, Fenco Gates and Fencing" />
                <meta property="og:title" content="Commercial Fencing Services | Fenco Gates and Fencing Melbourne" />
                <meta property="og:description" content="Explore our comprehensive commercial fencing solutions at Fenco. From palisade to speartop fencing, we offer robust options to secure and enhance your property in metropolitan Melbourne." />
                <meta property="og:image" content="/images/HeroDesktop.png" />
                <meta property="og:url" content="https://www.fencomelbourne.com.au/CommercialFencing" />
                <meta name="robots" content="index, follow" />
            </Head>
            <section className='hero_section'>
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
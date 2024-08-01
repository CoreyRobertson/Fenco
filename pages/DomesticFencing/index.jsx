import DomesticFencingContent from '@/components/DomesticFencingContent'
import Quote from '@/components/Quote'
import Head from 'next/head'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
    return (
        <>
            <Head>
                <title>Domestic Fencing Services | Fenco Gates and Fencing Melbourne</title>
                <meta name="description" content="Enhance the security and aesthetic appeal of your home with Fenco’s reliable domestic fencing services. We offer a range of residential fencing options that combine durability with style. Serving metropolitan Melbourne, trust Fenco for quality craftsmanship and seamless installations." />
                <meta name="keywords" content="domestic fencing, residential fencing, home fencing, wooden fences, metal fences, security fencing, Melbourne, Fenco Gates and Fencing, home privacy fencing, high-quality fencing" />
                <meta property="og:title" content="Domestic Fencing Services | Fenco Gates and Fencing Melbourne" />
                <meta property="og:description" content="Discover Fenco's reliable domestic fencing services in Melbourne. We provide a range of high-quality residential fencing options to enhance your home's security and aesthetic appeal." />
                <meta property="og:image" content="/images/HeroDesktop.png" />
                <meta property="og:url" content="https://www.fencomelbourne.com.au/DomesticFencing" />
                <meta name="robots" content="index, follow" />
            </Head>
            <section className='hero_section'>
                <Image className='hero_image' src='/images/DomesticFencingBG.png' layout='fill' objectFit='cover' alt='Commercial Fencing Hero' quality={100} />
                <div className='centered_container'>
                    <div className='hero_text-container'>
                        <h3 className='poppins-semibold'>This is the subheading</h3>
                        <h1 className='poppins-bold'>Fenco Domestic Fencing</h1>
                    </div>
                    <div className='hero_button-container' style={{ paddingTop: '1rem' }}>
                        <a className='poppins-semibold button_blue'>REQUEST A QUOTE</a>
                        <a className='poppins-semibold button_white' href="tel:+61423938595">GIVE US A CALL</a>
                    </div>
                </div>
            </section>
            <DomesticFencingContent />
            <Quote />
        </>

    )
}

export default Hero
import Image from 'next/image'
import React from 'react'

const Intro = () => {
    return (
        <section className='intro_section' id='about'>
            <div className='centered_container'>
                <div className='intro_body'>
                    <div className='intro_left'>
                        <h3 className='poppins-semibold section_subheading'>
                            Who We Are.
                        </h3>
                        <h1 className='poppins-bold section_heading'>
                            Your trusted partner in automated gates, modular walls and commercial fencing solutions.
                        </h1>
                        <p className='lato-regular'>Welcome to Fenco, we provide top-quality fencing and automation solutions across the Melbourne metro and peninsula areas. As an accredited trade partner with ModularWalls®, we specialize in a diverse range of services including premium modular wall installations, state-of-the-art automated gates, and robust commercial and residential fencing.
                            <br />
                            <br />
                            Whether enhancing the privacy and aesthetic appeal of your home with our stylish domestic fences or securing your business premises with our durable palisade and speartop fencing options, Fenco is committed to delivering exceptional craftsmanship and unparalleled service.
                        </p>
                        <a className='poppins-semibold button_blue'>REQUEST A QUOTE</a>
                    </div>
                    <div className='intro_right'>
                        <Image src='/images/Fence3.jpg' layout='fill' alt='fence3' />
                        <Image className='intro_image-float' src='/images/image5.png' height={400} width={300} alt='fence4' objectFit='contain' quality={100} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Intro
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { BsArrowDownLeftSquare } from "react-icons/bs";

const services = [
    {
        id: 1,
        image: '/images/Fence5.png',
        subheading: 'Gates & Automation',
        introText: 'Secure, stylish, and smart access control for your property.',
        link: '/GatesAutomation'
    },
    {
        id: 2,
        image: '/images/Fence1.png',
        subheading: 'Modular Walls',
        introText: 'Elevate your space with sleek and durable modular wall solutions.',
        link: '/ModularWalls'
    },
    {
        id: 3,
        image: '/images/Fence2.jpg',
        subheading: 'Domestic Fencing',
        introText: 'Enhancing home privacy and curb-appeal with quality fencing.',
        link: '/DomesticFencing'
    },
    {
        id: 4,
        image: '/images/Fence6.png',
        subheading: 'Commercial Fencing',
        introText: 'Robust and reliable fencing to safeguard your business premises.',
        link: '/CommercialFencing'
    }
];

const ServicesMain = () => {
    return (
        <section className='services_main-section'>
            <div className='centered_container'>
                <div className='services_body'>
                    <div className='service_card-container'>
                        {services.map(service => (
                            <div className='service_card' key={service.id}>
                                <div className='service_card-image'>
                                    <Image src={service.image} alt={service.subheading} layout='fill' objectFit='cover' quality={100} />
                                </div>
                                <div className='service_card-text'>
                                    <h3 className='poppins-semibold'>{service.subheading}</h3>
                                    <p className='lato-regular'>{service.introText}</p>
                                    <Link className='poppins-semibold' href={service.link}>Explore More <BsArrowDownLeftSquare /></Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicesMain

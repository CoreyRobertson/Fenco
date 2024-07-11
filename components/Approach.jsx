import Image from 'next/image'
import React from 'react'
import { GoShieldCheck } from "react-icons/go";
import { FaAward } from "react-icons/fa6";

const Approach = () => {
    return (
        <section className='approach_section'>
            <div className='centered_container'>
                <h3 className='poppins-semibold section_subheading'>
                    Our Approach.
                </h3>
                <h1 className='poppins-bold section_heading'>
                    What sets us apart.
                </h1>
                <div className='approach_card-container'>
                    <div className='approach_card'>
                        <div className='modular_container'>
                            <Image src='/images/modular.png' width={200} height={25} alt='modularwalls' quality={100} />
                        </div>
                        <h3 className='poppins-semibold section_subheading' style={{ color: '#6CA4DB' }}>Accredited Trading Partner.</h3>
                        <p className='lato-regular'>As a proud ModularWalls® accredited trade partner, we bring you premium standards in modular wall solutions.</p>
                    </div>
                    <div className='approach_card'>
                        <GoShieldCheck className='approach_icon' />
                        <h3 className='poppins-semibold section_subheading' style={{ color: '#6CA4DB' }}>Commitment to Quality.</h3>
                        <p className='lato-regular'>We prioritize excellence in every project, ensuring superior craftsmanship and durable results.</p>
                    </div>
                    <div className='approach_card'>
                        <FaAward className='approach_icon' />
                        <h3 className='poppins-semibold section_subheading' style={{ color: '#6CA4DB' }}>Proven Outcomes.</h3>
                        <p className='lato-regular'>With a track record of successful installations, we deliver reliable and impressive results.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Approach
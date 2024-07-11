import React from 'react'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6 } from "react-icons/ri";

const ModularContent = () => {
    return (
        <section className='page_content-container'>
            <div className='centered_container'>
                <h3 className='poppins-semibold section_subheading'>
                    Modular Wall Services.
                </h3>
                <h1 className='poppins-bold section_heading'>
                    Your trusted expert in premium modular wall solutions.
                </h1>
                <div className='page_content-body'>
                    <div className='page_content-top'>
                        <p className='lato-regular'>Transform your property with Fenco’s top-tier modular wall installation services. As an accredited trade partner with <b>ModularWalls®</b>, we provide expertly designed modular walls that offer a perfect blend of functionality and aesthetics. Our solutions deliver durable, noise-reducing barriers that enhance both privacy and curb appeal. Ideal for residential, commercial, and industrial applications, our modular walls are customizable to meet your specific needs and seamlessly integrate with any landscape.
                            <br />
                            <br />
                            Trust Fenco to deliver exceptional quality and craftsmanship, ensuring a seamless installation process and a finished product that stands the test of time. Elevate your space with Fenco’s innovative modular wall solutions.
                        </p>
                    </div>
                    <div className='page_content-bottom'>
                        <h1 className='poppins-bold section_heading'>
                            Our Installation Process.
                        </h1>
                        <ul>
                            <li className='lato-regular'>
                                <div className='number1'>
                                    <RiNumber1 className='number1_icon' />

                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Site Visit.
                                </h3>
                                After you get in touch with us, we meet you on site for a free, no obligation assessment, where we can offer preliminery advice and information.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber2 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Quote Estimate.
                                </h3>
                                Once we understand the details of your project, we'll provide you with a estimate of the proposed solution.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber3 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Schedule Works.
                                </h3>
                                Once you are happy to proceed, we schedule a start time that is suitable and convenient.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber4 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Order Materials.
                                </h3>
                                After initial payment, we'll handle the ordering of materials and ensure they're delivered to site on time.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber3 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    installation.
                                </h3>
                                Once the big day is here, we'll expertly install your new wall in a tidy, efficient manner, ensuring as minimal site disturbance as possible.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ModularContent
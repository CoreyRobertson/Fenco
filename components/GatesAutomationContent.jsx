import React from 'react'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6 } from "react-icons/ri";

const GatesAutomationContent = () => {
    return (
        <section className='page_content-container'>
            <div className='centered_container'>
                <h3 className='poppins-semibold section_subheading'>
                    Gates and Automation Services.
                </h3>
                <h1 className='poppins-bold section_heading'>
                    Your trusted expert in automated gate and access solutions.
                </h1>
                <div className='page_content-body'>
                    <div className='page_content-top'>
                        <p className='lato-regular'>Enhance the security and aesthetic of your property with Fenco’s premium gates and automation services. Our state-of-the-art automated gate solutions are designed to provide seamless access control, combining robust security with modern convenience. Our automated gates are customizable to fit your unique requirements and aesthetic preferences.
                            <br />
                            <br />
                            Trust Fenco to deliver exceptional quality and craftsmanship, ensuring a smooth installation process and reliable performance. Upgrade your property with Fenco’s innovative automated gate solutions.
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
                                    Initial Consultation.
                                </h3>
                                Our process begins with a comprehensive on-site consultation to understand your needs and preferences. During this free, no-obligation visit, we assess your property and discuss the best gate and automation options for you.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber2 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Customized Quote.
                                </h3>
                                Based on the consultation, we provide a detailed and transparent quote outlining the proposed solution, costs, and timeline. We ensure you have all the information needed to make an informed decision.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber3 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Planning and Scheduling.
                                </h3>
                                Once the quote is approved, we work with you to schedule the installation at a convenient time. Our team will coordinate all logistics to ensure a smooth process.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber4 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Material Procurement.
                                </h3>
                                After receiving your initial payment, we promptly order all necessary materials, ensuring they meet our high standards. We manage the delivery to your site, making sure everything is ready for installation.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber5 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Professional Installation.
                                </h3>
                                On the scheduled day, our experienced technicians will install your automated gate system efficiently and with minimal disruption to your property. We prioritize quality workmanship and attention to detail throughout the installation process.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber6 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Final Inspection and Handover.
                                </h3>
                                After installation, we conduct a thorough inspection to ensure everything is functioning perfectly. We then provide you with a comprehensive handover, including a demonstration of your new system and instructions on its use and maintenance.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GatesAutomationContent

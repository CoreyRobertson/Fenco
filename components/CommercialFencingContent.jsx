import React from 'react'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6 } from "react-icons/ri";

const CommercialFencingContent = () => {
    return (
        <section className='page_content-container'>
            <div className='centered_container'>
                <h3 className='poppins-semibold section_subheading'>
                    Commercial Fencing Services.
                </h3>
                <h1 className='poppins-bold section_heading'>
                    Secure and professional commercial fencing solutions.
                </h1>
                <div className='page_content-body'>
                    <div className='page_content-top'>
                        <p className='lato-regular'>Enhance the security and professional appearance of your commercial property with Fenco’s robust fencing solutions. Our commercial fencing options, including palisade and speartop fencing, are designed to provide maximum security and durability while complementing the aesthetic of your premises. Whether for industrial sites, office complexes, or retail properties, our fencing solutions ensure your property is protected against unauthorized access and vandalism.
                            <br />
                            <br />
                            Trust Fenco to deliver exceptional quality and craftsmanship, ensuring a seamless installation process and a finished product that stands the test of time. Safeguard your business with Fenco’s expert commercial fencing solutions.
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
                                We start with a comprehensive on-site consultation to understand your security needs and fencing preferences. This free, no-obligation visit allows us to assess your property and recommend the best fencing solutions.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber2 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Detailed Proposal.
                                </h3>
                                Following the consultation, we provide a detailed proposal outlining the recommended fencing options, including palisade and speartop designs, costs, and a project timeline.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber3 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Planning and Scheduling.
                                </h3>
                                Once the proposal is approved, we coordinate with you to schedule the installation at a convenient time, ensuring minimal disruption to your business operations.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber4 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Material Procurement.
                                </h3>
                                After the initial payment, we order high-quality materials tailored to your project requirements, ensuring they meet our stringent standards for security and durability.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber5 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Professional Installation.
                                </h3>
                                Our skilled installation team will efficiently install your commercial fence, focusing on precision and quality workmanship. We ensure the installation process is smooth and the site is left clean and orderly.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber6 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Final Inspection and Handover.
                                </h3>
                                After installation, we conduct a thorough inspection to ensure the fence meets our high standards and your expectations. We then provide a comprehensive handover, including maintenance tips and warranty information.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CommercialFencingContent

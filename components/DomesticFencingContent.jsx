import React from 'react'
import { RiNumber1, RiNumber2, RiNumber3, RiNumber4, RiNumber5, RiNumber6 } from "react-icons/ri";

const DomesticFencingContent = () => {
    return (
        <section className='page_content-container'>
            <div className='centered_container'>
                <h3 className='poppins-semibold section_subheading'>
                    Domestic Fencing Services.
                </h3>
                <h1 className='poppins-bold section_heading'>
                    Your go-to source for premium residential fencing.
                </h1>
                <div className='page_content-body'>
                    <div className='page_content-top'>
                        <p className='lato-regular'>Enhance the security and aesthetic appeal of your home with Fenco’s reliable domestic fencing services. Our range of residential fencing options combines durability with style, offering the perfect solution to suit your property's unique requirements. From traditional wooden fences to modern metal designs, we provide high-quality installations that enhance privacy and add value to your home.
                            <br />
                            <br />
                            Trust Fenco to deliver exceptional quality and craftsmanship, ensuring a seamless installation process and a finished product that enhances your property. Protect and beautify your home with Fenco’s expert fencing solutions.
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
                                    Free On-Site Consultation.
                                </h3>
                                Our process starts with a complimentary on-site consultation, where we assess your fencing needs and provide expert advice on the best solutions for your home.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber2 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Detailed Quotation.
                                </h3>
                                Based on the consultation, we offer a detailed quotation that includes a comprehensive breakdown of costs and a clear timeline for the project.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber3 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Scheduling the Project.
                                </h3>
                                Once you approve the quote, we schedule the project at a time that suits you. We ensure all preparations are made for a smooth installation.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber4 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Material Selection and Ordering.
                                </h3>
                                We assist you in selecting the best materials for your fencing project, then place orders to ensure timely delivery ahead of the installation date.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber5 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Professional Installation.
                                </h3>
                                Our skilled team carries out the installation efficiently and with the utmost care, ensuring your new fence is built to the highest standards.
                            </li>
                            <li className='lato-regular'>
                                <div className='number'>
                                    <RiNumber6 className='number_icon' />
                                </div>
                                <h3 className='poppins-semibold section_subheading'>
                                    Final Inspection and Approval.
                                </h3>
                                After installation, we conduct a final inspection to ensure everything meets our quality standards and your satisfaction. We provide a thorough walkthrough and maintenance tips.
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default DomesticFencingContent

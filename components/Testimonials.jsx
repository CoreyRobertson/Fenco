import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Testimonials = () => {
    return (
        <section className='testimonials_section'>
            <div className='centered_container'>
                <div className='testimonials_body'>
                    <h3 className='poppins-semibold section_subheading'>
                        Testimonials.
                    </h3>
                    <h1 className='poppins-bold section_heading'>
                        Don't just take our word for it.
                    </h1>
                    <div className='testimonial_container'>
                        <FaQuoteLeft className='quote left' />
                        <FaQuoteRight className='quote right' />
                        <p className='lato-regular-italic '>After a difficult build, it was an absolute relief to have Joel from Fenco build my modular wall, a divide between 2 townhouses. The product looks fantastic and really adds value to the properties. Once painted, it all came together and definitely adds that contemporary feel. I even decided to do an extra wall to finish off a courtyard. Joel was extremely professional and kept me informed about when he would be on site and what he would be doing. </p>
                        <p className='lato-regular-italic'>It was great that he could also do the painting, and once the job was finished you could not tell he had even been there - no mess at all. I would have no hesitation in recommending Joel, a great easy going personality but professional and always trying to work in with your schedule. A better trades-man would be hard to find.

                            <br />
                            <br />
                            <span className='poppins-semibold'>Lisa Mitchell, Parkdale SA</span>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials
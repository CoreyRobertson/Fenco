import Image from 'next/image'
import React from 'react'

const Quote = () => {
    return (
        <section className='quote_section' id='quote'>
            <Image src='/images/FencoBG2.png' layout='fill' objectFit='cover' alt='FencoBG2' quality={100} />
            <div className='centered_container'>
                <div className='quote_container'>
                    <div className='quote_left'>
                        <h3 className='poppins-semibold section_subheading'>
                            Request a Quote.
                        </h3>
                        <h1 className='poppins-bold section_heading'>
                            Tell us about your project.
                        </h1>
                        <form className="contact_form">
                            <div className="form_group">
                                <label className='poppins-semibold' htmlFor="name">Your Name:<span style={{ color: '#FF0000' }}>*</span></label>
                                <input type="text" id="name" name="name" required placeholder='First Name | Last Name' />
                            </div>
                            <div className="form_group">
                                <label className='poppins-semibold' htmlFor="number">Your Number:</label>
                                <input type="tel" id="number" name="number" required placeholder='04** *** ***' />
                            </div>
                            <div className="form_group">
                                <label className='poppins-semibold' htmlFor="email">Your Email:<span style={{ color: '#FF0000' }}>*</span></label>
                                <input type="email" id="email" name="email" required placeholder='your@email.com' />
                            </div>
                            <div className="form_group">
                                <label className='poppins-semibold' htmlFor="description">Project Description:</label>
                                <textarea id="description" name="description" rows="4" required></textarea>
                            </div>
                            <div className="form_group-last">
                                <button className='poppins-semibold button_blue' type="submit">Submit</button>
                                <a className='poppins-semibold' href="tel:+61423938595">Call: 0423 938 595</a>
                            </div>
                        </form>
                    </div>
                    <div className='quote_right'>
                        <Image src='/images/QuoteFence.png' layout='fill' objectFit='cover' alt='image1' quality={100} />

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Quote
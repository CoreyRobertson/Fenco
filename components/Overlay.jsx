import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { RiCloseLine } from "react-icons/ri"; // Correct import for the close icon
import Image from 'next/image'
import Link from 'next/link'

const Overlay = ({ isVisible, onClose }) => {
    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);

    useEffect(() => {
        if (isVisible) {
            gsap.fromTo(leftSectionRef.current, { x: '-100%' }, { x: '0%', duration: 0.5 });
            gsap.fromTo(rightSectionRef.current, { x: '100%' }, { x: '0%', duration: 0.5 });
        } else {
            gsap.to(leftSectionRef.current, { x: '-100%', duration: 0.5 });
            gsap.to(rightSectionRef.current, { x: '100%', duration: 0.5 });
        }
    }, [isVisible]);

    const handleClose = () => {
        gsap.to(leftSectionRef.current, { x: '-100%', duration: 0.5 });
        gsap.to(rightSectionRef.current, { x: '100%', duration: 0.5, onComplete: onClose });
    };

    return (
        isVisible && (
            <div className='overlay' onClick={handleClose}>
                <div className='left-section' ref={leftSectionRef} onClick={(e) => e.stopPropagation()}>
                    {/* Left section content here */}
                    <Image src='/images/logo.png' alt='Fenco Logo' height={300} width={300} quality={100} />

                    <p className='lato-regular'>Providing Gate, Modular Walls and Fencing solutions across metro Melbourne.</p>
                    <p className='lato-regular'>Joel Eason.</p>
                    <a className='lato-regular' href="tel:+61423938595">0423 938 595</a>



                </div>
                <div className='right-section' ref={rightSectionRef} onClick={(e) => e.stopPropagation()}>
                    <RiCloseLine onClick={handleClose} className='close' />

                    <p className='poppins-semibold'>Services.</p>
                    <Link onClick={handleClose} href='/GatesAutomation' className='lato-regular'>Gates & Automation.</Link>
                    <Link onClick={handleClose} href='/ModularWalls' className='lato-regular'>Modular Walls.</Link>
                    <Link onClick={handleClose} href='/DomesticFencing' className='lato-regular'>Domestic Fencing.</Link>
                    <Link onClick={handleClose} href='/CommercialFencing' className='lato-regular'>Commercial Fencing.</Link>
                    <Link onClick={handleClose} href='/' className='lato-regular'>Home.</Link>
                </div>
            </div>
        )
    );
}

export default Overlay;

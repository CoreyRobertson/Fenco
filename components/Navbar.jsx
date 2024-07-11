import Image from 'next/image'
import React, { useState } from 'react'
import { RiMenu3Line } from "react-icons/ri";
import Overlay from './Overlay';  // Import the Overlay component
import Link from 'next/link';

const Navbar = () => {
    const [isOverlayVisible, setOverlayVisible] = useState(false);

    const toggleOverlay = () => {
        setOverlayVisible(!isOverlayVisible);
    }

    return (
        <>
            <nav>
                <div className='navbar_content'>
                    <Link href='/'>
                        <Image src='/images/logo.png' alt='Fenco Logo' height={70} width={70} quality={100} />
                    </Link>
                    <a className='lato-regular' href="tel:+61423938595"><span>Call us today! - </span>0423 938 595</a>
                    <RiMenu3Line className='menu_icon' onClick={toggleOverlay} />
                </div>
            </nav>
            <Overlay isVisible={isOverlayVisible} onClose={toggleOverlay} />
        </>
    )
}

export default Navbar

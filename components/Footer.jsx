import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import Footerlegal from './FooterLegal';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='centered_container'>
                    <div className='footer_body'>
                        <div className='footer_column'>
                            <Image src='/images/logo.png' height={200} width={200} alt='Fenco Logo' quality={100} />
                            <p className='lato-regular'>Providing Gate, Modular Walls and Fencing solutions across metro Melbourne.</p>
                        </div>
                        <div className='footer_column'>

                            <p className='poppins-semibold'>Services.</p>
                            <Link href='/GatesAutomation' className='lato-regular'>Gates & Automation.</Link>
                            <Link href='/ModularWalls' className='lato-regular'>Modular Walls.</Link>
                            <Link href='/DomesticFencing' className='lato-regular'>Domestic Fencing.</Link>
                            <Link href='/CommercialFencing' className='lato-regular'>Commercial Fencing.</Link>
                            <Link href='/' className='lato-regular' >Home.</Link>
                        </div>
                        <div className='footer_column'>
                            <p className='poppins-semibold'>Get In Touch.</p>
                            <p className='lato-regular'>Joel Eason.</p>
                            <a className='lato-regular' href="tel:+61423938595">0423 938 595</a>
                            <a className='lato-regular'>EMAIL.</a>
                            <a className='lato-regular'>Melbourne, Metropolitan.</a>
                        </div>
                        <div className='footer_column'>
                            <Link href='/'>
                                <div className='footer_icon-container'>
                                    <FaInstagram style={{ color: '#FFFFFF', fontSize: '30' }} />
                                </div>
                            </Link>
                            <Link href='/'>
                                <div className='footer_icon-container'>
                                    <FaFacebookF style={{ color: '#6CA4DB', fontSize: '30' }} />
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>

            </footer>
            <Footerlegal />
        </>
    )
}

export default Footer
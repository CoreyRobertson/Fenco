import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiInstagram } from 'react-icons/ci';

const Gallery = () => {
    return (
        <section className='gallery_section' id='gallery'>
            <Image src='/images/FencoBG1.png' alt='fencobg1' layout='fill' objectFit='cover' quality={100} />

            <div className='gallery_content'>
                <div className='centered_container'>
                    <div className='gallery_grid'>
                        {Array.from({ length: 6 }).map((_, index) => (
                            <Link href='https://www.instagram.com/fencomelbourne?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' key={index} passHref>
                                <div className='gallery_card'>
                                    <Image src={`/images/image${index + 1}.png`} layout='fill' objectFit='cover' alt={`Gallery Image ${index + 1}`} />
                                    <div className='overlay2'>
                                        <CiInstagram className='icon' />
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Gallery;
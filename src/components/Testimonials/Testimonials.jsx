import React from 'react';
import TestiMonialsDetails from './TestimonialsDetails'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import userPic from '../../images/profile.png';
import './Testimonials.css'

const Testimonials = () => {
  
    const isMobile = window.innerWidth <= 1024;
    const testiMonials = [
        {
            name: 'UI/UX Design',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            
            img: 'https://i.ibb.co/hgGJc8d/Gareth-Bale.jpg'
        },
        {
            name: 'Frontend Dev',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
          
            img: 'https://i.ibb.co/z7Kp6yr/np-file-33188.jpg'
        },
        {
            name: 'Backend Dev',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            
            img: 'https://i.ibb.co/CP5sj7g/2856040-58866808-2560-1440.jpg'
        },
        {
            name: 'Database',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s.',
            
            img: 'https://i.ibb.co/10SYccm/1552313010-354215-noticia-normal.jpg'
        },
    ]
    //Owl Carousel Settings
    const options = {
        loop: true,
        center: true,
        items: isMobile ? 1 : 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 2500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    };
    
    return (
        <div id="testimonial" className="testimonial lg:pb-20">
            <div className="container mt-[2rem] lg:mt-[5rem] w-full m-auto">
                <div className="row">
                    <div className="col-md-12 pt-4">
                        <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>
                            {
                                testiMonials.map((testiMonialDetail, index) => (
                                    <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={index} />
                                ))
                            }
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
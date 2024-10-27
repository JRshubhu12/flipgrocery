import React, { useState, useEffect, useRef } from 'react';
import './assets/image 1.svg';
import './assets/logo.svg';
import './assets/banner.svg';
import './assets/in healthy living.svg';
import group1 from './assets/Group 1.svg';
import group2 from './assets/Group 2.svg';
import section1 from './assets/section-image-1.svg'
import section2 from './assets/section-image-2.png'
import pig from './assets/Div [_item_1sdo2_92].svg';
import budget from './assets/Section [_container_1y00k_1].svg';
import budget1 from './assets/budget-img1.svg';
import section3 from './assets/Section [_container_7dll4_1].svg';
import icon from './assets/heart-icon.svg';
import customer from './assets/customer-review.svg';
import questions from './assets/questions.svg';
import logo from './assets/logo.svg';
import dig from './assets/dig-in.svg';
import bannerBottom from './assets/banner-bottom.svg';


import text from './assets/text.svg';
import carousal1 from './assets/carousel-1.svg';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import './carousal.css'; // Import your custom CSS
import './style.css';
import './Footer.css';
// import './responsive.css';

export const MainHome = () => {
    const textOptions = [
        { text1: "The best  ", text2: "simple recipes" },
        { text1: "Healthy  ", text2: "food choices" },
        { text1: "Fresh  ", text2: "organic meals" },
        { text1: "Quick  ", text2: "easy cooking" }
    ];

    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [isDescriptionOpen, setDescriptionOpen] = useState(false);
    const [isRecommendationOpen, setRecommendationOpen] = useState(false);
    const [isDeliveryOpen, setDeliveryOpen] = useState(false); // New state for deliveries section
    
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(intervalId); // Clean up interval on component unmount
    }, [textOptions.length]);

    const carouselRef = useRef(null);

    const handleSlideJump = (index) => {
        if (carouselRef.current) {
            carouselRef.current.moveTo(index); // Move to the desired slide index
        }
    };

    return (
        <div className="scree1">
            <div className="div-container">
        <div className="div">
            <div className="paragraph">
                <div className="text-wrapper">LIMITED TIME:</div>
                <p className="element-off-free-gift-in">
                    <span className="span">30% off + free gift in every delivery </span>
                    <span className="text-wrapper-2">Learn More</span>
                </p>
            </div>
            <div className="image-image" />
        </div>
    </div>

    <div className="navbar">
        <div className="navbar-container">
            <button className="button-52">LogIn</button>
            <div className="image"></div>
            <div className="banner">
                <div className="label-banner">
                    <div className="text-wrapper">The easiest way</div>
                </div>
                <div className="label-banner-2">
                    <div className="text-wrapper2">to eat healthy</div>
                </div>
                <div className="label-banner-3">
                    <p className="the-best-simple">
                        <span className="text-wrapper3">{textOptions[currentTextIndex].text1}</span>
                        <span className="span3">{textOptions[currentTextIndex].text2}</span>
                    </p>
                </div>
                <div className="label">
                    <p className="text-wrapper">for you and your family.</p>
                </div>

                <div className='body'>
                    <img className='in-healthy-living' />
                    <img className="group1" alt="Group" src={group1} />
                    <img className="pig" alt="Pig" src={pig} />
                    <img className="text" alt="Text" src={text} />

                    <div className="box">
                        <p className="legend-1" onClick={() => handleSlideJump(0)}>Slide 1</p>
                        <p className="legend-2" onClick={() => handleSlideJump(1)}>Slide 2</p>

                        <div className="carousel-container">
                            <Carousel showThumbs={false} showArrows={false} showStatus={false}  infiniteLoop ref={carouselRef}>
                                <div>
                                    <img src={carousal1} className="slide-img" alt="Slide 1" />
                                </div>
                                <div>
                                    <img src="https://via.placeholder.com/800x400?text=Slide+2" className="slide-img" alt="Slide 2" />
                                </div>
                                <div>
                                    <img src="https://via.placeholder.com/800x400?text=Slide+3" className="slide-img" alt="Slide 3" />
                                </div>
                            </Carousel>
                        </div>
                        <img src={group2} className="group2" />
                        <p className='text-group2'>Here's How It works:</p>
                        
                        <p className="tell-about">
                            1 Tell us about yourself
                            <span onClick={() => setDescriptionOpen(!isDescriptionOpen)} style={{ cursor: 'pointer', marginLeft: '8px' }}>
                                {isDescriptionOpen ? '-' : '+'}
                            </span>
                            {isDescriptionOpen && (
                                <>
                                    <img src={section1} alt="Description" className="description-image-1" />
                                    <p className='description'>Share your preferences, goals and must-have eats, <br />
                                        so we can recommend food you'll love.
                                    </p>
                                </>
                            )}
                        </p>

                        <p className="recommendation">
                            2 See our recommendation
                            <span onClick={() => setRecommendationOpen(!isRecommendationOpen)} style={{ cursor: 'pointer', marginLeft: '8px' }}>
                                {isRecommendationOpen ? '-' : '+'}
                            </span>
                            {isRecommendationOpen && (
                                <>
                                    <p className="recommendation-description">
                                        We fill your cart with food we think you'll love,<br />
                                        then you edit to get exactly what you want.
                                    </p>
                                    <img src={section2} alt="Recommendation Image" className="description-image-2" />
                                </>
                            )}
                        </p>

                        <p className="deliveries">
                            3 Enjoy healthy deliveries
                            <span onClick={() => setDeliveryOpen(!isDeliveryOpen)} style={{ cursor: 'pointer', marginLeft: '8px' }}>
                                {isDeliveryOpen ? '-' : '+'}
                            </span>
                            {isDeliveryOpen && (
                                <p className="deliveries-description">
                                    Get tasty groceries, easy recipes, and essential supplements delivered to your door.<br />
                                    Skip or cancel anytime.
                                </p>
                            )}
                        </p>

                        <div className='budget'>
                            <img src={budget}></img>
                            <div className="carousel-budget">
                                <Carousel  showThumbs={false} showArrows={false} showStatus={false} autoPlay infiniteLoop>
                                    <div>
                                        <img src={budget1} className="slide-budget" />
                                    </div>
                                    <div>
                                        <img src={budget1} className="slide-budget" />
                                    </div>
                                    
                                </Carousel>
                            </div>                                 
                        </div>
                        <div className='section3'>
                            <img src={section3}></img>
                        </div>
                        <div className='icon'>
                            <img src={icon}></img>
                            <div className='text-ico'>
                            <p className='icon-text'>India's most loved <br></ br>
                            food delivery service</p>
                            </div>
                        </div>
                        <div className='review'>
                            <img src={customer}></img>
                        </div>
                        <div className='questions'>
                            <img src={questions}></img>
                        </div>
                        <div className='logo-bottom'>
                            <img src={logo}></img>
                            <img src={dig} className='dig-in'></img>
                            <img src={bannerBottom} className='bannerBottom'></img>
                        </div>
                        <footer className="footer">
<div className="footer-content">
<div className="logo">
  <img src="path-to-your-logo.png" alt="Logo" />
</div>
<div className="footer-text">
  <p>Groceries, Recipes, Reviews, Gifts</p>
</div>
<div className="app-store-logos">
  <a href="link-to-play-store" target="_blank" rel="noopener noreferrer">
    <img src="path-to-play-store-logo.png" alt="Download on Play Store" />
  </a>
  <a href="link-to-app-store" target="_blank" rel="noopener noreferrer">
    <img src="path-to-app-store-logo.png" alt="Download on App Store" />
  </a>
</div>
</div>
<div className="footer-bottom">
<p>All rights reserved.</p>
<ul className="footer-links">
  <li><a href="link-to-teams">Teams</a></li>
  <li><a href="link-to-privacy">Privacy</a></li>
  <li><a href="link-to-accessibility">Accessibility</a></li>
</ul>
</div>
</footer>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
            

    );
};

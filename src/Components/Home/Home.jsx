import React from 'react';
import { Link } from 'react-router-dom';
import { SiYourtraveldottv } from 'react-icons/si';
import { FaArrowRightLong } from 'react-icons/fa6';
import { TiSocialFacebook, TiSocialLinkedin, TiSocialTwitter, TiSocialInstagram } from 'react-icons/ti';
import './home.scss';

const Home = () => {
  return (
    <section className='container'>
      <div className='travelLogo'>
        <Link to="/" className='logo'>
          <h1><SiYourtraveldottv />Travel</h1>
        </Link>

        <nav>
          <Link to="/about">ABOUT</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>
      </div>

      <div className="btnContainer">
        <button className='btn'>
          <Link to="/get-start">Get started <FaArrowRightLong className='icon' /></Link>
        </button>

        <div className="soc-media">
          <TiSocialFacebook className='fb' />
          <TiSocialLinkedin className='lin' />
          <TiSocialTwitter className='twit' />
          <TiSocialInstagram className='insta' />
        </div>
      </div>    
    </section>
  )
}

export default Home;

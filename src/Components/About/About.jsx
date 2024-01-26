import React from 'react';
import { Link } from 'react-router-dom';
import { SiYourtraveldottv } from "react-icons/si";

const About = () => {
  return (
    <section className='sectionAbout'>
        <Link to="/" className='aboutlogo'>
          <h1><SiYourtraveldottv />Travel</h1>
        </Link>
        <div className="containerAbout">
            <div className="aboutcontent">
                <h1 className='aboutH1'>ABOUT</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nulla lacus, porta at fringilla ut, maximus placerat sapien. Cras in dolor quam. Nulla molestie nec velit ut placerat. Nam placerat justo id dolor rhoncus, et tempus eros elementum. Pellentesque vitae orci sit amet magna pulvinar convallis. Suspendisse urna justo, ullamcorper.
                </p>
            </div>

            <div className='hotelLogo'>
                <a href="https://www.hilton.com/en/" target="_blank"><img className='logo1' src="hiltonas.svg" alt="" />
                </a>

                <a href="https://www.dukeshotel.com/" target="_blank"><img className='logo1' src="logo.svg" alt="" />
                </a>

                <a href="https://www.victoriapalacehotels.com/" target="_blank"><img className='logo1' src="logoVici.png" alt="" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default About

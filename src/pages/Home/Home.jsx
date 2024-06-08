import React from 'react'
import './home.css';
import {Link} from "react-router-dom";
import {Animate} from 'react-simple-animate';
import heroImg from "../../images/hero-img.png";

const Home = () => {

  return (
    <section id='home' className='home'>
      <div className='home-text'>
        <div className='home-img'>
          <img src={heroImg} alt="hero-img" />
        </div>
        <h1>
          ARUN KUMAR
        </h1>
        <h2>
          Web Developer
        </h2>

        <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform : 'translateY(550px)'
        }}
        end={{
          transform : 'translatex(0px)'
        }}
        >
          <div className='connect'>
            <Link to="https://www.linkedin.com/in/arunydv01/">
              <img src="/linkedin.png" alt="linkedin" />
            </Link>
            <Link to="https://github.com/arunydv01?tab=repositories">
              <img src="/github.png" alt="github" />
            </Link>
          </div>
        </Animate>
        
      </div>
    </section>
    
  )
}

export default Home
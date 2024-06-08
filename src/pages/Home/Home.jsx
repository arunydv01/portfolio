import React from 'react'
import './home.css';
import {Link} from "react-router-dom";
import {Animate} from 'react-simple-animate';

const Home = () => {

  return (
    <section id='home' className='home'>
      <div className='home-text'>
        <h1>
          Hi, I'm Arun Kumar,
          <br />
          Creative Web Developer.
        </h1>
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
            <Link to="https://www.linkedin.com/in/arunydv01/" className='connect-btn'>
              <button>
                Lets Connect
              </button>
            </Link>
          </div>
        </Animate>
        
      </div>
    </section>
    
  )
}

export default Home
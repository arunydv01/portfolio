import React from 'react'
import PageHeader from '../../components/PageHeader/PageHeader'
import { IoIosContact } from "react-icons/io";
import "./contact.css";
import {Animate} from 'react-simple-animate';

const Contact = () => {
  return (
    <section id='contact' className='contact'>
      <PageHeader
      headerText = "Contact Me"
      icon = {<IoIosContact size={30}/>}
      /> 
      <div className='contact-content'>
        <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform: "translateX(-200px)"
        }}
        end={{
          transform: "translateX(0px)"
        }}
        >
          <h3 className='header-text'>Drop a message</h3>
        </Animate>
        <Animate
        play
        duration={1}
        delay={0}
        start={{
          transform: "translateX(200px)"
        }}
        end={{
          transform: "translateX(0px)"
        }}
        >
          <div className='form'>
            <div className='control-wrapper'>
              <div>
                <input type="text" name="name" className='input-name' required/>
                <label htmlFor="name" className='name-label'>Name</label>
              </div>
              <div>
              <input type="email" name="email" className='input-email' required/>
              <label htmlFor="email" className='email-label'>Email</label>
              </div>
              <div>
              <textarea type="text" name="desc" className='input-desc' required rows="5"/>
              <label htmlFor="desc" className='desc-label'>Message</label>
              </div>
            </div>
            <button>Send</button>
          </div>
        </Animate>
      </div>
    </section>
  )
}

export default Contact
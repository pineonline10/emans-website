import React from 'react'
import Mario from '../img/mariokart.png'
import { Parallax } from 'react-parallax'
const TextBoxTwo = () => {
  return (
    <div className='text-box-container'>
    <div className='text-box'>
       <h3>Creative Vision</h3> 
       <p>
       P.I. places significant emphasis on developing compelling intellectual properties IPs, akin to Valve’s strategic creation of immersive game worlds. By fostering unique and engaging game narratives and environments, P.I. aspires to build a portfolio of games that not only captivates players but also establishes a foundation for long-term community engagement and expansion. This focus on IP development is central to P.I.'s vision, aiming to replicate the success and sustainability seen in Valve’s iconic franchises by leveraging community-driven content and innovative storytelling.

        Understanding the power of strategic partnerships and the profound impact of marrying innovative gameplay with beloved characters, we are inspired by Velan Studios’ successful collaboration with Nintendo on Mario Kart Live: Home Circuit. This partnership not only leveraged Nintendo’s iconic IP but also demonstrated the profound impact of combining innovative gameplay with beloved characters, leading to significant commercial success, with over 1.73 million units sold.
       </p>
    </div>
    <Parallax className='parallax-box' strength={300}>
  <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={Mario} alt="Mario Kart" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
  </div>
</Parallax>
    </div>
    
  )
}

export default TextBoxTwo
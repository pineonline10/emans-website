import React from 'react'
import Frankenstein from '../img/frankenstein.png'
import Superman from '../img/Untitled 2.png'
import Dudesy from '../img/Untitled 3.png'
import { Parallax } from 'react-parallax'
const TextBoxTwo = () => {
  return (
    <div className='text-box-container'>
    <div className='text-box'>
       <p>
       In addition to exploring partnerships with recognized brands and characters, we recognize the immense potential of the public domain as a source of inspiration for creating games with strong followings. Leveraging well-known mythology and characters, such as those found in classic literature, allows us to tap into a rich narrative wellspring. One notable example within our development pipeline is a game based on Frankenstein’s monster. Drawing from the beloved classic, we envision crafting an immersive experience that honors the original story’s depth and complexity, showcasing our capability to transform familiar tales into unique gaming experiences. As fans of the original books, we are particularly excited about the opportunity to bring a nuanced and engaging interpretation of Frankenstein’s monster to life in the gaming world.</p>
      </div>
      <Parallax className='parallax-box' strength={200}>
  <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={Frankenstein} alt="Frankenstein" style={{ width: '100%', maxWidth: '500px', height: '100%' }} />
  </div>
</Parallax>
       <div className='text-box'>
        <p>Following this strategy, we are exploring the development of a Superman game, addressing a longstanding gap in the market for a high-quality game centered around this iconic character. Despite numerous attempts, a universally acclaimed Superman game has yet to emerge, presenting us with a unique opportunity to set a new industry standard.
       </p>
    </div>
    <Parallax className='parallax-box' strength={200}>
  <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={Superman} alt="Superman" style={{ width: '100%', maxWidth: '300px', height: '100%' }} />
  </div>
</Parallax>
    <div className='text-box'>
      <p>Additionally, we are developing a tie-in sports simulator named “Dudesyball,” inspired by the popular AI-driven podcast, Dudesy. This venture into sports simulation, coupled with the podcast’s engaged community, represents our innovative approach to blending entertainment mediums with interactive gaming experiences.</p>
    </div>
    <Parallax className='parallax-box' strength={200}>
  <div style={{ height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={Dudesy} alt="Dudesy" style={{ width: '100%', maxWidth: '300px', height: '100%' }} />
  </div>
</Parallax>
    </div>
    
  )
}

export default TextBoxTwo
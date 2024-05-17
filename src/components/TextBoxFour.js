import React from 'react'
import DefJam from "../img/Def_Jam_Crew_1.webp"
import { Parallax } from 'react-parallax'
import Coheed from "../img/coheed.png"
const TextBoxFour = () => {
  return (
    <div className='text-box-container'>
    <div className='text-box'>
       <p>
       Expanding on our strategy to innovate within the intersection of entertainment mediums, we are exploring collaborations with musical acts whose narratives and aesthetics align with interactive gaming experiences. Our vision extends beyond integrating artists’ music into video games; we aim to craft games that are fundamentally inspired by and interwoven with the essence of the artists’ work. A prime illustration of this concept in action is the acclaimed fighting game, Def Jam Vendetta, which not only featured artists from the Def Jam record label but also creatively encapsulated the spirit of their music within the gaming experience.
       </p>
    </div>
    <Parallax className='parallax-box' strength={200}>
  <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={DefJam} alt="Def Jam" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
  </div>
</Parallax>
<div className='text-box'>
       <p>
       In pursuit of this vision, we are considering partnerships with bands like Coheed & Cambria, a renowned group from upstate New York. Their extensive catalogue, which includes a rich tapestry of comic books and thematic content tied to their albums, presents an ideal foundation for developing immersive, narrative-driven games. This approach not only leverages the existing fan base of the artists but also introduces new dimensions to their musical narratives, offering fans and gamers alike a unique and engaging experience.
       </p>
    </div>
    <Parallax className='parallax-box' strength={200}>
  <div style={{ height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
    <img src={Coheed} alt="Coheed" style={{ width: '100%', maxWidth: '500px', height: 'auto' }} />
  </div>
</Parallax>
    </div>
    
  )
}

export default TextBoxFour
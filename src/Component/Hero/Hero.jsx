import React from 'react'
import './Hero.css'
import { GiForestCamp } from "react-icons/gi";
import Text from '../../assets/Text.png'
import AdvText from '../../assets/Adventure_Camping_text.png'

function Hero() {
  return (
    <div className='hero_container'>
      <div className="hero_info">
        <div className="hero_textimg">
          <img src={Text} alt="Tryin to chill" />
        </div>
        <div className="hero_text">
            <img src={AdvText} alt="" />
            <h2>camp is more <br></br> that just a world, it's an experince!</h2>
            <p>let's go <GiForestCamp /></p>
        </div>
      </div>
    </div>
  )
}

export default Hero

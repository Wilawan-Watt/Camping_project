import React from 'react'
import './Activity.css'
import Camping from '../../assets/Adventure Campling.png'
import Bonfire from '../../assets/bonfire.png'
import Kayak from '../../assets/kayak.png'
import Stargaze from '../../assets/stargaze.png'
import Wildlife from '../../assets/wildlife.png'

function Activity() {
  return (
    <div className='activity_wrapper' id='activity'>
      <div className="activity_container">
        <div className="activity_item1">
            <p>activity</p>
            <h1>camp will be for you <br></br> what you want it to be.</h1>
            <img src={Camping} alt="" />
        </div>

        <div className="activity_item2">
            <div className="item_wrapper1">
                <img src={Wildlife} alt="Wild life" />
                <h3>wild life</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quam labore? Voluptatum eius est non iusto, totam beatae ut ab!</p>
            </div>

            <div className="item_wrapper2">
                <img src={Stargaze} alt="Stargazing" />
                <h3>stargazing</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quam labore? Voluptatum eius est non iusto, totam beatae ut ab!</p>
            </div>

            <div className="item_wrapper3">
                <img src={Bonfire} alt="Bonfire" />
                <h3>bonfire</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quam labore? Voluptatum eius est non iusto, totam beatae ut ab!</p>
            </div>

            <div className="item_wrapper4">
                <img src={Kayak} alt="Kayak" />
                <h3>boating</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, quam labore? Voluptatum eius est non iusto, totam beatae ut ab!</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Activity

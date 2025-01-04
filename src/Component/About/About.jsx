import React from 'react'
import './About.css'
import Camper from '../../assets/camper-van.png'
import Caravan from '../../assets/mobile-home.png'
import Tent from '../../assets/tent.png'
import Camp from '../../assets/camping.png'
import Cabin from '../../assets/cabin.png'

function About() {
  return (
    <div className='about_wrapper'id='about'>
      <div className="about_container">
        <div className="about_info">
            <h1>about</h1>
            <h3>welcome to adventure <br></br> camping</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui doloribus, alias nobis aliquam illo at officiis! Delectus quibusdam repellendus autem voluptatem voluptatibus harum deserunt explicabo alias et dicta pariatur, rerum, architecto amet error illo eos dolore ipsam nemo sed recusandae nulla reiciendis numquam tenetur. Repellat quos necessitatibus soluta repellendus suscipit!</p>
            
            <div className="about_item1">
                <div className="about_list">
                    <img src={Camper} alt="Camper" />
                    <h4>5</h4>
                    <p>camper sites</p>
                </div>

                <div className="about_list">
                    <img src={Caravan} alt="Caravan" />
                    <h4>10</h4>
                    <p>caravan sites</p>
                </div>

                <div className="about_list">
                    <img src={Tent} alt="Tent" />
                    <h4>20</h4>
                    <p>tent sites</p>
                </div>

                <div className="about_list">
                    <img src={Camp} alt="Camp" />
                    <h4>20</h4>
                    <p>camp sites</p>
                </div>

                <div className="about_list">
                    <img src={Cabin} alt="Cabin" />
                    <h4>10</h4>
                    <p>cabin sites</p>
                </div>
            </div>

            <div className="about_item2">
                <div className="about_image">
                    <img src="https://images.unsplash.com/photo-1414016642750-7fdd78dc33d9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzZ8fGNhbXBpbmd8ZW58MHx8MHx8fDI%3D" alt="" />
                    <h4>camping area for tents</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum a sequi suscipit doloribus tempora ex, necessitatibus molestiae repellat aliquam.</p>
                </div>

                <div className="about_image">
                    <img src="https://images.unsplash.com/photo-1603161472885-39edf23d7a3e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTd8fGNhbXBlcnxlbnwwfHwwfHx8Mg%3D%3D" alt="" />
                    <h4>trailer & RV sports</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum a sequi suscipit doloribus tempora ex, necessitatibus molestiae repellat aliquam.</p>
                </div>

                <div className="about_image">
                    <img src="https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhYmluJTIwY2FtcHxlbnwwfHwwfHx8Mg%3D%3D" alt="" />
                    <h4>cabins & glamping</h4>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores laborum a sequi suscipit doloribus tempora ex, necessitatibus molestiae repellat aliquam.</p>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About

import React from 'react'
import './Hero.scss'

const Hero = () => {
  return (
    <>
    <section className="hero">
        <div className="container">
           <div className="wrapper">
            <img src="https://imageupscaler.com/wp-content/uploads/2024/07/maple-leaf-enlarged.jpg" alt="" />
            <div className="wrap">
                <h1>Lorem, ipsum.</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi cumque ratione <br /> consequuntur architecto impedit dignissimos saepe neque ipsum consectetur nobis?</p>
                <button>button</button>
            </div>
           </div>
        </div>
    </section>
    </>
  )
}

export default Hero

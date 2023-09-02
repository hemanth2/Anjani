import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container' style={{backgroundColor:'black'
      ,opacity:'0.8'}}>
          <Heading title='Discover Your Perfect Plot' subtitle='Land Listings at Your Fingertips' />
              <button >Contact US<br/><br/>
                9948200252
              </button>
              <br/>
        <br/>
        </div>
        <br/>
      </section>
    </>
  )
}

export default Hero

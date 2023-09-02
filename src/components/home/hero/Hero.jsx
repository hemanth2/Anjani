import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Discover Your Perfect Plot' subtitle='Land Listings at Your Fingertips' />
        </div>
      </section>
    </>
  )
}

export default Hero

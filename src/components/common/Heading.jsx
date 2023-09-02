import React from "react"

const Heading = ({ title, subtitle }) => {
  return (
    <>
      <div className='heading'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
        <br/>
        <br/>
        <br/>
      </div>
    </>
  )
}

export default Heading

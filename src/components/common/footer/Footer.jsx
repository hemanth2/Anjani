import React from "react"
import { footer } from "../../data/Data"
import "./footer.css"

const Footer = () => {
  return (
    <>
    <div  style={{marginTop:'300px'}}></div>
      <footer>
        <br/>
        <div className='container'>
          <div className='box'>
            <div className='logo'>
              <h2>Anjani Putra Estates</h2>
              <h3>Mancherial , Adilabad</h3>
            </div>
          </div>
        </div>
      </footer>
      <div className='legal'>
        <span>© 2023 AnjaniPutra Estates. Designed By CBIT DEV</span>
      </div>
    </>
  )
}

export default Footer
